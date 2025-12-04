import React from 'react';
import { Mail, Printer, Heart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-navy">
                Muito simples de começar a utilizar!
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-blue rounded-2xl rotate-3 flex items-center justify-center mb-4 shadow-lg text-white">
                    <Mail className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2">CHEGA NO E-MAIL</h3>
                <p className="text-slate-600 text-sm">Após a compra você recebe no e-mail o acesso a plataforma com arquivos em formato PDF.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-yellow rounded-2xl -rotate-3 flex items-center justify-center mb-4 shadow-lg text-brand-navy">
                    <Printer className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2">VOCÊ IMPRIME</h3>
                <p className="text-slate-600 text-sm">Você pode imprimir quando quiser, pois o acesso é VITALÍCIO e quantas vezes desejar.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-pink rounded-2xl rotate-2 flex items-center justify-center mb-4 shadow-lg text-white">
                    <Heart className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2">OS PEQUENOS AMAM</h3>
                <p className="text-slate-600 text-sm">Temos uma ótima notícia pra você, MÃOS À OBRA! Importante que sempre auxilie seu pequeno.</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;