import React from 'react';
import { SectionTitle } from './SectionTitle';
import { VideoCard } from './VideoCard';
import { THEATRE_CREDITS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Theatre: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="teatro" className="py-20 md:py-32 bg-white rounded-t-[3rem] -mt-10 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="No Palco"
          subtitle="Minhas aventuras no teatro musical!"
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {THEATRE_CREDITS.map((play) => (
            <div key={play.id} className="flex flex-col group bg-pinky-50 rounded-3xl p-6 border-2 border-transparent hover:border-pinky-200 transition-colors">
              <div className="mb-6 -mt-12 mx-auto w-full">
                <VideoCard
                  title={play.title}
                  imageId={play.videoPlaceholderId}
                  subtitle={play.year}
                  videoSrc={play.videoSrc}
                  thumbnailSrc={play.thumbnailSrc}
                  aspectRatio="aspect-[4/5]"
                />
              </div>

              <div className="text-center">
                <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-bold text-lilac-500 mb-2 shadow-sm">
                  {play.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">
                  {play.details || `Uma experiência mágica!`}
                </p>
                <p className="text-xs uppercase tracking-widest text-pinky-400 font-bold">
                  Dir. {play.director}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};