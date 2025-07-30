import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import callCenterLady from '@/assets/call-center-lady.jpg';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.open('tel:+1234567890', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl p-0 overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

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
                <p className="text-blue-100 text-sm">Contacta con nuestro equipo de viajes</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Reserva Mi Reservas
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Especialistas en viajes y tours personalizados
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="font-medium">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-4 h-4 text-blue-600">📧</span>
                <span>info@reservamireservas.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-4 h-4 text-blue-600">🕒</span>
                <span>Lunes - Domingo: 8:00 AM - 10:00 PM</span>
              </div>
            </div>

            {/* Call Button */}
            <Button
              onClick={handleCall}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora +1 (234) 567-8900
            </Button>

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