import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  subtitle?: string;
  imageId: number;
  aspectRatio?: 'video' | 'square' | string;
  videoSrc?: string;
  thumbnailSrc?: string;
  objectPosition?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, subtitle, imageId, aspectRatio = 'video', videoSrc, thumbnailSrc, objectPosition }) => {
  const aspectRatioClass = aspectRatio === 'video' ? 'aspect-video' : aspectRatio === 'square' ? 'aspect-[4/5]' : aspectRatio;

  return (
    <div className="group relative cursor-pointer block transform hover:-translate-y-2 transition-transform duration-300">
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden rounded-3xl shadow-xl shadow-pinky-200 border-4 border-white`}>
        {videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            style={objectPosition ? { objectPosition } : undefined}
            controls
            poster={thumbnailSrc || `https://picsum.photos/800/450?random=${imageId}`}
          />
        ) : (
          <>
            <img
              src={thumbnailSrc || `https://picsum.photos/800/450?random=${imageId}`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              style={objectPosition ? { objectPosition } : undefined}
            />
            <div className="absolute inset-0 bg-pinky-500/0 group-hover:bg-pinky-500/20 transition-colors duration-300"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-pinky-500 shadow-lg flex items-center justify-center pl-1 transform scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                <Play size={28} fill="currentColor" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 text-center px-2">
        <h3 className="text-2xl font-display font-bold text-gray-700 group-hover:text-pinky-500 transition-colors duration-300 leading-tight">{title}</h3>
        {subtitle && (
          <span className="inline-block mt-2 px-3 py-1 bg-pinky-100 text-pinky-600 text-xs font-bold uppercase rounded-full tracking-wide">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};