import React from 'react';
import { Star, Music, Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pinky-100 via-pinky-50 to-white flex items-center pt-20">

      {/* Background Pattern (Polka Dots) */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(#fb7185 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-24 left-10 text-yellow-400 animate-bounce-slow">
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-20 text-lilac-500 animate-float" style={{ animationDelay: '1s' }}>
        <Music size={32} />
      </div>
      <div className="absolute top-40 right-10 text-pinky-400 animate-pulse">
        <Heart size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 right-20 text-sun animate-spin-slow" style={{ animationDuration: '10s' }}>
        <Sparkles size={36} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-sm mb-6 animate-fade-in-up">
            <span className="text-2xl">✨</span>
            <span className="text-pinky-500 font-bold uppercase tracking-wider text-sm md:text-base">Atriz Mirim & Bailarina</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-pinky-500 mb-2 leading-none text-shadow-sm animate-fade-in-up">
            Malu
          </h1>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-yellow-400 mb-6 leading-none text-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Miranda
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 font-bold max-w-lg mx-auto md:mx-0 leading-relaxed mb-8 font-sans">
            Espalhando magia, sorrisos e muita arte pelos palcos do mundo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#teatro" className="bg-pinky-500 hover:bg-pinky-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-pinky-300/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <PlayIcon /> Ver Portfólio
            </a>
            <a href="#contato" className="bg-white hover:bg-pinky-50 text-pinky-500 border-2 border-pinky-200 px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative order-1 md:order-2 flex justify-center animate-float">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            {/* Blobs Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-lilac-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-full h-full bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-full h-full bg-pinky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Main Image Masked */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/malu-bg1.png"
                alt="Malu Miranda Sorrindo"
                className="w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
              />
              {/* Sticker */}
              <div className="absolute bottom-4 right-4 bg-yellow-400 text-white font-display font-bold px-4 py-2 rounded-lg transform rotate-6 shadow-lg">
                9 Anos!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none text-pinky-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

// Simple internal icon component for the button
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
);
