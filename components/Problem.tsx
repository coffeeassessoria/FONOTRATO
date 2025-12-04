import React from 'react';
import { AlertTriangle, Frown, XCircle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-brand-paper relative bg-lined-paper">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-display font-bold text-brand-navy">
            Muitos pais acham que “cada criança tem seu tempo pra ler”. Até que…
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4">
                {[
                  "As tarefas de leitura viram um sofrimento",
                  "As notas baixas começam a aparecer",
                  "Ela se sente “menos inteligente” do que os coleguinhas",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-red-50 p-4 rounded-xl border-l-4 border-brand-red">
                    <span className="text-2xl">👎🏻</span>
                    <span className="font-bold text-brand-navy">{item}</span>
                  </div>
                ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-2 border border-slate-200">
                <p className="font-display font-bold text-xl text-center text-slate-700 mb-2">
                    E o pior...
                </p>
                <div className="flex flex-col items-center">
                    <Frown className="w-16 h-16 text-slate-400 mb-2" />
                    <p className="text-center text-slate-600">
                        Começa a achar que não é capaz, sem entender o porquê.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-brand-navy/5 p-8 rounded-3xl border-2 border-dashed border-brand-navy/20 text-center space-y-6">
            <h3 className="text-2xl font-bold text-brand-navy font-display">Entenda o que realmente atrasa a leitura do seu filho...</h3>
            <p className="text-lg text-slate-700">
                A <strong>falta de estímulo fonético</strong> na fase certa, o que pode tornar o processo de alfabetização mais lento, frustrante e confuso — tanto para a criança quanto para você.
            </p>
            <p className="text-lg text-brand-blue font-bold">
                Mas calma, você não tem culpa disso...
            </p>
            <p className="text-slate-600">
                É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma leve, divertida e no tempo certo.
            </p>
            <div className="inline-block bg-brand-yellow px-6 py-2 rounded-full font-black text-brand-navy transform -rotate-1 shadow-md">
                Por isso você precisa do Kit...
            </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;