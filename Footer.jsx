import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import innosoftLogo from '../assets/innosoft_logo_3.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 pulse-gold"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={innosoftLogo} 
                alt="Innosoft" 
                className="h-12 w-auto mr-4"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideias em soluções tecnológicas inovadoras. 
              Nossa missão é simplificar processos e potencializar resultados através da tecnologia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--innosoft-gold)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--innosoft-gold)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--innosoft-gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--innosoft-gold)]">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[var(--innosoft-gold)]">
              Nossos Produtos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors">
                  Fluxo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors">
                  Fidelity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors">
                  Nutri
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors">
                  Fisio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--innosoft-gold)] transition-colors">
                  Lexpert
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-[var(--innosoft-gold)] mr-3" />
              <span className="text-gray-300">contato@innosoft.com.br</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[var(--innosoft-gold)] mr-3" />
              <span className="text-gray-300">+55 (11) 9999-9999</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-[var(--innosoft-gold)] mr-3" />
              <span className="text-gray-300">São Paulo, SP - Brasil</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Innosoft. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[var(--innosoft-gold)] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--innosoft-gold)] transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--innosoft-gold)] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

