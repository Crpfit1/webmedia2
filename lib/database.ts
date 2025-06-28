import { Database } from "sqlite3"

let db: Database | null = null

export interface NewsletterSubscriber {
  id?: number
  nom: string
  prenoms: string
  email: string
  contact: string
  indicatif_pays: string
  created_at?: string
  updated_at?: string
  is_active?: boolean
}

export function getDatabase(): Database {
  if (!db) {
    db = new Database(":memory:") // In production, use a file path

    // Initialize the database with our schema
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom VARCHAR(100) NOT NULL,
        prenoms VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        contact VARCHAR(20) NOT NULL,
        indicatif_pays VARCHAR(10) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT TRUE
      );
      
      CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
      CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscribers(created_at);
    `

    db.exec(createTableSQL)
  }

  return db
}

export async function addNewsletterSubscriber(
  subscriber: Omit<NewsletterSubscriber, "id" | "created_at" | "updated_at" | "is_active">,
): Promise<{ success: boolean; message: string; id?: number }> {
  return new Promise((resolve) => {
    const db = getDatabase()

    const stmt = db.prepare(`
      INSERT INTO newsletter_subscribers (nom, prenoms, email, contact, indicatif_pays)
      VALUES (?, ?, ?, ?, ?)
    `)

    stmt.run(
      [subscriber.nom, subscriber.prenoms, subscriber.email, subscriber.contact, subscriber.indicatif_pays],
      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE constraint failed")) {
            resolve({ success: false, message: "Cette adresse email est déjà inscrite à notre newsletter." })
          } else {
            resolve({ success: false, message: "Une erreur est survenue lors de l'inscription." })
          }
        } else {
          resolve({
            success: true,
            message: "Inscription réussie ! Merci de rejoindre notre communauté.",
            id: this.lastID,
          })
        }
      },
    )

    stmt.finalize()
  })
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  return new Promise((resolve, reject) => {
    const db = getDatabase()

    db.all("SELECT * FROM newsletter_subscribers WHERE is_active = TRUE ORDER BY created_at DESC", (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows as NewsletterSubscriber[])
      }
    })
  })
}
