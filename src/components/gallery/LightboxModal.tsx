import React, { useEffect } from 'react';
import { GalleryPhoto } from '../../types';
import { X, ChevronLeft, ChevronRight, Tag, Calendar, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  const photo = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#3A080D]/80 text-[#FFF1D2] hover:text-white hover:bg-[#7A1018] border border-[#D69B32] transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X size={22} />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3A080D]/80 text-[#FFF1D2] hover:text-[#F3C969] hover:bg-[#7A1018] border border-[#D69B32] transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3A080D]/80 text-[#FFF1D2] hover:text-[#F3C969] hover:bg-[#7A1018] border border-[#D69B32] transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight size={26} />
      </button>

      {/* Center Image Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#240407] rounded-2xl border-2 border-[#D69B32] overflow-hidden shadow-2xl">
        {/* Photo view */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Metadata Footer */}
        <div className="p-4 sm:p-6 bg-[#3A080D] border-t border-[#D69B32]/40 text-[#FFF1D2]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-xs uppercase font-bold text-[#F3C969] tracking-wider bg-[#7A1018] px-2.5 py-0.5 rounded border border-[#D69B32]/40 inline-block mb-1">
                {photo.category} ({photo.year})
              </span>
              <h3 className="font-serif-royal font-bold text-base sm:text-xl text-white">
                {photo.title}
              </h3>
            </div>
            <span className="text-xs text-[#FFF1D2]/70">
              {currentIndex + 1} of {photos.length}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#FFF1D2]/85 font-light leading-relaxed mb-3">
            {photo.caption}
          </p>

          {photo.tags && photo.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#D69B32]/20">
              <Tag size={12} className="text-[#D69B32]" />
              {photo.tags.map((tag, i) => (
                <span key={i} className="text-[11px] bg-[#240407] text-[#D69B32] px-2 py-0.5 rounded border border-[#D69B32]/30">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
