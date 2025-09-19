import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'contato@innosoft.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      info: '+55 (11) 9999-9999',
      description: 'Seg-Sex, 9h às 18h'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      info: 'São Paulo, SP - Brasil',
      description: 'Atendimento presencial'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Entre em <span className="innosoft-text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar suas ideias em realidade. 
            Entre em contato conosco e descubra como podemos impulsionar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Vamos Conversar
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-[var(--innosoft-gold)] font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[var(--innosoft-gold)] mr-3" />
                <h4 className="font-semibold text-gray-800">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--innosoft-gold)] focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--innosoft-gold)] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--innosoft-gold)] focus:border-transparent transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--innosoft-gold)] focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--innosoft-gold)]/10 to-[var(--innosoft-bronze)]/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <MessageCircle className="w-12 h-12 text-[var(--innosoft-gold)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Prefere conversar diretamente?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma reunião conosco e vamos discutir como podemos ajudar seu negócio a crescer.
            </p>
            <button className="bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
              Agendar Reunião
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

