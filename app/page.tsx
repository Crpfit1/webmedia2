"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileMenu } from "@/components/mobile-menu"
import { NewsletterForm } from "@/components/newsletter-form"
import {
  Play,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Mic,
  Headphones,
  TrendingUp,
  Globe,
  BookOpen,
  MessageCircle,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
            <Link href="#accueil" className="text-sm font-medium text-orange-500">
              Accueil
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
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

      {/* Hero Section */}
      <section id="accueil" className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">
                  🎙️ Podcast #1 Blockchain Afrique Francophone
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  La Technologie{" "}
                  <span className="text-orange-500 relative">
                    Blockchain
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-orange-200"
                      viewBox="0 0 200 12"
                      fill="currentColor"
                    >
                      <path d="M0,8 Q50,0 100,8 T200,8 L200,12 L0,12 Z" />
                    </svg>
                  </span>{" "}
                  en Afrique Francophone
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Découvrez l'univers passionnant de la blockchain, des cryptomonnaies et du Web3 à travers notre
                  podcast éducatif. Interviews d'experts, analyses de marché et guides pratiques pour démocratiser
                  l'accès aux technologies blockchain en Afrique francophone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Play className="w-5 h-5 mr-2" />
                    Écouter Maintenant
                  </Button>
                </Link>
                <Link href="/evenements">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Nos Événements
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Épisodes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Auditeurs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Événements</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-section.png"
                  alt="TechBlockchainAfr Hero"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">🚀 Nos Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ce Que Nous <span className="text-orange-500">Offrons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour vous accompagner dans votre découverte et maîtrise des technologies
              blockchain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mic className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Podcast Éducatif</CardTitle>
                <CardDescription>
                  Épisodes hebdomadaires avec des experts, analyses de marché et guides pratiques pour tous les niveaux.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Événements & Meetups</CardTitle>
                <CardDescription>
                  Conférences, workshops et meetups à travers l'Afrique francophone pour rassembler la communauté.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6 text-purple-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Formation & Éducation</CardTitle>
                <CardDescription>
                  Ressources éducatives, guides débutants et formations pour démocratiser l'accès à la blockchain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Analyses de Marché</CardTitle>
                <CardDescription>
                  Analyses approfondies des tendances crypto et blockchain avec un focus sur le marché africain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Communauté Active</CardTitle>
                <CardDescription>
                  Rejoignez notre communauté dynamique sur WhatsApp, LinkedIn et nos réseaux sociaux.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6 text-yellow-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Réseau Francophone</CardTitle>
                <CardDescription>
                  Un pont entre les écosystèmes blockchain d'Afrique francophone et le reste du monde.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section - Updated with only upcoming events */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">📅 Événements à Venir</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Nos Prochains <span className="text-orange-500">Événements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez-nous lors de nos prochains événements blockchain à travers l'Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Africa Trading Cup */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Image
                    src="/images/africa-trading-cup-logo.jpeg"
                    alt="Africa Trading Cup 2025"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Compétition</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  04 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Côte d'Ivoire
                </div>
                <h3 className="text-xl font-bold mb-3">Africa Trading Cup 2025</h3>
                <p className="text-gray-600 mb-4">
                  Première compétition de trading crypto en Afrique. Éducation financière et sensibilisation aux
                  opportunités du trading.
                </p>
                <Link
                  href="https://www.eventbrite.com/e/africa-trading-cup-2025-tickets-1417808275719"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    S'inscrire sur Eventbrite
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Stellar Meetup Abidjan */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/stellar-meetup-abidjan.jpeg"
                  alt="Stellar Meetup Abidjan N°2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-white">Meetup</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  19 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Riviera
                </div>
                <h3 className="text-xl font-bold mb-3">Stellar Meetup Abidjan N°2</h3>
                <p className="text-gray-600 mb-4">
                  Construire, connecter et innover sur Stellar. Workshop pratique sur l'écosystème Stellar et les smart
                  contracts Soroban.
                </p>
                <Link href="https://lu.ma/7h45yfc9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    S'inscrire sur Luma
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 10 Years of Ethereum */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/ethereum-10-years-cote-divoire.png"
                  alt="10 Ans d'Anniversaire de Ethereum"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">Anniversaire</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  30 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Riviera
                </div>
                <h3 className="text-xl font-bold mb-3">10 Ans d'Anniversaire de Ethereum</h3>
                <p className="text-gray-600 mb-4">
                  Célébrons ensemble les 10 ans d'Ethereum en Côte d'Ivoire. Présentations, networking et
                  rafraîchissements offerts.
                </p>
                <Link
                  href="https://app.unlock-protocol.com/event/meetup-les-10-ans-d-anniversaire-d-ethereum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Réserver sa place
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/evenements">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                Voir Tous les Événements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">🤝 Nos Partenaires</Badge>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ils Nous Font <span className="text-orange-500">Confiance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les organisations qui soutiennent notre mission de démocratisation de la blockchain en Afrique
              francophone.
            </p>
          </div>

          {/* Auto-sliding Partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left">
              {/* First set of partners */}
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/africa-web3-academy.png"
                  alt="Africa Web3 Academy"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/bit-trading-edu.png"
                  alt="Bit Trading Edu"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/jelisvoscv-com.jpeg"
                  alt="Jelisvoscv.com"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/africa-web3-academy.png"
                  alt="Africa Web3 Academy"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/bit-trading-edu.png"
                  alt="Bit Trading Edu"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/images/jelisvoscv-com.jpeg"
                  alt="Jelisvoscv.com"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <NewsletterForm variant="inline" />
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">🎧 Derniers Épisodes</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Épisodes <span className="text-orange-500">Récents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos derniers épisodes avec des experts de la blockchain et des analyses approfondies du marché
              crypto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Headphones className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      Épisode #47
                    </Badge>
                    <p className="text-sm text-gray-500">Il y a 2 jours</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">L'avenir de la DeFi en Afrique</h3>
                <p className="text-gray-600 mb-4">
                  Discussion avec des experts sur les opportunités et défis de la finance décentralisée sur le continent
                  africain.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Écouter
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Headphones className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      Épisode #46
                    </Badge>
                    <p className="text-sm text-gray-500">Il y a 1 semaine</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Bitcoin et l'adoption en Afrique</h3>
                <p className="text-gray-600 mb-4">
                  Analyse de l'adoption croissante de Bitcoin en Afrique et son impact sur l'économie locale.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Écouter
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Headphones className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      Épisode #45
                    </Badge>
                    <p className="text-sm text-gray-500">Il y a 2 semaines</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">NFTs et Art Numérique Africain</h3>
                <p className="text-gray-600 mb-4">
                  Rencontre avec des artistes africains qui révolutionnent l'art numérique grâce aux NFTs.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Écouter
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Youtube className="w-5 h-5 mr-2" />
                Voir Tous les Épisodes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">👥 Notre Équipe</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              L'Équipe <span className="text-orange-500">TechBlockchainAfr</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les passionnés qui rendent possible la démocratisation de la blockchain en Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/images/frame-ayemou.png" alt="Ayémou Loïc" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Ayémou Loïc</h3>
                <p className="text-orange-500 font-medium mb-3">Fondateur & Host Principal</p>
                <p className="text-gray-600 text-sm">
                  Expert blockchain et entrepreneur passionné par l'éducation financière en Afrique.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/images/frame-patrick.png" alt="Patrick Yeboue" />
                  <AvatarFallback>PY</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Patrick Yeboue</h3>
                <p className="text-orange-500 font-medium mb-3">Co-Host & Analyste</p>
                <p className="text-gray-600 text-sm">
                  Spécialiste en analyse technique et développement blockchain avec une expertise en DeFi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/images/frame-michel.png" alt="Michel Kouakou" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Michel Kouakou</h3>
                <p className="text-orange-500 font-medium mb-3">Producteur & Éditeur</p>
                <p className="text-gray-600 text-sm">
                  Responsable de la production et de l'édition des contenus, expert en communication digitale.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/equipe">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                Découvrir l'Équipe Complète
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-16">
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

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-left {
          animation: slide-left 20s linear infinite;
        }
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
