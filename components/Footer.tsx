import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pinky-50 text-gray-500 py-10 border-t border-pinky-100">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-display font-bold text-pinky-400 mb-4 flex items-center gap-2">
            Malu Miranda <Heart size={16} className="fill-current" />
        </h2>
        <div className="flex gap-6 mb-6 font-bold text-sm">
          <a href="#home" className="hover:text-pinky-500 transition-colors">Home</a>
          <a href="#sobre" className="hover:text-pinky-500 transition-colors">Sobre</a>
          <a href="#galeria" className="hover:text-pinky-500 transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-pinky-500 transition-colors">Contato</a>
        </div>
        <p className="text-xs font-semibold opacity-60">
          Feito com muito carinho! &copy; {new Date().getFullYear()} Malu Miranda.
        </p>
      </div>
    </footer>
  );
};