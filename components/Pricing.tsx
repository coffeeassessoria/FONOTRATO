import React from 'react';
import { PRICE_anchor, PRICE_current, CTA_text, MODULES, BONUSES } from '../constants';
import { Check, ShieldCheck, Lock, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Recapitulando tudo o que você vai receber:</h2>
            <div className="bg-slate-50 p-6 rounded-2xl inline-block text-left shadow-inner border border-slate-200">
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-slate-700 font-bold">
                        <Check className="w-5 h-5 text-green-600" />
                        Atividades de Grafismo Fonético Nivel 1, 2 e 3 <span className="text-slate-400 line-through text-sm">De R$ 197</span>
                    </li>
                    {BONUSES.map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 font-bold">
                             <Check className="w-5 h-5 text-green-600" />
                             Bônus 0{i+1}: {b.title} <span className="text-slate-400 line-through text-sm">De R$ {b.originalPrice}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Pricing Card - Updated Background */}
        <div className="bg-gradient-to-b from-[#4F46E5] to-[#4338ca] rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden border-4 border-brand-yellow transform hover:scale-[1.01] transition-transform duration-300">
             
             {/* Decorative patterns */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

             {/* Guarantee Badge */}
             <div className="absolute -top-10 -right-10 bg-brand-yellow text-brand-navy font-black text-xs w-32 h-32 flex items-end justify-center pb-4 rotate-45 shadow-lg z-10">
                 GARANTIA<br/>INCONDICIONAL
             </div>

             <p className="text-blue-100 mb-2 font-medium relative z-10">No total tudo deveria custar <span className="line-through opacity-70">R$ {PRICE_anchor},00</span></p>
             <p className="text-xl font-bold mb-4 relative z-10">Mas hoje você vai ter acesso completo por:</p>
             
             <div className="text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-md relative z-10">
                 R$ {PRICE_current}
             </div>
             <p className="text-sm text-blue-100 mb-8 font-semibold relative z-10">ou 5 x de R$ 8,19 *</p>

             <button className="w-full max-w-md bg-brand-green hover:bg-[#22c55e] text-white font-black text-2xl py-5 rounded-full shadow-[0_6px_0_#1e6f51] transition-all duration-300 mb-4 relative z-10 border-2 border-white/20 animate-pulse-gentle hover:animate-none hover:scale-105 hover:shadow-[0_8px_0_#1e6f51] active:translate-y-1 active:shadow-none">
                 QUERO GARANTIR O MEU KIT!
             </button>
             
             <div className="flex justify-center gap-4 text-xs font-bold text-blue-100 uppercase tracking-widest relative z-10 opacity-80">
                 <span>Acesso Vitalício</span>
                 <span>|</span>
                 <span>Acesso Imediato</span>
             </div>
        </div>

        {/* Guarantee Text */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-200">
             <div className="shrink-0">
                  <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <ShieldCheck className="w-12 h-12 text-brand-navy" />
                  </div>
             </div>
             <div>
                 <h4 className="font-bold text-brand-navy text-xl mb-2">GARANTIA DE SATISFAÇÃO TOTAL:</h4>
                 <p className="text-slate-600 leading-relaxed text-sm">
                 Estamos tão certos de que o Kit de Grafismo Fonético vai ajudar seu filho a ler com mais facilidade, que oferecemos uma garantia de satisfação total por 7 dias. Se, por qualquer motivo, você sentir que o material não foi útil ou que seu filho não se adaptou, é só nos avisar dentro desse prazo e devolveremos 100% do seu investimento — sem perguntas ou burocracia.
                 </p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;