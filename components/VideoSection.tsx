
import React, { useEffect, useRef } from 'react';
import { VTURB_SCRIPT_URL } from '../constants';

const VideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extração robusta do ID
  const match = VTURB_SCRIPT_URL.match(/\/players\/([a-zA-Z0-9]+)\//);
  const videoId = match ? match[1] : "";

  useEffect(() => {
    if (!containerRef.current || !videoId) return;

    // 1. Limpa o container e cria o elemento do player manualmente
    // Isso garante que o elemento exista no DOM antes do script rodar
    containerRef.current.innerHTML = '';
    const playerElem = document.createElement('vturb-smartplayer');
    playerElem.id = `vid-${videoId}`;
    playerElem.style.cssText = "display: block; margin: 0 auto; width: 100%; height: 100%;";
    containerRef.current.appendChild(playerElem);

    // 2. Gerenciamento do Script
    // Removemos qualquer instância anterior para forçar o script a rodar novamente
    // e reconhecer o novo elemento que acabamos de criar.
    const scriptId = `vturb-script-${videoId}`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = VTURB_SCRIPT_URL;
    script.async = true;
    script.id = scriptId;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      // Opcional: manter o script pode ser performático, mas removê-lo garante
      // que ao voltar para a página o vídeo carregue sem falhas.
      // Neste caso, deixamos a remoção acontecer no início do próximo mount (linhas acima)
      // ou podemos limpar aqui também.
    };
  }, [videoId]);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-2">
            Veja como é facil ensinar seu filho(a) a ler com o Grafismo Fonético...
            </h2>
            <p className="text-brand-red font-black text-xl animate-bounce">
            👇 Aperte o play 👇
            </p>
        </div>

        {/* Tablet/TV Frame */}
        <div className="relative mx-auto bg-gradient-to-b from-[#4F46E5] to-[#4338ca] p-4 rounded-[2rem] shadow-2xl border-b-8 border-indigo-900 max-w-3xl transform transition-transform duration-500 hover:scale-[1.005]">
            
            {/* Screen Container */}
            <div className="bg-indigo-950 rounded-xl relative overflow-hidden shadow-inner w-full flex items-center justify-center ring-4 ring-transparent aspect-video">
                
                {/* Referência onde o player será injetado */}
                <div 
                  ref={containerRef}
                  className="w-full h-full flex items-center justify-center bg-black"
                >
                    {/* Placeholder enquanto carrega */}
                    <div className="text-white/50 animate-pulse flex flex-col items-center">
                        <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Carregando player...</span>
                    </div>
                </div>

            </div>

            {/* Camera dot */}
            <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            
            {/* Pulsating Glow behind the tablet */}
            <div className="absolute -inset-4 bg-brand-blue/20 rounded-[2.5rem] -z-10 blur-xl animate-pulse-gentle"></div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
