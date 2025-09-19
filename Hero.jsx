import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import innosoftLogo from '../assets/innosoft_logo_3.png';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="innosoft-hero min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--innosoft-gold)]/20 text-sm font-medium text-gray-700 mb-4">
                <Sparkles className="w-4 h-4 mr-2 text-[var(--innosoft-gold)]" />
                Innovation in Technology
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="innosoft-text-gradient">Innosoft</span>
              <br />
              <span className="text-gray-800">Soluções que</span>
              <br />
              <span className="text-gray-800">Transformam</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Desenvolvemos softwares inovadores que revolucionam a forma como empresas e profissionais trabalham. 
              Nossas soluções combinam tecnologia de ponta com design intuitivo para entregar resultados excepcionais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToProducts}
                className="group bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-[var(--innosoft-gold)] text-[var(--innosoft-gold)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--innosoft-gold)] hover:text-white transition-all duration-300">
                Saiba Mais
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold innosoft-text-gradient">5+</div>
                <div className="text-sm text-gray-600">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold innosoft-text-gradient">1000+</div>
                <div className="text-sm text-gray-600">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold innosoft-text-gradient">99%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Logo e Elementos Visuais */}
          <div className="relative">
            <div className="relative z-10 floating-animation">
              <img 
                src={innosoftLogo} 
                alt="Innosoft Logo" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-[var(--innosoft-silver)] to-[var(--innosoft-gold)] rounded-full opacity-30 animate-bounce"></div>
            
            {/* Cards flutuantes */}
            <div className="absolute top-1/4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[var(--innosoft-gold)]/20 floating-animation" style={{animationDelay: '1s'}}>
              <Zap className="w-6 h-6 text-[var(--innosoft-gold)] mb-2" />
              <div className="text-sm font-semibold">Performance</div>
              <div className="text-xs text-gray-600">Alta velocidade</div>
            </div>
            
            <div className="absolute bottom-1/4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[var(--innosoft-gold)]/20 floating-animation" style={{animationDelay: '2s'}}>
              <Shield className="w-6 h-6 text-[var(--innosoft-gold)] mb-2" />
              <div className="text-sm font-semibold">Segurança</div>
              <div className="text-xs text-gray-600">Dados protegidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

