import React from 'react';
import { CheckCircle, FileCheck, Settings, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const QualityServices = () => {
  const services = [
    {
      icon: CheckCircle,
      title: 'ISO 9001 (SGQ)',
      description: 'Sistema de Gestão da Qualidade completo'
    },
    {
      icon: FileCheck,
      title: 'ISO 13485 (Saúde)',
      description: 'Dispositivos médicos e equipamentos'
    },
    {
      icon: Settings,
      title: 'Mapeamento de Processos',
      description: 'Análise e otimização de fluxos'
    },
    {
      icon: TrendingUp,
      title: 'Gestão de Riscos',
      description: 'Identificação e controle de riscos'
    },
    {
      icon: Users,
      title: 'ANVISA (RDCs)',
      description: 'RDC 15, 216, 222, 275, 665'
    },
    {
      icon: AlertTriangle,
      title: 'INMETRO (Portarias)',
      description: 'Conformidade regulatória'
    }
  ];

  const additionalServices = [
    'Gestão de Mudanças',
    'Análise Crítica da Direção',
    'Tratativas de Não Conformidades',
    'Programa 5S',
    'Auditorias Especializadas',
    'Treinamentos Regulatórios'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Quality Management Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consultoria em Qualidade e Normas Regulatórias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementação e certificação de sistemas de gestão da qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group animate-slide-up transform hover:scale-105"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serviços Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300 animate-slide-up"
                style={{animationDelay: `${(index + 6) * 100}ms`}}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Image */}
        <div className="mt-12 animate-fade-in delay-700">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Quality Management Team"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Qualidade Garantida</h3>
                <p className="text-lg opacity-90">Certificações reconhecidas internacionalmente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityServices;