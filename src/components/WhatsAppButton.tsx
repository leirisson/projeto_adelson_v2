import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de consultoria da ASZ. Podem me ajudar?";
    const whatsappNumber = '5592981234567'; // Substitua pelo número real
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 group animate-bounce-slow"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className={`font-medium transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'
        } md:max-w-none md:opacity-100`}>
          Fale Conosco
        </span>
      </button>
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      
      {/* Tooltip para mobile */}
      <div className={`absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap md:hidden ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        Clique para conversar
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;