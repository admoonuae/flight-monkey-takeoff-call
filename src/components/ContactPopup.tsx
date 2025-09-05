import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import callCenterLady from '@/assets/call-center-lady.jpg';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Show popup after 2 seconds instead of 5

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.open('tel:+528008017795', '_self');
  };

  const handleUSACall = () => {
    window.open('tel:+18002670020', '_self');
  };

  const handleUKCall = () => {
    window.open('tel:+448085998705', '_self');
  };

  const handleClose = (open: boolean) => {
    // Prevent closing on mobile devices
    if (!open && isMobile) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl p-0 overflow-hidden">
        <div className="relative">
          {/* Close button - hidden on mobile */}
          {!isMobile && (
            <button
              onClick={() => handleClose(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Header with image */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={callCenterLady}
                  alt="Agente de servicio al cliente"
                  className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">¡Estamos aquí para ayudarte!</h3>
                <p className="text-blue-100 text-sm">We're here to assist your Flight bookings, Changes & Cancellations</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                24/7 Airlines Customer Service
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Especialistas en viajes y tours personalizados
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+528008017795" className="font-medium hover:text-blue-600 transition-colors">
                  +52 800 801 7795
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+18002670020" className="font-medium hover:text-blue-600 transition-colors">
                  1-800-267-0020 (24/7 USA Toll-free)
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+448085998705" className="font-medium hover:text-blue-600 transition-colors">
                  +44 808 599 8705 (UK Toll-free)
                </a>
              </div>
            </div>

            {/* Call Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleCall}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar México +52 800 801 7795
              </Button>
              
              <Button
                onClick={handleUSACall}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call USA 1-800-267-0020
              </Button>
              
              <Button
                onClick={handleUKCall}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call UK +44 808 599 8705
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              ¡Llámanos gratis y planifica tu próxima aventura!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;