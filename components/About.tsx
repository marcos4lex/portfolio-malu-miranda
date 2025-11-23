import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="sobre" className="py-20 md:py-32 bg-pinky-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-lilac-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pinky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Image with Blob Shape */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-yellow-300 rounded-[2rem] -rotate-3 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-lilac-300 rounded-[2rem] rotate-3 z-0"></div>
              <img
                src="/Book/book-img3.JPEG"
                alt="Malu Miranda Portrait"
                className="relative z-10 w-80 md:w-96 h-auto rounded-[2rem] border-4 border-white shadow-xl object-cover aspect-[3/4] transform hover:rotate-2 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-6 leading-tight">
              Olá! Eu sou a <br /> <span className="text-pinky-500">Malu!</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-medium font-sans">
              <p>
                Tenho 9 aninhos e um mundo inteiro de sonhos! Adoro me transformar em personagens diferentes, dançar até cansar e contar histórias que fazem as pessoas sorrirem.
              </p>
              <p>
                Comecei no ballet bem pequenininha, aos 3 anos, e logo descobri que o palco é o meu lugar favorito no mundo. Seja cantando, sapateando ou atuando, eu coloco todo o meu <span className="text-pinky-500 font-bold">♥</span> em tudo o que faço!
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              {['🎭 Teatro Musical', '🎬 Cinema & TV', '🩰 Ballet', '👞 Sapateado'].map((skill) => (
                <span key={skill} className="bg-white border-2 border-pinky-100 text-pinky-500 px-4 py-2 rounded-full font-bold shadow-sm hover:bg-pinky-500 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};