import React from 'react';
import { Award, Users, MapPin, FileText, GraduationCap, Shield } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Auditor Líder Certificado',
      description: 'Múltiplas normas ISO 9001, 14001, 45001 e 13485',
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'Expertise ANVISA',
      description: 'Especialista em RDCs 15, 216, 222, 275, 665',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: MapPin,
      title: 'Atuação Nacional',
      description: 'Atendimento em todo território brasileiro',
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Engenheiros especialistas em SGI',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: FileText,
      title: 'Documentação Técnica',
      description: 'Credenciamento CREA-AM com ART',
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: GraduationCap,
      title: 'Docente Qualificado',
      description: 'Professor de Ensino Superior',
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a ASZ Consultoria?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise técnica, credibilidade e resultados comprovados em sistemas de gestão integrada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div 
                key={index} 
                className="group animate-slide-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden transform hover:scale-105">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={diff.image} 
                      alt={diff.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${diff.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua empresa?</h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a centenas de empresas que já confiam na nossa expertise
            </p>
            <button 
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
            >
              Solicitar Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;