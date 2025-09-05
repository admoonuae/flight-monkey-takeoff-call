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
      <DialogContent className="sm:max-w-md bg-gray-50 border-0 shadow-2xl p-0 overflow-hidden">
        <div className="relative bg-white">
          {/* Close button - hidden on mobile */}
          {!isMobile && (
            <button
              onClick={() => handleClose(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Header */}
          <div className="bg-white p-6 border-b border-gray-100">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fly More, Spend Less</h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Special Flight Offer!</h3>
              
              <div className="space-y-3 text-sm text-gray-600 mb-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Expert guidance by our Travel Expert</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>24 hours cancellation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Booking Changes & Cancellation</span>
                </div>
              </div>

              <p className="text-gray-700 font-medium mb-4">We're here to assist your Flight booking</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 bg-gray-50">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                24/7 Airlines Customer Service
              </h4>
            </div>

            {/* Call Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleUSACall}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <span className="text-lg">🇺🇸</span>
                <span>+1-800-267-0020</span>
              </Button>
              
              <Button
                onClick={handleUKCall}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <span className="text-lg">🇬🇧</span>
                <span>+44 808 599 8705</span>
              </Button>
              
              <Button
                onClick={handleCall}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <span className="text-lg">🇲🇽</span>
                <span>+52 800 801 7795</span>
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-2">- Local Phone Number -</p>
              <Button
                onClick={handleUSACall}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <span className="text-lg">🇺🇸</span>
                <span>+1 866 985 5678</span>
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Call us for free and plan your next adventure!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;