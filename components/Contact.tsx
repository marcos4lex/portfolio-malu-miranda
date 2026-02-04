import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, Instagram, Youtube } from 'lucide-react';

const Whatsapp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.001 2C6.478 2 2.001 6.477 2.001 12c0 1.82.497 3.539 1.366 5.03L2.001 22l5.122-1.326c1.432.793 3.076 1.226 4.878 1.226 5.522 0 10-4.477 10-10S17.523 2 12.001 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8c-1.722 0-3.324-.523-4.664-1.424l-.316-.212-2.784.721.737-2.736-.226-.337A7.95 7.95 0 0 1 4.001 12c0-4.418 3.582-8 8-8zm4.496 10.384c-.218-.11-1.294-.645-1.493-.718-.2-.073-.346-.11-.492.11-.146.219-.564.71-.691.855-.127.146-.255.164-.473.055-.218-.11-.921-.34-1.754-1.084-.65-.58-1.087-1.297-1.215-1.516-.127-.219-.014-.337.095-.446.098-.098.218-.255.327-.382.11-.127.146-.218.219-.364.073-.146.036-.273-.018-.382-.055-.11-.492-1.183-.674-1.62-.176-.423-.356-.365-.492-.372-.127-.008-.273-.008-.418-.008-.146 0-.382.055-.582.273-.2.219-.764.746-.764 1.82 0 1.074.782 2.111.891 2.257.11.146 1.538 2.348 3.727 3.294.521.226.927.361 1.242.461.517.164.988.141 1.36.086.413-.061 1.294-.528 1.477-1.037.182-.51.182-.946.127-1.037-.055-.091-.2-.146-.418-.255z" />
  </svg>
);

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
                <div className="flex gap-4 pt-4">
                  <a href="mailto:amalu.2905@gmail.com" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Mail size={24} />
                  </a>
                  <a href="https://www.instagram.com/malu.miranda" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Instagram />
                  </a>
                  <a href="https://www.youtube.com/@amalu.miranda" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Youtube />
                  </a>
                  <a href="https://wa.me/+5521981810505" target="_blank" className="w-12 h-12 bg-pinky-100 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110">
                    <Whatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full md:w-2/3">
              <form className="space-y-4" action="https://formsubmit.co/amalu.2905@gmail.com" method="POST">
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nova mensagem do portfólio - Malu Miranda" />
                <input type="hidden" name="_next" value="https://malu-miranda-portfolio.vercel.app/#contato" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400"
                      placeholder="Seu Nome"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400"
                      placeholder="Seu E-mail"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-pinky-50 border-2 border-transparent focus:border-pinky-300 rounded-2xl px-6 py-4 text-gray-700 font-bold focus:outline-none transition-colors placeholder-gray-400 resize-none"
                    placeholder="Sua Mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
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