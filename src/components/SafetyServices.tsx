import React from 'react';
import { Shield, HardHat, FileText, AlertTriangle, Users, Clipboard } from 'lucide-react';

const SafetyServices = () => {
  const services = [
    {
      icon: Shield,
      title: 'ISO 45001 (SSO)',
      description: 'Sistema de Gestão de Saúde e Segurança Ocupacional'
    },
    {
      icon: FileText,
      title: 'PGR',
      description: 'Programa de Gerenciamento de Riscos'
    },
    {
      icon: Clipboard,
      title: 'PCMSO',
      description: 'Programa de Controle Médico de Saúde Ocupacional'
    },
    {
      icon: HardHat,
      title: 'LTCAT',
      description: 'Laudo Técnico das Condições Ambientais de Trabalho'
    },
    {
      icon: AlertTriangle,
      title: 'Laudos Técnicos',
      description: 'Insalubridade e Periculosidade'
    },
    {
      icon: Users,
      title: 'Treinamentos NR',
      description: 'NR-1 a NR-38 Certificados'
    }
  ];

  const additionalServices = [
    'PAE (Plano de Ação de Emergência)',
    'Auditorias em SST',
    'Implementação de SGI',
    'Análise de Riscos Ocupacionais',
    'Mapeamento de Riscos',
    'Gestão de EPI/EPC'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Safety Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consultoria em Saúde e Segurança Ocupacional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proteção aos trabalhadores e conformidade com normas regulamentadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Feature Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Workplace Safety"
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Segurança em Primeiro Lugar</h3>
                <p className="text-sm opacity-90">Proteção integral dos trabalhadores</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group animate-slide-up transform hover:scale-105"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serviços Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300 animate-slide-up"
                style={{animationDelay: `${(index + 6) * 100}ms`}}
              >
                <HardHat className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-orange-600 text-white p-6 rounded-xl animate-fade-in delay-700">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Especialização Completa</h3>
            <p className="text-orange-100">Engenheiro de Segurança do Trabalho • Auditor Líder ISO 45001 • Especialista em NRs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyServices;