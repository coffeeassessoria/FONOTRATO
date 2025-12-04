
import React from 'react';
import { Check } from 'lucide-react';

const Mechanism: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#4F46E5] to-[#4338ca] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Solution Introduction */}
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 drop-shadow-sm">
                Cada atividade do Kit de Grafismo Fonético foi cuidadosamente criada para:
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    "Desenvolver a coordenação motora fina",
                    "Estimular a criatividade e a atenção",
                    "Fortalecer as conexões cerebrais",
                    "Despertar o interesse pelas palavras",
                    "Tornar o processo leve e divertido"
                ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-white font-bold flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors">
                        <div className="bg-white rounded-full p-0.5">
                            <Check className="w-3 h-3 text-brand-blue" />
                        </div>
                        {item}
                    </div>
                ))}
            </div>
            <p className="mt-8 text-xl font-medium text-blue-100">
                Tudo isso com apenas alguns minutos por dia — direto de casa.
            </p>
        </div>

        {/* Why it works */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border-b-8 border-brand-blue/20 mb-16 relative">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-black text-brand-navy uppercase tracking-wide">
                    Por que as atividades de Grafismo Fonético funcionam?
                </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 text-slate-600 text-lg">
                    <p>
                        Antes de aprender a ler, o cérebro da criança precisa reconhecer <strong className="text-brand-blue">padrões, sons e movimentos</strong>.
                    </p>
                    <p>
                        As atividades de grafismo fonético desenvolvem a consciência fonológica e visual — habilidades essenciais para que a criança reconheça sílabas e sons de forma natural.
                    </p>
                    <p>
                        Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as conexões cerebrais responsáveis pela leitura.
                    </p>
                </div>
                {/* Removed rotation on mobile (transform md:rotate-2) */}
                <div className="bg-brand-pastel-blue p-6 rounded-3xl transform md:rotate-2 border border-blue-100">
                     <h4 className="font-bold text-brand-navy mb-4 text-center">E em poucos dias você vai notar a diferença:</h4>
                     <ul className="space-y-3">
                        {[
                            "Vai reconhecer sílabas e sons com facilidade",
                            "Vai se sentir mais confiante",
                            "Vai mostrar mais interesse por livros",
                            "Vai aprender no ritmo dele",
                            "Vai começar a gostar do momento de leitura"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm font-bold text-slate-700">
                                <span className="text-brand-green">➜</span>
                                {item}
                            </li>
                        ))}
                     </ul>
                </div>
            </div>
        </div>

        {/* Benefits Cards */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-8">📚 O Que Seu Filho Vai Aprender 📚</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {title: "Reconhecimento", desc: "De Sons e Letras, fortalecendo conexões cerebrais."},
                    {title: "Formação", desc: "De Palavras, transformando a construção em diversão."},
                    {title: "Compreensão", desc: "E Leitura Fluente, ganhando confiança a cada dia."},
                    {title: "Guia Passo a Passo", desc: "Instruções visuais para um aprendizado tranquilo."},
                ].map((card, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-yellow hover:-translate-y-1 transition-transform">
                        <h4 className="font-bold text-lg text-brand-navy mb-2">{card.title}</h4>
                        <p className="text-slate-600 text-sm">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center">
             <a href="#oferta" className="inline-block bg-brand-green text-white font-display font-black text-2xl px-12 py-4 rounded-full shadow-[0_6px_0_#15803d] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all hover:bg-green-500 w-full md:w-auto text-center">
                Quero meu filho(a) Lendo!
             </a>
        </div>

      </div>
    </section>
  );
};

export default Mechanism;
