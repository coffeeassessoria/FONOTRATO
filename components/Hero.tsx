import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Cloud, Sun } from 'lucide-react';
import { HERO_headline, HERO_subheadline, CTA_text } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let globalCharIndex = 0;

  return (
    <section className="relative bg-gradient-to-b from-[#4F46E5] to-[#4338ca] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Playful Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 left-10 opacity-20 lg:opacity-100"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
           <div className="text-brand-yellow animate-spin-slow">
             <Sun className="w-24 h-24 lg:w-40 lg:h-40" />
           </div>
        </div>
        
        {/* Floating Letters */}
        <div className="absolute top-20 right-[10%] text-white/10 text-9xl font-display font-black rotate-12 animate-float">A</div>
        <div className="absolute bottom-40 left-[5%] text-brand-yellow/10 text-9xl font-display font-black -rotate-12 animate-float-delayed">B</div>
        <div className="absolute top-1/2 left-[15%] text-brand-pink/10 text-8xl font-display font-black rotate-45 animate-float">1</div>
        <div className="absolute bottom-20 right-[20%] text-brand-green/10 text-8xl font-display font-black -rotate-6 animate-float-delayed">2</div>

        <div className="absolute top-32 right-32"><Cloud className="text-white/5 w-40 h-40 animate-float" /></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
          
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl lg:text-5xl font-display font-black leading-tight text-white drop-shadow-lg" aria-label={HERO_headline}>
              {HERO_headline.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 lg:mr-3">
                  {word.split("").map((char, charIndex) => {
                    globalCharIndex++;
                    return (
                      <span
                        key={charIndex}
                        className="inline-block hover:text-brand-yellow hover:-translate-y-2 hover:rotate-3 transition-all duration-300 cursor-default animate-[type-reveal_0.4s_cubic-bezier(0.2,0.8,0.2,1)_both]"
                        style={{ animationDelay: `${globalCharIndex * 0.02}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>
            
            <p className="text-lg lg:text-2xl text-blue-100 font-sans leading-relaxed font-medium animate-fade-in delay-500">
              {HERO_subheadline}
            </p>

            {/* Intro Copy before CTA */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block max-w-2xl mx-auto animate-fade-in-up">
                <p className="text-white text-lg font-bold">
                    "Com o Kit Fonotraço, baseado no método americano de alfabetização, seu filho aprende a ler até 5x mais rápido — de forma divertida, simples e eficaz, direto de casa!"
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 animate-fade-in-up delay-700">
              <a 
                href="#oferta"
                className="group relative bg-brand-yellow hover:bg-yellow-300 text-brand-navy text-xl lg:text-2xl font-display font-black py-5 px-10 rounded-3xl shadow-[0_8px_0_rgb(217,119,6)] hover:shadow-[0_4px_0_rgb(217,119,6)] hover:translate-y-1 transition-all flex items-center justify-center gap-3 active:translate-y-2 active:shadow-none"
              >
                {CTA_text}
                <ArrowRight className="w-6 h-6 group-hover:rotate-12 transition-transform stroke-[3px]" />
              </a>
            </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-12 sm:h-16 filter drop-shadow-[0_-5px_10px_rgba(0,0,0,0.1)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;