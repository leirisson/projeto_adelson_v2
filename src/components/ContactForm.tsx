import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Gift } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const whatsappMessage = `
*Nova Solicitação de Consultoria - ASZ*

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Área de Interesse:* ${formData.interest}

*Mensagem:*
${formData.message}

---
*Solicitação de Checklist Gratuito de Adequação às Normas*
    `.trim();

    // Numero do WhatsApp (substitua pelo número real)
    const whatsappNumber = '5592981234567'; // Exemplo
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      interest: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solicite uma Consultoria Especializada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Preencha o formulário e receba uma proposta personalizada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-green-600 animate-slide-up">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Resposta em até 2 horas úteis</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 animate-slide-up delay-200">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Checklist gratuito incluso</span>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fade-in delay-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-slide-up" style={{animationDelay: '400ms'}}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="animate-slide-up" style={{animationDelay: '500ms'}}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Instituição *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="animate-slide-up" style={{animationDelay: '600ms'}}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="animate-slide-up" style={{animationDelay: '700ms'}}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="animate-slide-up" style={{animationDelay: '800ms'}}>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                Área de Interesse *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
              >
                <option value="">Selecione uma área</option>
                <option value="Qualidade (ISO 9001, 13485)">Qualidade (ISO 9001, 13485)</option>
                <option value="Meio Ambiente (ISO 14001)">Meio Ambiente (ISO 14001)</option>
                <option value="Segurança Ocupacional (ISO 45001)">Segurança Ocupacional (ISO 45001)</option>
                <option value="Treinamentos NR">Treinamentos NR</option>
                <option value="Licenciamentos Ambientais">Licenciamentos Ambientais</option>
                <option value="ANVISA (RDCs)">ANVISA (RDCs)</option>
                <option value="INMETRO">INMETRO</option>
                <option value="Sistema de Gestão Integrada">Sistema de Gestão Integrada</option>
              </select>
            </div>

            <div className="animate-slide-up" style={{animationDelay: '900ms'}}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem sobre sua necessidade
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                placeholder="Descreva brevemente sua necessidade de consultoria..."
              />
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '1000ms'}}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar para WhatsApp
                  </>
                )}
              </button>
              
              <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1 animate-fade-in" style={{animationDelay: '1100ms'}}>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center space-x-1 animate-fade-in" style={{animationDelay: '1200ms'}}>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Checklist gratuito</span>
                </div>
                <div className="flex items-center space-x-1 animate-fade-in" style={{animationDelay: '1300ms'}}>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Resposta rápida</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;