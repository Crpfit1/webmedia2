import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface NewsletterSubscriber {
  id?: string
  nom: string
  prenoms: string
  email: string
  contact: string
  indicatif_pays: string
  created_at?: string
  updated_at?: string
  is_active?: boolean
}

export async function addNewsletterSubscriber(
  subscriber: Omit<NewsletterSubscriber, "id" | "created_at" | "updated_at" | "is_active">,
): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          nom: subscriber.nom,
          prenoms: subscriber.prenoms,
          email: subscriber.email,
          contact: subscriber.contact,
          indicatif_pays: subscriber.indicatif_pays,
        },
      ])
      .select()

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return {
          success: false,
          message: "Cette adresse email est déjà inscrite à notre newsletter.",
        }
      }

      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
      }
    }

    return {
      success: true,
      message: "Inscription réussie ! Merci de rejoindre notre communauté.",
      id: data[0]?.id,
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "Une erreur inattendue est survenue. Veuillez réessayer.",
    }
  }
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching subscribers:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Unexpected error:", error)
    return []
  }
}

export async function getNewsletterStats() {
  try {
    const { count, error } = await supabase
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true })
      .eq("is_active", true)

    if (error) {
      console.error("Error fetching stats:", error)
      return { total: 0 }
    }

    return { total: count || 0 }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { total: 0 }
  }
}
