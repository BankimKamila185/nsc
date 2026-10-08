import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { Search, Image as ImageIcon, Share2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const categories = [
    'All',
    'Durga Puja 2026',
    'Maha Sasthi',
    'Maha Astami',
    'Sindhur Khela',
    'Bisarjan',
    'Lakshmi Puja',
    'Community Activities',
    'Cultural Programs'
  ];

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredPhotos = gallery.filter(photo => {
    const matchesCategory = selectedCategory === 'All' || photo.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      photo.title.toLowerCase().includes(query) ||
      photo.caption.toLowerCase().includes(query) ||
      photo.category.toLowerCase().includes(query) ||
      photo.tags.some(t => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-3 sm:px-6 lg:px-8 max-w-[1600px] mx-auto space-y-6 sm:space-y-8 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="PHOTO GALLERY"
        titleBn="উৎসব ও স্মৃতি চিত্রশালা"
        title="DURGA PUJA & CELEBRATIONS GALLERY"
        subtitle="Experience our visual collection of sacred moments, rituals, and festive devotion."
      />

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full border border-[#E8E2D8] shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto scrollbar-thin">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All' ? gallery.length : gallery.filter(p => p.category === cat).length;
            if (count === 0 && cat !== 'All') return null;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-[#E9E9E9] text-[#111111] hover:bg-[#D9D9D9]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#767676]" />
          <input
            type="text"
            placeholder="Search photos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-full bg-[#E9E9E9] border border-transparent focus:border-[#111111] focus:bg-white text-xs text-[#111111] focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Pure Image Pinterest Masonry Waterfall */}
      {filteredPhotos.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-[#E8E2D8] text-[#57534E]">
          <ImageIcon size={44} className="mx-auto text-[#8C827A] mb-3 opacity-50" />
          <p className="font-bold text-base text-[#1C1917]">No photos found</p>
          <p className="text-xs text-[#8C827A] mt-1">Try selecting another category or clearing the search box.</p>
        </div>
      ) : (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3.5 sm:gap-4 [column-fill:_balance]">
          {filteredPhotos.map((photo, index) => {
            const isSaved = savedIds.has(photo.id);
            const aspectRatios = [
              'aspect-[3/4]',
              'aspect-[2/3]',
              'aspect-[4/3]',
              'aspect-[9/14]',
              'aspect-square',
              'aspect-[3/5]',
              'aspect-[4/5]',
              'aspect-[3/4]',
              'aspect-[2/3]',
              'aspect-[4/3]',
              'aspect-[9/14]',
              'aspect-square'
            ];
            const aspectClass = aspectRatios[index % aspectRatios.length];

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid mb-3.5 sm:mb-4 group cursor-pointer"
              >
                {/* Pure Image Card with Staggered Aspect Ratio */}
                <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E9E9E9] shadow-xs hover:shadow-xl transition-all duration-300 select-none ${aspectClass}`}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-95 transition-all duration-300 ease-out"
                  />

                  {/* Pinterest Hover Overlay: Save Button and Share */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                    <div className="flex justify-end">
                      <button
                        onClick={e => toggleSave(e, photo.id)}
                        className={`px-3.5 py-1.5 rounded-full font-bold text-xs tracking-tight shadow-md transition-all active:scale-95 cursor-pointer ${
                          isSaved
                            ? 'bg-black text-white'
                            : 'bg-[#E60023] hover:bg-[#AD081B] text-white'
                        }`}
                      >
                        {isSaved ? 'Saved' : 'Save'}
                      </button>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          if (navigator.share) {
                            navigator.share({ title: photo.title, url: window.location.href });
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer"
                        title="Share"
                      >
                        <Share2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal for Full View */}
      {lightboxIndex !== null && (
        <LightboxModal
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(prev => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1))}
          onNext={() => setLightboxIndex(prev => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0))}
        />
      )}
    </div>
  );
};
