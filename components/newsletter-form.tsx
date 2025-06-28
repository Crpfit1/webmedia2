"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { Mail, Phone, User, Users, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const countryIndicatives = [
  { code: "+225", country: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+221", country: "Sénégal", flag: "🇸🇳" },
  { code: "+212", country: "Maroc", flag: "🇲🇦" },
  { code: "+216", country: "Tunisie", flag: "🇹🇳" },
  { code: "+213", country: "Algérie", flag: "🇩🇿" },
  { code: "+237", country: "Cameroun", flag: "🇨🇲" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
  { code: "+223", country: "Mali", flag: "🇲🇱" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+229", country: "Bénin", flag: "🇧🇯" },
  { code: "+230", country: "Maurice", flag: "🇲🇺" },
  { code: "+262", country: "Réunion", flag: "🇷🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+32", country: "Belgique", flag: "🇧🇪" },
  { code: "+41", country: "Suisse", flag: "🇨🇭" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
]

interface NewsletterFormProps {
  variant?: "default" | "compact" | "inline"
  className?: string
}

export function NewsletterForm({ variant = "default", className = "" }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [selectedIndicatif, setSelectedIndicatif] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await subscribeToNewsletter(formData)
      setResult(response)

      if (response.success) {
        // Reset form on success
        const form = document.getElementById("newsletter-form") as HTMLFormElement
        form?.reset()
        setSelectedIndicatif("")

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setResult(null)
        }, 5000)
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "inline") {
    return (
      <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 ${className}`}>
        <div className="text-center mb-6">
          <Badge className="bg-white/20 text-white hover:bg-white/20 mb-4">📧 Newsletter Exclusive</Badge>
          <h3 className="text-2xl font-bold text-white mb-2">Restez Informé des Dernières Actualités Blockchain</h3>
          <p className="text-orange-100">
            Recevez nos analyses exclusives, invitations aux événements et contenus premium directement dans votre boîte
            mail.
          </p>
        </div>

        <form id="newsletter-form" action={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                name="nom"
                placeholder="Nom"
                required
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 disabled:opacity-50"
              />
            </div>
            <div>
              <Input
                name="prenoms"
                placeholder="Prénoms"
                required
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Votre adresse email"
              required
              disabled={isSubmitting}
              className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 disabled:opacity-50"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Select
                name="indicatif_pays"
                value={selectedIndicatif}
                onValueChange={setSelectedIndicatif}
                required
                disabled={isSubmitting}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white disabled:opacity-50">
                  <SelectValue placeholder="Indicatif pays" />
                </SelectTrigger>
                <SelectContent>
                  {countryIndicatives.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                        <span className="text-sm text-gray-500">{country.country}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                name="contact"
                type="tel"
                placeholder="Numéro de téléphone"
                required
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 disabled:opacity-50"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-orange-500 hover:bg-orange-50 font-semibold disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              <>
                S'inscrire à la Newsletter
                <Mail className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        {result && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              result.success ? "bg-green-500/20 text-white" : "bg-red-500/20 text-white"
            }`}
          >
            <div className="flex items-center gap-2">
              {result.success ? (
                <CheckCircle className="w-5 h-5 text-green-300" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-300" />
              )}
              <span className="text-sm">{result.message}</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <Card className={`${className}`}>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-orange-500" />
            Newsletter TechBlockchainAfr
          </CardTitle>
          <CardDescription>Restez connecté avec l'écosystème blockchain africain</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="newsletter-form" action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="nom">Nom</Label>
                <Input name="nom" id="nom" required disabled={isSubmitting} />
              </div>
              <div>
                <Label htmlFor="prenoms">Prénoms</Label>
                <Input name="prenoms" id="prenoms" required disabled={isSubmitting} />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" required disabled={isSubmitting} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="indicatif_pays">Pays</Label>
                <Select
                  name="indicatif_pays"
                  value={selectedIndicatif}
                  onValueChange={setSelectedIndicatif}
                  required
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Indicatif" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryIndicatives.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="contact">Téléphone</Label>
                <Input name="contact" id="contact" type="tel" required disabled={isSubmitting} />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Inscription...
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
          </form>

          {result && (
            <div
              className={`mt-4 p-3 rounded-lg text-sm ${
                result.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              <div className="flex items-center gap-2">
                {result.success ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                {result.message}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`max-w-2xl mx-auto ${className}`}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-orange-500" />
          </div>
        </div>
        <CardTitle className="text-2xl">Rejoignez Notre Newsletter</CardTitle>
        <CardDescription className="text-lg">
          Recevez les dernières actualités blockchain, invitations aux événements exclusifs et analyses de marché
          directement dans votre boîte mail.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="newsletter-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nom" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom
              </Label>
              <Input name="nom" id="nom" placeholder="Votre nom" required disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="prenoms" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Prénoms
              </Label>
              <Input name="prenoms" id="prenoms" placeholder="Vos prénoms" required disabled={isSubmitting} />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Adresse Email
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="votre.email@exemple.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="indicatif_pays" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Indicatif Pays
              </Label>
              <Select
                name="indicatif_pays"
                value={selectedIndicatif}
                onValueChange={setSelectedIndicatif}
                required
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre pays" />
                </SelectTrigger>
                <SelectContent>
                  {countryIndicatives.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                        <span className="text-sm text-gray-500">{country.country}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="contact">Numéro de Téléphone</Label>
              <Input
                name="contact"
                id="contact"
                type="tel"
                placeholder="Votre numéro"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              <>
                S'inscrire à la Newsletter
                <Mail className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>

        {result && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              result.success
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {result.success ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{result.message}</span>
            </div>
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>En vous inscrivant, vous acceptez de recevoir nos communications par email.</p>
          <p>Vous pouvez vous désabonner à tout moment.</p>
        </div>
      </CardContent>
    </Card>
  )
}
