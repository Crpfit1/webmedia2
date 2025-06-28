import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "L'avenir des CBDCs en Afrique : Opportunités et Défis",
    excerpt:
      "Analyse approfondie des monnaies numériques de banques centrales et leur impact potentiel sur l'économie africaine.",
    author: "Aminata Diallo",
    date: "15 Mars 2024",
    readTime: "8 min",
    category: "Analyse",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Comment la Blockchain Révolutionne l'Agriculture en Côte d'Ivoire",
      excerpt:
        "Découvrez comment les agriculteurs ivoiriens utilisent la blockchain pour tracer leurs produits et accéder à de nouveaux marchés.",
      author: "Omar Benali",
      date: "12 Mars 2024",
      readTime: "6 min",
      category: "Innovation",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "DeFi en Afrique : Les Protocoles à Surveiller en 2024",
      excerpt: "Tour d'horizon des protocoles DeFi les plus prometteurs pour le continent africain cette année.",
      author: "Fatou Koné",
      date: "10 Mars 2024",
      readTime: "5 min",
      category: "DeFi",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "NFTs et Art Numérique : La Renaissance Créative Africaine",
      excerpt:
        "Comment les artistes africains utilisent les NFTs pour valoriser leur art et toucher un public mondial.",
      author: "Aminata Diallo",
      date: "8 Mars 2024",
      readTime: "7 min",
      category: "NFT",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Réglementation Crypto au Sénégal : Ce qui Change en 2024",
      excerpt: "Analyse des nouvelles réglementations crypto au Sénégal et leur impact sur l'écosystème local.",
      author: "Omar Benali",
      date: "5 Mars 2024",
      readTime: "4 min",
      category: "Réglementation",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Web3 et Éducation : Transformer l'Apprentissage en Afrique",
      excerpt:
        "Comment les technologies Web3 peuvent révolutionner l'éducation et la formation professionnelle en Afrique.",
      author: "Fatou Koné",
      date: "3 Mars 2024",
      readTime: "6 min",
      category: "Web3",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = ["Tous", "Analyse", "Innovation", "DeFi", "NFT", "Réglementation", "Web3"]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="TechBlockchainAfr Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-lg">TechBlockchainAfr</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium text-orange-500">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">
                Écouter Maintenant
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Blog Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">📝 Blog LTBAF</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights <span className="text-orange-500">Blockchain</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les dernières analyses, tendances et innovations blockchain qui façonnent l'avenir de l'Afrique
              francophone.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Rechercher des articles..." className="pl-10 h-12" />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8">Rechercher</Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tous" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "Tous"
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "hover:bg-orange-50 hover:text-orange-500"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Article à la Une</h2>
            <p className="text-gray-600">Notre sélection de la semaine</p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">À la Une</Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-purple-100 text-purple-700 w-fit mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
                  Lire l'Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Articles Récents</h2>
            <p className="text-gray-600">Restez informé des dernières actualités blockchain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        post.category === "Innovation"
                          ? "bg-green-500"
                          : post.category === "DeFi"
                            ? "bg-purple-500"
                            : post.category === "NFT"
                              ? "bg-pink-500"
                              : post.category === "Réglementation"
                                ? "bg-red-500"
                                : post.category === "Web3"
                                  ? "bg-blue-500"
                                  : "bg-gray-500"
                      } text-white`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full"
                  >
                    Lire Plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Charger Plus d'Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ne Manquez Aucun Article</h2>
            <p className="text-orange-100 mb-8">
              Recevez nos derniers articles et analyses directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 flex-1"
              />
              <Button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold">S'abonner</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="TechBlockchainAfr Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-bold text-lg">TechBlockchainAfr</span>
              </div>
              <p className="text-gray-400 mb-6">
                La référence podcast blockchain en Afrique francophone. Éducation, innovation et communauté au cœur de
                notre mission.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/tech_blockaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/19JWe3NEpJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/techblockchainafr?igsh=MTEzZjliMGc4eHdxOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@techblockchainafr1?_t=ZS-8xRbxM0xAHa&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contenu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/@techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Tous les Podcasts
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtu.be/zHDL3QFrfUo?si=qOHORr0tqkBpNj6J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Épisodes Récents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Interviews Exclusives
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendar.app.google/MksninUEWKQTgaht7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Analyses de Marché
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://icmjjcmu.mychariow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Guides Débutants
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Communauté</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="/evenements" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Partenariats
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">technologieblockchainafriquefr@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">+225 0758473042</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                  <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechBlockchainAfr. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
