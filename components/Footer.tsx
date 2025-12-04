
import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-600 text-blue-100 py-12 text-sm relative overflow-hidden">
      {/* Decorative doodle */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Trust & Security Section */}
        <div className="mb-10 border-b border-white/10 pb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                
                {/* Security Certificates */}
                <div className="text-center md:text-right md:pr-8 md:border-r border-white/10">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Ambiente Seguro</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-3">
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                            <Lock className="w-4 h-4 text-green-400" />
                            <div className="text-left">
                                <p className="text-[10px] leading-none text-white/70">Site</p>
                                <p className="text-xs font-bold text-white leading-none">Blindado</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                            <ShieldCheck className="w-4 h-4 text-white" />
                            <div className="text-left">
                                <p className="text-[10px] leading-none text-white/70">Google</p>
                                <p className="text-xs font-bold text-white leading-none">Seguro</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                            <CheckCircle className="w-4 h-4 text-yellow-400" />
                            <div className="text-left">
                                <p className="text-[10px] leading-none text-white/70">Certificado</p>
                                <p className="text-xs font-bold text-white leading-none">SSL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="text-center md:text-left">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Formas de Pagamento</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
                         {/* Pix */}
                         <div className="bg-white h-8 w-14 rounded flex items-center justify-center p-1 overflow-hidden" title="Pix">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94Pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" 
                              alt="Pix" 
                              className="h-full w-auto object-contain"
                            />
                         </div>
                         {/* Mastercard */}
                         <div className="bg-white h-8 w-12 rounded flex items-center justify-center p-1" title="Mastercard">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-full w-auto object-contain" />
                         </div>
                         {/* Visa */}
                         <div className="bg-white h-8 w-12 rounded flex items-center justify-center p-1" title="Visa">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full w-auto object-contain" />
                         </div>
                         {/* Boleto */}
                         <div className="bg-white h-8 w-12 rounded flex items-center justify-center p-1" title="Boleto">
                             <img 
                               src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Boleto_Banc%C3%A1rio.svg" 
                               alt="Boleto" 
                               className="h-full w-auto object-contain scale-110"
                             />
                         </div>
                    </div>
                </div>

            </div>
        </div>

        <p className="font-bold text-white text-xl font-display tracking-wide mb-2">Fonotraço Kids</p>
        <p className="mb-4">Copyright © {new Date().getFullYear()} - Todos os direitos reservados.</p>
        
        <div className="flex justify-center gap-6 font-semibold text-white/80">
          <a href="#" className="hover:text-white transition-colors hover:underline">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors hover:underline">Contato</a>
        </div>
        
        <p className="text-xs text-blue-200/60 max-w-2xl mx-auto pt-8">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
