
import React, { useState } from 'react';
import { Phone, Clock, Shield, Users, Plane, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import LocationCard from '@/components/LocationCard';
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
      title: "Mexico City",
      description: "Rich history, vibrant culture, and incredible cuisine in Mexico's bustling capital city."
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Cancun",
      description: "Pristine beaches, crystal clear waters, and world-class resorts on the Caribbean coast."
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Tulum",
      description: "Ancient Mayan ruins overlooking turquoise waters and bohemian beachside charm."
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Oaxaca",
      description: "Colonial architecture, indigenous culture, and renowned culinary traditions in southern Mexico."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Plane className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Flight Monkey</h1>
          </div>
          <Button 
            onClick={handleCallClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now: +52 800 801 7795
          </Button>
        </div>
      </header>

      {/* Popular Locations Section - Modular Layout */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Popular Locations
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Discover amazing destinations across Mexico. From bustling cities to pristine beaches, find your perfect getaway.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our travel experts have curated the most sought-after Mexican destinations that offer unforgettable experiences. Whether you're looking for adventure, relaxation, or cultural immersion, these locations have something special waiting for you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Hand-picked destinations by travel experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Best deals on flights and accommodations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">24/7 support for your travel needs</span>
                </div>
              </div>

              <Button 
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Plan Your Trip - Call +52 800 801 7795
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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100 min-h-[700px]">
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

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✈️ Best Destinations Around Mexico
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Travel, </span>
                  <span className="text-orange-500 relative">
                    enjoy
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-300 rounded-full"></div>
                  </span>
                  <br />
                  <span className="text-gray-900">and live a new</span>
                  <br />
                  <span className="text-gray-900">and </span>
                  <span className="text-blue-600 font-black">full life</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Skip the endless searching! Our expert travel agents find you the best deals on flights and hotels. 
                  Save time, money, and stress with our 24/7 personal service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallClick}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call +52 800 801 7795 Now
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300"
                >
                  <div className="w-5 h-5 mr-3 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                  </div>
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Average wait: 30 seconds</span>
                </div>
              </div>
            </div>

            {/* Right Content - Mexico City Image */}
            <div className="relative flex justify-center items-center">
              {/* Main Mexico City image container */}
              <div className="relative z-10">
                <div className="w-96 h-[500px] bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Beautiful Mexico City image */}
                  <img 
                    src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Beautiful Mexico City skyline and architecture"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Mexico City text overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800">Discover Mexico</h3>
                      <p className="text-base text-gray-600">Culture awaits you</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-orange-600">$127</div>
              <div className="text-sm text-gray-600">Average Savings</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-blue-600">2min</div>
              <div className="text-sm text-gray-600">Booking Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-purple-600">Free</div>
              <div className="text-sm text-gray-600">Cancellation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations Carousel */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Locations
            </h2>
            <p className="text-xl text-gray-600">Discover amazing destinations across Mexico</p>
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Dream Destination - Call +52 800 801 7795
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Split Grid Layout */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why 50,000+ Travelers Choose Flight Monkey
            </h2>
            <p className="text-xl text-gray-600">We don't just book flights - we create hassle-free travel experiences</p>
          </div>

          <div className="space-y-16">
            {/* First Column - Photo Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="24/7 Expert Support"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">24/7 Expert Support</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Real human agents available around the clock. No chatbots, no waiting - just instant, personalized help when you need it.
                </p>
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                  Always Available
                </Badge>
              </div>
            </div>

            {/* Second Column - Text Left, Photo Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Hassle-Free Changes</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Need to change or cancel? We handle everything for you. No confusing airline policies, no hidden fees - just simple solutions.
                </p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  Zero Stress Guarantee
                </Badge>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hassle-Free Changes"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Third Column - Photo Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Best Price Promise"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Best Price Promise</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our agents search hundreds of airlines to find you the absolute best deals. If you find cheaper, we'll beat it by $50.
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                  Price Match + $50
                </Badge>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-3" />
              Get Your Best Deal Now - Call +52 800 801 7795
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">4.9/5 from 3,247 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Saved me $240 on my family vacation to Orlando! The agent was so helpful and found us a perfect flight time. Will definitely use again!"
                </p>
                <div className="font-semibold text-gray-900">- Sarah M., California</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Had to change my business trip last minute. Called at 11 PM and they handled everything in 5 minutes. Incredible service!"
                </p>
                <div className="font-semibold text-gray-900">- Michael R., Texas</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I hate booking flights online. These guys made it so easy - just one call and everything was taken care of. Worth every penny!"
                </p>
                <div className="font-semibold text-gray-900">- Jennifer L., New York</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-xl text-gray-600">One call handles everything - flights, hotels, and peace of mind</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Plane className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Flight Booking</h3>
              <p className="text-sm text-gray-600">Domestic & International flights at unbeatable prices</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hotel Reservations</h3>
              <p className="text-sm text-gray-600">Hand-picked hotels that match your budget and style</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Travel Protection</h3>
              <p className="text-sm text-gray-600">Comprehensive coverage for unexpected changes</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock assistance wherever you are</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Save Time and Money on Your Next Flight?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of smart travelers who trust Flight Monkey for hassle-free bookings
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="text-6xl font-bold mb-2">+52 800 801 7795</div>
            <div className="text-xl mb-4">Mexico Toll-Free</div>
            <div className="text-sm opacity-75">Available 24/7 • Average wait time: 30 seconds</div>
          </div>

          <Button 
            onClick={handleCallClick}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call Now for Instant Savings
          </Button>
          
          <p className="text-sm opacity-75">
            No hidden fees • No booking charges • Best price guaranteed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Plane className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Flight Monkey</span>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold mb-1">+52 800 801 7795</div>
              <div className="text-sm text-gray-400">Licensed Travel Agency • IATA Certified</div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <div className="mb-2">
              <p className="font-semibold text-white">Flight Monkey llc</p>
              <p>7900 N Stadium Drive</p>
              <p>Houston, TX 77030</p>
            </div>
            
            {/* Privacy Policy and Terms Links */}
            <div className="mb-4 space-x-6">
              <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
                <DialogTrigger asChild>
                  <button className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>At Flight Monkey, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our tour booking service.</p>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Information Collection:</h3>
                      <p>We may collect personal information such as your name, contact details, payment information, and travel preferences when you make a booking or interact with our website. Additionally, we may gather data automatically, including your IP address, browser type, and browsing patterns.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Use of Information:</h3>
                      <p>We use the information we collect to process bookings, personalize your experience, communicate with you, and improve our services. Your data may also be used for marketing purposes, such as sending promotional offers or newsletters, but you can opt out at any time.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Data Sharing:</h3>
                      <p>We may share your personal information with third-party service providers, such as tour operators or payment processors, to facilitate your bookings. However, we do not sell or rent your data to third parties for their marketing purposes.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Data Security:</h3>
                      <p>We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies and Tracking Technologies:</h3>
                      <p>Our website may use cookies and other tracking technologies to enhance your browsing experience and gather information about how you interact with our site. You can adjust your browser settings to reject cookies, but this may affect some functionalities.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Children's Privacy:</h3>
                      <p>Our services are not directed at individuals under the age of 18, and we do not knowingly collect personal information from minors. If you believe we have unintentionally collected data from a child, please contact us immediately.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Updates to Privacy Policy:</h3>
                      <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for any updates.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
                <DialogTrigger asChild>
                  <button className="text-blue-400 hover:text-blue-300 underline">
                    Terms and Conditions
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms and Conditions</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>Welcome to Flight Monkey! These terms and conditions outline the rules and regulations for the use of our tour booking service.</p>
                    
                    <p>By accessing this website and using our services, you accept these terms and conditions in full. If you disagree with any part of these terms and conditions, you must not use our website or services.</p>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Booking and Payment:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>By making a booking through My Voyage Verse, you agree to abide by the terms and conditions set forth by the tour operator.</li>
                        <li>Payments must be made in full at the time of booking, unless otherwise specified.</li>
                        <li>Prices are subject to change without notice and may vary depending on availability, seasonality, and other factors.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Cancellation and Refunds:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cancellation policies vary depending on the tour operator and may incur fees.</li>
                        <li>Refunds, if applicable, will be processed according to the cancellation policy of the tour operator.</li>
                        <li>My Voyage Verse is not responsible for any charges or fees incurred due to cancellations or changes made by the customer.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Travel Documents and Requirements:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>It is the customer's responsibility to ensure they have the necessary travel documents, including passports, visas, and vaccinations, prior to departure.</li>
                        <li>My Voyage Verse is not liable for any expenses or losses incurred due to inadequate travel documentation.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4. Limitation of Liability:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>My Voyage Verse acts solely as an intermediary between customers and tour operators and is not responsible for the actions or omissions of third-party providers.</li>
                        <li>We do not guarantee the accuracy, completeness, or reliability of information provided by tour operators.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">5. Intellectual Property:</h3>
                      <p>All content and materials on the My Voyage Verse website, including text, graphics, logos, and images, are the property of My Voyage Verse and protected by copyright laws.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">6. Governing Law:</h3>
                      <p>These terms and conditions are governed by and construed in accordance with the laws, and any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <p>&copy; 2024 Flight Monkey. All rights reserved. Your trusted travel partner since 2018.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
