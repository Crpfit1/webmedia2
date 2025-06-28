"use server"

import { addNewsletterSubscriber } from "@/lib/supabase"
import { z } from "zod"

const newsletterSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes"),
  prenoms: z
    .string()
    .min(2, "Les prénoms doivent contenir au moins 2 caractères")
    .max(100, "Les prénoms ne peuvent pas dépasser 100 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Les prénoms ne peuvent contenir que des lettres, espaces, tirets et apostrophes"),
  email: z.string().email("Veuillez entrer une adresse email valide").toLowerCase(),
  contact: z
    .string()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres")
    .max(20, "Le numéro de téléphone ne peut pas dépasser 20 caractères")
    .regex(
      /^[0-9\s\-+$$$$]+$/,
      "Le numéro de téléphone ne peut contenir que des chiffres, espaces, tirets, + et parenthèses",
    ),
  indicatif_pays: z.string().min(1, "Veuillez sélectionner un indicatif pays").max(10, "Indicatif pays invalide"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract and validate form data
    const rawData = {
      nom: formData.get("nom") as string,
      prenoms: formData.get("prenoms") as string,
      email: formData.get("email") as string,
      contact: formData.get("contact") as string,
      indicatif_pays: formData.get("indicatif_pays") as string,
    }

    // Validate data
    const validatedData = newsletterSchema.parse(rawData)

    // Clean contact number (remove spaces and formatting)
    const cleanContact = validatedData.contact.replace(/[\s\-$$$$]/g, "")

    // Add subscriber to Supabase
    const result = await addNewsletterSubscriber({
      ...validatedData,
      contact: cleanContact,
    })

    return result
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Une erreur inattendue est survenue. Veuillez réessayer.",
    }
  }
}
