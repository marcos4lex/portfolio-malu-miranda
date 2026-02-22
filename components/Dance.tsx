import React from 'react';
import { SectionTitle } from './SectionTitle';
import { VideoCard } from './VideoCard';
import { DANCE_VIDEOS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Dance: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="danca" className="py-20 md:py-32 bg-lilac-100 rounded-t-[3rem] -mt-10 relative z-30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="Dança & Ritmo"
          subtitle="Me movimentando com muita alegria!"
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {DANCE_VIDEOS.map((video) => (
            <div key={video.id} className="bg-white p-6 rounded-3xl shadow-lg transform hover:-rotate-1 transition-transform mx-auto w-full md:w-[68%] flex flex-col">
              <div className="mb-6 -mt-12 mx-auto w-full">
                <VideoCard
                  title={video.title}
                  imageId={video.videoPlaceholderId}
                  subtitle={video.category}
                  videoSrc={video.videoSrc}
                  thumbnailSrc={video.thumbnailSrc}
                  aspectRatio="aspect-[10/14]"
                />
              </div>
              <p className="mt-auto text-center text-gray-500 font-bold text-lg">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};