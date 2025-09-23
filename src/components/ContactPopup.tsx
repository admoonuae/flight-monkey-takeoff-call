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

          {/* Header with Logo */}
          <div className="bg-white p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Flight Express</h2>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">FLIGHT HELP DESK</h3>
            
            {/* Customer Service Representative */}
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-blue-500 p-1">
                <img 
                  src={callCenterLady} 
                  alt="Customer Service Representative" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-lg font-semibold text-gray-800 mb-4">No Hold - Calls Answered in 5 Sec</p>
            
            {/* Primary Phone Button */}
            <Button
              onClick={handleUSACall}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full text-lg mb-4"
            >
              +1-800-267-0020
            </Button>
            
            <p className="text-gray-600 font-medium mb-6">24/7 Reservation Support</p>
          </div>

          {/* Service Buttons */}
          <div className="px-6 pb-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="bg-gray-800 text-white py-3 px-4 rounded-full text-sm font-medium">
                Tickets Booking
              </button>
              <button className="bg-gray-800 text-white py-3 px-4 rounded-full text-sm font-medium">
                Changes
              </button>
              <button className="bg-gray-800 text-white py-3 px-4 rounded-full text-sm font-medium">
                Cancellation
              </button>
              <button className="bg-gray-800 text-white py-3 px-4 rounded-full text-sm font-medium">
                Customer Service
              </button>
            </div>
            
            {/* Secondary Phone Button */}
            <Button
              onClick={handleUKCall}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full text-lg mb-4"
            >
              +44 808 599 8705
            </Button>
          </div>

          {/* Bottom Section */}
          <div className="bg-gray-800 text-white p-4 rounded-b-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">24x7 Quick Call Assistance</p>
                <p className="text-blue-400">+52 800 801 7795</p>
              </div>
              <Button
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;