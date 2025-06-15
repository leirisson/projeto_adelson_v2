import React from 'react';
import { Leaf, Droplets, FileText, Shield, Building, TreePine } from 'lucide-react';

const EnvironmentServices = () => {
  const services = [
    {
      icon: Leaf,
      title: 'ISO 14001 (SGA)',
      description: 'Sistema de Gestão Ambiental'
    },
    {
      icon: Building,
      title: 'Licenciamentos Ambientais',
      description: 'Processos junto aos órgãos competentes'
    },
    {
      icon: FileText,
      title: 'PGRS e PGRSS',
      description: 'Planos de Gerenciamento de Resíduos'
    },
    {
      icon: Droplets,
      title: 'Outorgas CONAMA',
      description: 'Poço artesiano e sistema de captação'
    },
    {
      icon: Shield,
      title: 'Outorgas IBAMA',
      description: 'Estação de Tratamento de Efluentes'
    },
    {
      icon: TreePine,
      title: 'Relatórios Técnicos',
      description: 'IPAM, SEMMAS e órgãos estaduais'
    }
  ];

  const additionalServices = [
    'Conformidade com Legislação Ambiental',
    'PAE (Plano de Ação de Emergência)',
    'Estudos de Impacto Ambiental',
    'Monitoramento Ambiental',
    'Inventário de Emissões',
    'Documento + ART CREA-AM'
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Environmental Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consultoria em Meio Ambiente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Licenciamentos, outorgas e conformidade ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group animate-slide-up transform hover:scale-105"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

          {/* Feature Image */}
          <div className="animate-fade-in delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Environmental Consulting"
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
                <p className="text-sm opacity-90">Proteção ambiental e conformidade legal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl border border-green-100 animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serviços Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${(index + 6) * 100}ms`}}
              >
                <Leaf className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-green-600 text-white p-6 rounded-xl animate-fade-in delay-700">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-8 h-8" />
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Órgãos Credenciados</h3>
              <p className="text-green-100">CONAMA • IBAMA • IPAM • SEMMAS • CREA-AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentServices;