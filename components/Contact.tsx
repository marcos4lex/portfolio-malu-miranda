import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, Instagram, Youtube, MessageCircle, Heart, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappNumber = "+5521981810505"; // número do pai
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi o portfólio da Malu e gostaria de conversar.')}`;

  return (
    <section id="contato" className="py-20 md:py-32 bg-pinky-400 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <Heart size={60} className="fill-white text-white" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Heart size={40} className="fill-white text-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Fale Comigo"
          subtitle="Quer me chamar para um teste ou projeto?"
          light
        />

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-pinky-900/20 text-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Info Column */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block bg-pinky-100 text-pinky-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
                VAMOS CONVERSAR? ✨
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-pinky-500 mb-6">
                Mamãe e papai cuidam de tudo!
              </h3>
              <p className="text-lg mb-8 font-medium text-gray-500 leading-relaxed">
                Para convites de elenco, parcerias ou testes, entre em contato diretamente com os responsáveis pela Malu.
              </p>

              <div className="flex flex-row flex-wrap gap-4 mt-8 items-center md:items-start justify-center md:justify-start">
                <a
                  href="mailto:amalu.2905@gmail.com"
                  className="flex items-center gap-3 group hover:text-pinky-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-pinky-50 rounded-full flex items-center justify-center text-pinky-500 group-hover:bg-pinky-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                </a>
                <a
                  href="https://instagram.com/malu.miranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pinky-50 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                  title="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com/@amalu.miranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pinky-50 rounded-full flex items-center justify-center text-pinky-500 hover:bg-pinky-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                  title="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA Column */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                {/* Decorative background for the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative bg-white border-2 border-green-100 rounded-[2.5rem] p-8 text-center shadow-xl">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce-slow">
                    <WhatsAppIcon />
                  </div>

                  <h4 className="text-2xl font-display font-bold text-gray-800 mb-2">
                    WhatsApp Direto
                  </h4>
                  <p className="text-gray-500 font-medium mb-8">
                    Resposta rápida para produções e agências.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-1 transition-all duration-300 w-full justify-center text-lg"
                  >
                    <MessageCircle size={24} />
                    Chamar no WhatsApp
                    <ExternalLink size={16} className="opacity-50" />
                  </a>

                  <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Atendimento Imediato
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Custom WhatsApp Icon for better brand recognition
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
