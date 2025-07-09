
import React from 'react';
import { Calendar } from 'lucide-react';

interface LogoProps {
  className?: string;
  textSize?: string;
}

const Logo = ({ className = "", textSize = "text-xl sm:text-2xl" }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-blue-600 text-white p-2 rounded-lg">
        <Calendar className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <h1 className={`${textSize} font-bold text-gray-800 leading-tight`}>
          Reserva Mi Reservas
        </h1>
      </div>
    </div>
  );
};

export default Logo;
