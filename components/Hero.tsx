import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center md:bg-[center_calc(50%_+_25px)]"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}malu-bg.PNG")`,
        }}
      >
        <div className="absolute inset-0 bg-pinky-500/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pinky-500/20 to-pinky-50"></div>
      </div>

      {/* Playful Shapes Overlay */}
      <div className="absolute top-20 left-10 text-white/30 animate-float">
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 right-20 text-white/30 animate-float" style={{ animationDelay: '1s' }}>
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 mt-10">
        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full px-6 mb-6 border border-white/30 animate-fade-in-up">
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            Atriz • Bailarina • Sonhadora
          </span>
        </div>

        <h1 className="font-display text-7xl md:text-9xl text-white mb-4 leading-none text-shadow-pop animate-fade-in-up">
          Malu <br /><span className="text-yellow-300">Miranda</span>
        </h1>





        <div className="mt-8 flex gap-4">
          <a href="#teatro" className="bg-white text-pinky-500 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none text-pinky-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};