
import React from 'react';
import { MODULES, BONUSES } from '../constants';
import { Gift, CheckCircle } from 'lucide-react';

const Stack: React.FC = () => {
  return (
    <section className="py-24 bg-brand-paper relative overflow-hidden" id="modulos">
      {/* Playful Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-black text-brand-navy mb-4 uppercase">
            Veja tudo que você vai receber
          </h2>
          {/* Removed rotation on mobile */}
          <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full font-bold shadow-md transform md:-rotate-2">
             + DE 100 ATIVIDADES DE GRAFISMO FONÉTICO
          </div>
        </div>

        {/* Modules Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {MODULES.map((module, idx) => (
            <div key={idx} className="group perspective-1000">
                <div className="bg-white p-4 rounded-3xl shadow-lg border-2 border-slate-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
                    
                    {/* Image with Zoom & Rotate Effect */}
                    <div className="relative mb-6 transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-2">
                        <img 
                            src={module.imageUrl} 
                            alt={module.imageAlt} 
                            className="rounded-xl shadow-md border-4 border-white w-full object-cover aspect-[3/4]"
                        />
                         <div className="absolute -top-3 -right-3 bg-brand-yellow text-brand-navy font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md border-2 border-white">
                             {idx + 1}
                         </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">{module.title}</h3>
                    <p className="text-slate-500 text-sm leading-snug">{module.description}</p>
                </div>
            </div>
          ))}
        </div>

        {/* Bonuses Section - Removed rotation on mobile */}
        <div className="bg-gradient-to-br from-brand-purple to-brand-pink rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-xl transform md:rotate-1 transition-transform hover:rotate-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-yellow/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                     <p className="text-brand-yellow font-display font-bold text-2xl mb-2 drop-shadow-md">e ainda não acabou...</p>
                     <h3 className="text-3xl lg:text-4xl font-black drop-shadow-md">GARANTINDO SEU ACESSO HOJE VOCÊ LEVA 4 SUPER BÔNUS🎁</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BONUSES.map((bonus, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1 shadow-lg">
                            <div className="text-pink-100 text-xs line-through font-bold mb-1">De R$ {bonus.originalPrice}</div>
                            <div className="text-brand-yellow font-black text-xl mb-3 drop-shadow-sm">HOJE: GRÁTIS</div>
                            <h4 className="font-bold text-lg mb-2 text-white">{bonus.title}</h4>
                            <p className="text-sm text-pink-50 font-medium leading-relaxed">{bonus.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Stack;
