import React from 'react';
import { Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-orange-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Consultoria Especializada em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 animate-pulse">
                Sistemas de Gestão Integrada
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Qualidade, Meio Ambiente e Saúde Ocupacional
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-5xl">
              <strong>Certificações ISO 9001, ISO 14001, ISO 45001 e ISO 13485</strong> | 
              Conformidade ANVISA (RDC 15, 216, 222, 275, 665) e INMETRO | 
              Treinamentos NR-1 a NR-38
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Fale com nosso especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Checklist gratuito de adequação às normas
              </p>
            </div>

            {/* Selos de Certificação */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {[
                { name: 'ISO 9001', desc: 'Sistema de Gestão da Qualidade' },
                { name: 'ISO 14001', desc: 'Sistema de Gestão Ambiental' },
                { name: 'ISO 45001', desc: 'Saúde e Segurança Ocupacional' },
                { name: 'ISO 13485', desc: 'Dispositivos Médicos' }
              ].map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-center mb-1 text-sm">{cert.name}</h3>
                  <p className="text-xs text-gray-600 text-center">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profissionais em consultoria empresarial"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Expertise Comprovada</h3>
                <p className="text-sm opacity-90">Mais de 15 anos em sistemas de gestão</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
              <Shield className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce-slow delay-1000">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;