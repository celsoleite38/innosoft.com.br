import React from 'react';
import { Target, Users, Lightbulb, Award, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Inovação',
      description: 'Buscamos constantemente novas tecnologias e abordagens para criar soluções revolucionárias.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes para entender suas necessidades e superar expectativas.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excelência',
      description: 'Comprometemo-nos com a mais alta qualidade em todos os aspectos do nosso trabalho.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Crescimento',
      description: 'Focamos no crescimento sustentável dos nossos clientes e da nossa própria empresa.'
    }
  ];

  const stats = [
    { number: '2018', label: 'Fundada em' },
    { number: '50+', label: 'Profissionais' },
    { number: '1000+', label: 'Clientes Ativos' },
    { number: '5', label: 'Produtos Principais' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Sobre a <span className="innosoft-text-gradient">Innosoft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa de tecnologia dedicada a criar soluções inovadoras que transformam a forma como as pessoas trabalham e vivem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Conteúdo Principal */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Nossa História
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundada em 2018, a Innosoft nasceu da visão de democratizar o acesso a tecnologias avançadas. 
              Começamos como uma pequena startup com grandes sonhos e hoje somos reconhecidos como líderes 
              em inovação tecnológica.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa jornada é marcada pela constante busca por excelência e pela paixão em resolver problemas 
              complexos através de soluções simples e elegantes. Cada produto que desenvolvemos carrega nossa 
              essência: inovação, qualidade e compromisso com o sucesso dos nossos clientes.
            </p>
            
            {/* Missão e Visão */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-[var(--innosoft-gold)]/10 to-[var(--innosoft-bronze)]/10 p-6 rounded-xl">
                <Target className="w-8 h-8 text-[var(--innosoft-gold)] mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Nossa Missão</h4>
                <p className="text-sm text-gray-600">
                  Desenvolver soluções tecnológicas que simplifiquem processos e potencializem resultados.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[var(--innosoft-silver)]/10 to-[var(--innosoft-gold)]/10 p-6 rounded-xl">
                <Globe className="w-8 h-8 text-[var(--innosoft-bronze)] mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Nossa Visão</h4>
                <p className="text-sm text-gray-600">
                  Ser referência global em inovação tecnológica e transformação digital.
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Números que Falam por Si
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold innosoft-text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--innosoft-gold)]/10 to-[var(--innosoft-bronze)]/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer fazer parte da nossa história?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de clientes que já transformaram seus negócios com nossas soluções.
            </p>
            <button className="bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
              Comece Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

