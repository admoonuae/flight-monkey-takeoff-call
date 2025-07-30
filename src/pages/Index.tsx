import React, { useState } from 'react';
import { Phone, Clock, Shield, Users, Plane, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import LocationCard from '@/components/LocationCard';
import Logo from '@/components/Logo';
import ContactPopup from '@/components/ContactPopup';
import Autoplay from 'embla-carousel-autoplay';

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = 'tel:+528008017795';
  };

  const popularLocations = [
    {
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Ciudad de México",
      description: "Rica historia, cultura vibrante e increíble gastronomía en la bulliciosa capital de México."
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Cancún",
      description: "Playas prístinas, aguas cristalinas y resorts de clase mundial en la costa del Caribe."
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Tulum",
      description: "Antiguas ruinas mayas con vista a aguas turquesas y encanto bohemio junto a la playa."
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Oaxaca",
      description: "Arquitectura colonial, cultura indígena y reconocidas tradiciones culinarias en el sur de México."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <ContactPopup />
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Logo />
          <Button 
            onClick={handleCallClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Llama Ahora: </span>+52 800 801 7795
          </Button>
        </div>
      </header>

      {/* Popular Locations Section - Modular Layout */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Destinos Populares
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">
                  Descubre destinos increíbles en todo México. Desde ciudades bulliciosas hasta playas prístinas, encuentra tu escapada perfecta.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-8">
                  Nuestros expertos en viajes han seleccionado los destinos mexicanos más buscados que ofrecen experiencias inolvidables. Ya sea que busques aventura, relajación o inmersión cultural, estos lugares tienen algo especial esperándote.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Destinos seleccionados por expertos en viajes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Mejores ofertas en vuelos y alojamiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Soporte 24/7 para tus necesidades de viaje</span>
                </div>
              </div>

              <Button 
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Planifica tu Viaje - Llama </span>
                <span className="sm:hidden">Llama </span>+52 800 801 7795
              </Button>
            </div>

            {/* Carousel - Right Side */}
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 6000,
                  })
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {popularLocations.map((location, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2">
                      <LocationCard
                        image={location.image}
                        title={location.title}
                        description={location.description}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Hero Section with Traveler */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100 min-h-[500px] sm:min-h-[700px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating clouds */}
          <div className="absolute top-20 left-10 w-20 h-12 bg-white/60 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-10 bg-white/50 rounded-full animate-float-delayed"></div>
          <div className="absolute top-48 left-1/4 w-24 h-14 bg-white/40 rounded-full animate-float"></div>
          
          {/* Flying airplanes */}
          <div className="absolute top-16 left-1/3 opacity-30 animate-fly-across">
            <Plane className="w-8 h-8 text-blue-500 transform rotate-45" />
          </div>
          <div className="absolute top-40 right-1/3 opacity-25 animate-fly-across-reverse">
            <Plane className="w-6 h-6 text-orange-500 transform -rotate-12" />
          </div>
          <div className="absolute bottom-40 left-1/5 opacity-20 animate-float">
            <Plane className="w-10 h-10 text-purple-500 transform rotate-12" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 z-10">
              <div className="space-y-4">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  ✈️ Mejores Destinos en Todo México
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Viaja, </span>
                  <span className="text-orange-500 relative">
                    disfruta
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></div>
                  </span>
                  <br />
                  <span className="text-gray-900">y vive una nueva</span>
                  <br />
                  <span className="text-gray-900">y </span>
                  <span className="text-blue-600 font-black">plena vida</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                  ¡Olvídate de buscar sin parar! Nuestros agentes expertos en viajes te encuentran las mejores ofertas en vuelos y hoteles. 
                  Ahorra tiempo, dinero y estrés con nuestro servicio personal 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallClick}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Llama +52 800 801 7795 Ahora</span>
                  <span className="sm:hidden">Llama Ahora</span>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Soporte 24/7 Disponible</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Espera promedio: 30 segundos</span>
                </div>
              </div>
            </div>

            {/* Right Content - Mexico City Image */}
            <div className="relative flex justify-center items-center order-first lg:order-last">
              {/* Main Mexico City image container */}
              <div className="relative z-10">
                <div className="w-80 sm:w-96 h-[400px] sm:h-[500px] bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Beautiful Mexico City image */}
                  <img 
                    src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Hermoso horizonte y arquitectura de la Ciudad de México"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Mexico City text overlay */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Descubre México</h3>
                      <p className="text-sm sm:text-base text-gray-600">La cultura te espera</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around Mexico City image */}
              <div className="absolute top-10 -left-10 animate-bounce">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Plane className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute top-20 -right-8 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-8 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Decorative path lines */}
              <div className="absolute top-32 left-20 w-32 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded opacity-50"></div>
              <div className="absolute bottom-32 right-16 w-24 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded opacity-50"></div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">$127</div>
              <div className="text-xs sm:text-sm text-gray-600">Ahorro Promedio</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Soporte Disponible</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">2min</div>
              <div className="text-xs sm:text-sm text-gray-600">Tiempo de Reserva</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">Gratis</div>
              <div className="text-xs sm:text-sm text-gray-600">Cancelación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations Carousel */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Destinos Populares
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Descubre destinos increíbles en todo México</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 6000,
                })
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {popularLocations.map((location, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <LocationCard
                      image={location.image}
                      title={location.title}
                      description={location.description}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={handleCallClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Reserva tu Destino Soñado - Llama </span>
              <span className="sm:hidden">Reserva Ahora - </span>+52 800 801 7795
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Split Grid Layout */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por Qué Más de 50,000 Viajeros Eligen Reserva Mi Reservas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">No solo reservamos vuelos - creamos experiencias de viaje sin complicaciones</p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* First Column - Photo Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-1">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Soporte Experto 24/7"
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Soporte Experto 24/7</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Agentes humanos reales disponibles las 24 horas. Sin chatbots, sin esperas - solo ayuda instantánea y personalizada cuando la necesites.
                </p>
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                  Siempre Disponible
                </Badge>
              </div>
            </div>

            {/* Second Column - Text Left, Photo Right */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Cambios Sin Complicaciones</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  ¿Necesitas cambiar o cancelar? Nosotros nos encargamos de todo. Sin políticas confusas de aerolíneas, sin tarifas ocultas - solo soluciones simples.
                </p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  Garantía Cero Estrés
                </Badge>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cambios Sin Complicaciones"
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Third Column - Photo Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-1">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Promesa del Mejor Precio"
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Promesa del Mejor Precio</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Nuestros agentes buscan en cientos de aerolíneas para encontrarte las mejores ofertas absolutas. Si encuentras más barato, lo superamos por $50.
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                  Igualar Precio + $50
                </Badge>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Obtén tu Mejor Oferta Ahora - Llama </span>
              <span className="sm:hidden">Obtén Mejor Oferta - </span>+52 800 801 7795
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold text-sm sm:text-base">4.9/5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  "¡Me ahorraron $240 en mis vacaciones familiares a Orlando! El agente fue muy servicial y nos encontró un horario de vuelo perfecto. ¡Definitivamente los usaré de nuevo!"
                </p>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">- Sarah M., California</div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  "Tuve que cambiar mi viaje de negocios a último minuto. Llamé a las 11 PM y se encargaron de todo en 5 minutos. ¡Servicio increíble!"
                </p>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">- Michael R., Texas</div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  "Odio reservar vuelos en línea. Estos chicos lo hicieron muy fácil - solo una llamada y todo estaba resuelto. ¡Vale cada centavo!"
                </p>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">- Jennifer L., Nueva York</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Soluciones de Viaje Completas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Una llamada lo maneja todo - vuelos, hoteles y tranquilidad</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
              <Plane className="w-10 sm:w-12 h-10 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Reserva de Vuelos</h3>
              <p className="text-xs sm:text-sm text-gray-600">Vuelos nacionales e internacionales a precios inmejorables</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-lg">
              <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Reservas de Hotel</h3>
              <p className="text-xs sm:text-sm text-gray-600">Hoteles seleccionados que se ajustan a tu presupuesto y estilo</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-lg">
              <Shield className="w-10 sm:w-12 h-10 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Protección de Viaje</h3>
              <p className="text-xs sm:text-sm text-gray-600">Cobertura integral para cambios inesperados</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-lg">
              <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Soporte 24/7</h3>
              <p className="text-xs sm:text-sm text-gray-600">Asistencia las 24 horas estés donde estés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para Ahorrar Tiempo y Dinero en tu Próximo Vuelo?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Únete a miles de viajeros inteligentes que confían en Reserva Mi Reservas para reservas sin complicaciones
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="text-4xl sm:text-6xl font-bold mb-2">+52 800 801 7795</div>
            <div className="text-lg sm:text-xl mb-4">Línea Gratuita México</div>
            <div className="text-xs sm:text-sm opacity-75">Disponible 24/7 • Tiempo de espera promedio: 30 segundos</div>
          </div>

          <Button 
            onClick={handleCallClick}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 w-full sm:w-auto"
          >
            <Phone className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
            <span className="hidden sm:inline">Llama Ahora para Ahorros Instantáneos</span>
            <span className="sm:hidden">Llama para Ahorros Instantáneos</span>
          </Button>
          
          <p className="text-xs sm:text-sm opacity-75">
            Sin tarifas ocultas • Sin cargos de reserva • Mejor precio garantizado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo className="mb-4 md:mb-0" />
            
            <div className="text-center md:text-right">
              <div className="text-xl sm:text-2xl font-bold mb-1">+52 800 801 7795</div>
              <div className="text-xs sm:text-sm text-gray-400">Agencia de Viajes Licenciada • Certificada IATA</div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-400">
            <div className="mb-2">
              <p className="font-semibold text-white">Reserva Mi Reservas LLC</p>
              <p>7900 N Stadium Drive</p>
              <p>Houston, TX 77030</p>
            </div>
            
            <div className="mb-4 space-x-4 sm:space-x-6">
              <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                <DialogTrigger asChild>
                  <button className="text-blue-400 hover:text-blue-300 underline">
                    Política de Privacidad
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Política de Privacidad</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>En Flight Monkey, estamos comprometidos a proteger la privacidad y seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos sus datos cuando utiliza nuestro servicio de reservas de tours.</p>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recopilación de Información:</h3>
                      <p>Podemos recopilar información personal como su nombre, detalles de contacto, información de pago y preferencias de viaje cuando realiza una reserva o interactúa con nuestro sitio web. Además, podemos reunir datos automáticamente, incluyendo su dirección IP, tipo de navegador y patrones de navegación.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Uso de la Información:</h3>
                      <p>Utilizamos la información que recopilamos para procesar reservas, personalizar su experiencia, comunicarnos con usted y mejorar nuestros servicios. Sus datos también pueden usarse para fines de marketing, como enviar ofertas promocionales o boletines informativos, pero puede optar por no recibirlos en cualquier momento.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Compartir Datos:</h3>
                      <p>Podemos compartir su información personal con proveedores de servicios de terceros, como operadores de tours o procesadores de pagos, para facilitar sus reservas. Sin embargo, no vendemos ni alquilamos sus datos a terceros para sus propósitos de marketing.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Seguridad de Datos:</h3>
                      <p>Empleamos medidas de seguridad estándar de la industria para proteger su información personal del acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar seguridad absoluta.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies y Tecnologías de Seguimiento:</h3>
                      <p>Nuestro sitio web puede usar cookies y otras tecnologías de seguimiento para mejorar su experiencia de navegación y recopilar información sobre cómo interactúa con nuestro sitio. Puede ajustar la configuración de su navegador para rechazar cookies, pero esto puede afectar algunas funcionalidades.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Privacidad de Menores:</h3>
                      <p>Nuestros servicios no están dirigidos a personas menores de 18 años, y no recopilamos conscientemente información personal de menores. Si cree que hemos recopilado inadvertidamente datos de un menor, póngase en contacto con nosotros inmediatamente.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Actualizaciones a la Política de Privacidad:</h3>
                      <p>Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o requisitos legales. Le recomendamos que revise esta página regularmente para cualquier actualización.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
                <DialogTrigger asChild>
                  <button className="text-blue-400 hover:text-blue-300 underline">
                    Términos y Condiciones
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Términos y Condiciones</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>¡Bienvenido a Flight Monkey! Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro servicio de reservas de tours.</p>
                    
                    <p>Al acceder a este sitio web y usar nuestros servicios, acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos y condiciones, no debe usar nuestro sitio web o servicios.</p>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Reserva y Pago:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Al realizar una reserva a través de Flight Monkey, acepta cumplir con los términos y condiciones establecidos por el operador del tour.</li>
                        <li>Los pagos deben realizarse en su totalidad al momento de la reserva, a menos que se especifique lo contrario.</li>
                        <li>Los precios están sujetos a cambios sin previo aviso y pueden variar dependiendo de la disponibilidad, estacionalidad y otros factores.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Cancelación y Reembolsos:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Las políticas de cancelación varían según el operador del tour y pueden incurrir en tarifas.</li>
                        <li>Los reembolsos, si aplican, se procesarán de acuerdo con la política de cancelación del operador del tour.</li>
                        <li>Flight Monkey no es responsable de ningún cargo o tarifa incurrida debido a cancelaciones o cambios realizados por el cliente.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Documentos de Viaje y Requisitos:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Es responsabilidad del cliente asegurarse de que tiene los documentos de viaje necesarios, incluyendo pasaportes, visas y vacunas, antes de la salida.</li>
                        <li>Flight Monkey no es responsable de ningún gasto o pérdida incurrida debido a documentación de viaje inadecuada.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4. Limitación de Responsabilidad:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Flight Monkey actúa únicamente como intermediario entre clientes y operadores de tours y no es responsable de las acciones u omisiones de proveedores de terceros.</li>
                        <li>No garantizamos la exactitud, integridad o confiabilidad de la información proporcionada por los operadores de tours.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">5. Propiedad Intelectual:</h3>
                      <p>Todo el contenido y materiales en el sitio web de Flight Monkey, incluyendo texto, gráficos, logotipos e imágenes, son propiedad de Flight Monkey y están protegidos por las leyes de derechos de autor.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">6. Ley Aplicable:</h3>
                      <p>Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes, y cualquier disputa que surja del uso de nuestros servicios estará sujeta a la jurisdicción exclusiva de los tribunales.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <p>&copy; 2024 Reserva Mi Reservas. Todos los derechos reservados. Tu socio de viajes de confianza desde 2018.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
