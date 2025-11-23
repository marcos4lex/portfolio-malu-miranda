import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16 px-4 relative">
      <div className="inline-flex items-center justify-center gap-3 relative">
        <h2 className={`text-4xl md:text-6xl font-display font-bold relative z-10 ${light ? 'text-white' : 'text-pinky-500'}`}>
          {title}
        </h2>
        {!light && <Sparkles className="text-yellow-400 absolute -right-8 -top-4 animate-bounce-slow" size={32} fill="currentColor" />}
      </div>
      
      {/* Playful Underline */}
      <div className="w-32 h-4 bg-yellow-300/50 rounded-full mx-auto -mt-4 relative z-0 transform -rotate-2"></div>

      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto font-semibold mt-6 ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};