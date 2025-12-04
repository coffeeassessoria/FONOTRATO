
import React from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { BookOpen, Users, BrainCircuit, School } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Users,
  BrainCircuit,
  School
};

const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#4338ca] to-[#3730a3] relative">
       {/* Background doodles - made subtle white */}
       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Praticando apenas 10 minutos por dia...
          </h2>
          <p className="text-xl text-blue-100 font-medium">
            Seu filho colherá estes benefícios para o resto da vida:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item) => {
            const IconComponent = iconMap[item.icon];
            
            return (
              <div key={item.id} className="bg-white p-6 rounded-3xl shadow-xl border-b-4 border-brand-blue hover:-translate-y-1 transition-transform h-full flex flex-col items-center text-center relative overflow-hidden group">
                <div className="bg-blue-50 p-4 rounded-full mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                
                <div className="absolute top-4 left-4 font-display font-black text-4xl text-slate-100 opacity-50 z-0">
                    {item.id}
                </div>

                <h3 className="font-display font-bold text-xl text-brand-navy mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
