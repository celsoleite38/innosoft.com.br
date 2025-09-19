import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl group cursor-pointer">
      {/* Logo do Produto */}
      <div className="flex justify-center mb-6">
        <img 
          src={product.logo} 
          alt={product.name}
          className="h-24 w-auto object-contain"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-[var(--innosoft-gold)] font-medium mb-4">{product.tagline}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
        
        {/* Features */}
        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-[var(--innosoft-gold)] rounded-full mr-3"></div>
              {feature}
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="group/btn w-full bg-gradient-to-r from-[var(--innosoft-gold)] to-[var(--innosoft-bronze)] text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
          Saiba Mais
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--innosoft-gold)]/5 to-[var(--innosoft-bronze)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;

