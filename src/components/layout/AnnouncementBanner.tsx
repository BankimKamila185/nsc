import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Megaphone, X, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onNavigate: (route: string) => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onNavigate }) => {
  const { announcements } = useData();
  const [dismissed, setDismissed] = useState(false);

  const activeAnnouncements = announcements.filter(a => a.isActive);
  if (activeAnnouncements.length === 0 || dismissed) return null;

  const current = activeAnnouncements[0];

  return (
    <div className="bg-[#1C1917] text-[#FCFBF9] text-xs py-2 px-4 sticky top-0 z-50 border-b border-[#2D0D12]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden flex-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DFC798] shrink-0 animate-ping" />
          <span className="font-semibold text-[#DFC798] shrink-0 uppercase tracking-wider text-[10px]">
            {current.isUrgent ? 'Notice:' : 'Update:'}
          </span>
          <p className="truncate text-[#E8E2D8] font-normal">
            {current.title} — <span className="text-[#8C827A]">{current.content}</span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {current.actionLink && (
            <button
              onClick={() => onNavigate(current.actionLink || '/schedule')}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#DFC798] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              <span>{current.actionText || 'Details'}</span>
              <ArrowRight size={11} />
            </button>
          )}

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 hover:bg-[#2A0A0F] rounded text-[#8C827A] hover:text-white transition-colors cursor-pointer"
          >
            <X size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
