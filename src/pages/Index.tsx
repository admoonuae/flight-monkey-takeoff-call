import React from 'react';
import { Phone, Clock, Shield, Users, Plane, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+1-800-FLIGHT';
  };

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
            Call Now: 1-800-FLIGHT
          </Button>
        </div>
      </header>

      {/* Enhanced Hero Section with Travel Background */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>

        {/* Floating Airplane Graphics */}
        <div className="absolute top-20 left-10 opacity-20">
          <Plane className="w-16 h-16 text-white transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 opacity-15">
          <Plane className="w-12 h-12 text-white transform -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10">
          <Plane className="w-20 h-20 text-white transform rotate-12" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-white/30">
                ✈️ Trusted by 50,000+ Happy Travelers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Book Your Perfect Flight in
              <span className="text-yellow-300 block">Under 5 Minutes!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Skip the endless searching! Our expert travel agents find you the best deals on flights and hotels. 
              Save time, money, and stress with our 24/7 personal service.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={handleCallClick}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse border-2 border-orange-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call 1-800-FLIGHT Now
              </Button>
              <div className="text-center">
                <p className="text-sm opacity-75">📞 Average wait time: Under 30 seconds</p>
                <p className="text-xs opacity-60">Available 24/7 • No hidden fees</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-yellow-300">$127</div>
                <div className="text-sm opacity-90">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-green-300">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-blue-300">2min</div>
                <div className="text-sm opacity-90">Booking Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-orange-300">Free</div>
                <div className="text-sm opacity-90">Cancellation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Traveler Silhouette */}
        <div className="absolute bottom-0 right-10 opacity-30 hidden lg:block">
          <div className="w-32 h-40 bg-white/20 rounded-t-full relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
            <div className="absolute top-8 right-2 w-8 h-12 bg-white/25 rounded transform rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why 50,000+ Travelers Choose Flight Monkey
            </h2>
            <p className="text-xl text-gray-600">We don't just book flights - we create hassle-free travel experiences</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Expert Support</h3>
                <p className="text-gray-600 mb-4">
                  Real human agents available around the clock. No chatbots, no waiting - just instant, personalized help when you need it.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Always Available
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hassle-Free Changes</h3>
                <p className="text-gray-600 mb-4">
                  Need to change or cancel? We handle everything for you. No confusing airline policies, no hidden fees - just simple solutions.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Zero Stress Guarantee
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Best Price Promise</h3>
                <p className="text-gray-600 mb-4">
                  Our agents search hundreds of airlines to find you the absolute best deals. If you find cheaper, we'll beat it by $50.
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Price Match + $50
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-3" />
              Get Your Best Deal Now - Call 1-800-FLIGHT
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
            <div className="text-6xl font-bold mb-2">1-800-FLIGHT</div>
            <div className="text-xl mb-4">(1-800-354-4478)</div>
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
              <div className="text-2xl font-bold mb-1">1-800-FLIGHT</div>
              <div className="text-sm text-gray-400">Licensed Travel Agency • IATA Certified</div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 Flight Monkey. All rights reserved. Your trusted travel partner since 2018.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
