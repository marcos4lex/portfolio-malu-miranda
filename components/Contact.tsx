import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, Instagram, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-pinky-400 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Fale Comigo"
          subtitle="Quer me chamar para um teste ou projeto?"
          light
        />

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-pinky-900/20">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Info */}
            <div className="w-full md:w-1/3 text-gray-600">
              <h3 className="text-2xl font-display font-bold text-pinky-500 mb-4">Contato</h3>
              <p className="mb-8 font-medium">
                Fale com a minha equipe para agendamentos e oportunidades!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 group-hover:bg-pinky-500 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold text-sm">contato@malumiranda.com.br</span>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="https://www.instagram.com/malu.miranda" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Instagram />
                  </a>
                  <a href="https://www.youtube.com/@amalu.miranda" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Youtube />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full md:w-2/3">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400"
                      placeholder="Seu Nome"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400"
                      placeholder="Seu E-mail"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400 resize-none"
                    placeholder="Sua Mensagem..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-pinky-500 hover:bg-pinky-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg uppercase tracking-wide"
                >
                  Enviar Mensagem 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};