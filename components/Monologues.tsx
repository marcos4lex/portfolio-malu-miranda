import React from 'react';
import { SectionTitle } from './SectionTitle';
import { VideoCard } from './VideoCard';
import { MONOLOGUES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Monologues: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="monologos" className="py-20 md:py-32 bg-white rounded-t-[3rem] -mt-10 relative z-40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="Luz, Câmera, Ação!"
          subtitle="Monólogos e cenas para TV e Cinema."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {MONOLOGUES.map((video) => (
            <div key={video.id} className="bg-pinky-50 p-4 rounded-[2rem] border-2 border-pinky-100 hover:border-pinky-300 transition-colors">
              <VideoCard
                title={video.title}
                imageId={video.videoPlaceholderId}
                aspectRatio="square"
                videoSrc={video.videoSrc}
                thumbnailSrc={video.thumbnailSrc}
                objectPosition={video.objectPosition}
              />
              <div className="mt-4 text-center">
                <span className="text-pinky-500 font-display font-bold text-lg block">{video.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};