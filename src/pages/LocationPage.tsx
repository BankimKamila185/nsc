import React from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { MapPin, Navigation, Train, ExternalLink, Compass } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { siteSettings } = useData();

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Room No. 6, Ganesh Niwas Mitra Mandal, Anand Wadi, Near BMC Playground, Kurar Village, Malad East, Mumbai 400097'
  )}`;

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="FIND OUR MANDAP"
        titleBn="আমাদের পূজা মণ্ডপের অবস্থান ও যোগাযোগ"
        title="LOCATION & HOW TO REACH"
        subtitle="Visit Netaji Subhas Chandra Welfare Sangha in Kurar Village, Malad East, Mumbai."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Address & Transit */}
        <div className="lg:col-span-5 space-y-6">
          <div className="clean-card p-6 sm:p-8 bg-white space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#7A121D] flex items-center justify-center font-bold border border-[#E8E2D8]">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A121D] block">
                  VENUE ADDRESS
                </span>
                <h3 className="font-serif-clean font-bold text-base text-[#1C1917]">
                  {siteSettings.orgName}
                </h3>
              </div>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p className="font-semibold text-[#1C1917]">{siteSettings.addressRoom}, {siteSettings.addressBuilding}</p>
              <p>{siteSettings.addressArea},</p>
              <p>{siteSettings.addressCity} – {siteSettings.addressPincode}</p>
              <p>{siteSettings.addressState}, India</p>
            </div>

            <div className="pt-2">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={13} />
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Transit Guide */}
          <div className="clean-card p-6 bg-white space-y-3">
            <h4 className="font-serif-clean font-bold text-sm text-[#1C1917] uppercase flex items-center gap-2">
              <Train size={15} className="text-[#7A121D]" />
              Transit & Commute
            </h4>

            <ul className="space-y-2.5 text-xs text-[#57534E]">
              <li>
                <strong className="text-[#1C1917]">By Local Train:</strong> Malad Railway Station (Western Line). Auto-rickshaw towards Kurar Village (approx. 10–15 mins).
              </li>
              <li>
                <strong className="text-[#1C1917]">By Mumbai Metro:</strong> Kurar Metro Station (Red Line 7) on Western Express Highway.
              </li>
              <li>
                <strong className="text-[#1C1917]">By Road:</strong> Western Express Highway Malad East exit into Kurar Village main road.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Embedded Map */}
        <div className="lg:col-span-7">
          <div className="clean-card overflow-hidden bg-white border border-[#E8E2D8] shadow-sm flex flex-col min-h-[440px]">
            <div className="p-3.5 border-b border-[#E8E2D8] bg-[#F6F4EE] flex items-center justify-between text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <Compass size={14} className="text-[#7A121D]" />
                <span className="font-semibold text-[#1C1917]">Kurar Village Interactive Map</span>
              </div>
              <span>PIN: 400097</span>
            </div>

            <div className="flex-1 w-full min-h-[380px] relative">
              <iframe
                title="NSCWS Malad East Map"
                src="https://maps.google.com/maps?q=Kurar%20Village,%20Malad%20East,%20Mumbai%20400097&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
