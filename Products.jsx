import React from 'react';
import ProductCard from './ProductCard';
import fluxoLogo from '../assets/innosoft_fluxo_logo_v2.png';
import fidelityLogo from '../assets/innosoft_fidelity_logo_v2.png';
import nutriLogo from '../assets/innosoft_nutri_logo_v2.png';
import fisioLogo from '../assets/innosoft_fisio_logo_v2.png';
import lexpertLogo from '../assets/innosoft_law_logo_v2.png';

const Products = () => {
  const products = [
    {
      name: 'Fluxo',
      tagline: 'Software Solutions',
      logo: fluxoLogo,
      description: 'Otimize seus processos de trabalho com nossa solução completa de gestão de fluxos. Automatize tarefas, monitore progresso e aumente a produtividade da sua equipe.',
      features: [
        'Automação de processos',
        'Monitoramento em tempo real',
        'Relatórios avançados',
        'Integração com outras ferramentas'
      ]
    },
    {
      name: 'Fidelity',
      tagline: 'Software Solutions',
      logo: fidelityLogo,
      description: 'Garanta a precisão e confiabilidade dos seus dados com nossa plataforma de alta fidelidade. Controle de qualidade e validação automática para resultados perfeitos.',
      features: [
        'Validação automática de dados',
        'Controle de qualidade',
        'Backup seguro',
        'Auditoria completa'
      ]
    },
    {
      name: 'Nutri',
      tagline: 'Software for Wellness',
      logo: nutriLogo,
      description: 'Revolucione o cuidado nutricional com nossa plataforma inteligente. Planejamento personalizado, acompanhamento detalhado e resultados comprovados.',
      features: [
        'Planos nutricionais personalizados',
        'Acompanhamento de progresso',
        'Base de dados de alimentos',
        'Relatórios de saúde'
      ]
    },
    {
      name: 'Fisio',
      tagline: 'Software for Movement & Health',
      logo: fisioLogo,
      description: 'Transforme a fisioterapia com tecnologia avançada. Exercícios personalizados, acompanhamento de evolução e comunicação direta com pacientes.',
      features: [
        'Exercícios personalizados',
        'Acompanhamento de evolução',
        'Comunicação com pacientes',
        'Relatórios de progresso'
      ]
    },
    {
      name: 'Lexpert',
      tagline: 'Intelligent Law Solutions',
      logo: lexpertLogo,
      description: 'Simplifique a prática jurídica com inteligência artificial. Análise de documentos, pesquisa jurisprudencial e gestão de casos em uma única plataforma.',
      features: [
        'Análise inteligente de documentos',
        'Pesquisa jurisprudencial',
        'Gestão de casos',
        'Automação de petições'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nossos <span className="innosoft-text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de soluções de software, desenvolvidas para atender às necessidades específicas de diferentes setores e profissionais.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="relative">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e descubra como nossas soluções podem revolucionar sua forma de trabalhar.
            </p>
            <button className="bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

