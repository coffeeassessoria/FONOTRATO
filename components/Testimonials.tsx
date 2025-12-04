
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { ThumbsUp } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-brand-navy mb-2">
            Veja o que Pais e educadores dizem
          </h2>
          <p className="text-slate-500 font-bold">1.197 comentários</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="space-y-6">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="flex gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
                             {t.imageUrl ? (
                               <img 
                                 src={t.imageUrl} 
                                 alt={t.name} 
                                 className="w-full h-full object-cover"
                               />
                             ) : (
                               /* Fallback avatar generator */
                               <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-sm">
                                  {t.name.charAt(0)}
                               </div>
                             )}
                        </div>
                        
                        <div className="flex-1">
                            <div className="bg-slate-100 rounded-2xl px-4 py-2 inline-block">
                                <h4 className="font-bold text-brand-navy text-sm">{t.name}</h4>
                                <p className="text-slate-700 text-sm leading-snug">{t.content}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-slate-500 font-semibold">
                                <button className="hover:underline">Curtir</button>
                                <button className="hover:underline">Responder</button>
                                <span>{t.timeAgo}</span>
                                {t.likes > 0 && (
                                    <div className="flex items-center gap-1 bg-white shadow-sm px-1 rounded-full border border-slate-200 ml-auto">
                                        <div className="bg-blue-500 rounded-full p-0.5"><ThumbsUp className="w-2 h-2 text-white" /></div>
                                        <span className="text-slate-600">{t.likes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center gap-2 text-slate-400 text-xs font-medium">
                 <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white font-serif">f</div>
                 <span>Plugin de comentários do Facebook</span>
            </div>
        </div>

        <div className="text-center mt-10">
             <a href="#oferta" className="inline-block bg-brand-green text-white font-display font-black text-xl px-10 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-transform">
                Quero meu filho(a) Lendo!
             </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;