import React from 'react';
import { SectionTitle } from './SectionTitle';
import { GALLERY_IMAGES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Gallery: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="galeria" className="py-20 md:py-32 bg-pinky-50 border-t-4 border-dashed border-pinky-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Álbum de Fotos" subtitle="Um pouquinho dos meus momentos favoritos!" />

        <div 
          ref={ref}
          className={`columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {GALLERY_IMAGES.map((img, index) => (
            <div key={img.id} className="break-inside-avoid group relative p-3 bg-white shadow-lg rounded-xl rotate-1 hover:rotate-0 hover:z-10 transition-all duration-300 transform hover:scale-105">
              <div className="overflow-hidden rounded-lg">
                <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto"
                    loading="lazy"
                />
              </div>
              <div className="pt-4 pb-2 text-center">
                <span className="font-display text-gray-600 text-lg group-hover:text-pinky-500 transition-colors">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};