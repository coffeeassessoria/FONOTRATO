import React, { useState, useEffect } from 'react';
import { NOTIFICATION_NAMES, NOTIFICATION_LOCATIONS } from '../constants';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

const LiveNotifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', time: '' });

  useEffect(() => {
    // Initial delay before starting the loop
    const initialTimer = setTimeout(() => {
      triggerNotification();
      // Loop notifications
      const interval = setInterval(() => {
        triggerNotification();
      }, 12000 + Math.random() * 8000); // Random interval between 12-20s

      return () => clearInterval(interval);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, []);

  const triggerNotification = () => {
    // Select random data
    const name = NOTIFICATION_NAMES[Math.floor(Math.random() * NOTIFICATION_NAMES.length)];
    const location = NOTIFICATION_LOCATIONS[Math.floor(Math.random() * NOTIFICATION_LOCATIONS.length)];
    const time = 'Agora mesmo';

    setData({ name, location, time });
    setVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  if (!visible && !data.name) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-[60] transform transition-all duration-500 ${visible ? 'animate-slide-up' : 'translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border-2 border-brand-green max-w-xs md:max-w-sm relative overflow-hidden">
        {/* Progress bar effect at bottom */}
        {visible && (
            <div className="absolute bottom-0 left-0 h-1 bg-brand-green animate-[width_4s_linear] w-full"></div>
        )}

        <div className="bg-green-100 p-3 rounded-full shrink-0">
          <ShoppingBag className="w-6 h-6 text-brand-green" />
        </div>
        
        <div>
          <p className="text-sm font-bold text-brand-navy">
            {data.name} <span className="text-slate-400 font-normal">de {data.location}</span>
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Acabou de comprar o <span className="text-brand-green font-bold">Kit Fonotraço</span>
          </p>
          <div className="flex items-center gap-1 mt-1">
             <CheckCircle2 className="w-3 h-3 text-brand-green" />
             <span className="text-[10px] text-slate-400 uppercase tracking-wide">Verificado agora</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNotifications;