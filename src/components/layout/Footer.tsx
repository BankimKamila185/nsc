import React from 'react';
import { MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../icons/SocialIcons';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120305] text-[#FCFBF9] border-t border-[#2D0A0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Grid: Brand, Quick Links, Venue & Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#25080C]">
          {/* Brand Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#DFC798]/60 shadow-md bg-[#7A121D] shrink-0">
                <img
                  src="/images/nsc-logo.jpg"
                  alt="Netaji Subhas Chandra Welfare Sangha Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-clean font-bold text-lg text-white tracking-tight">
                  Netaji Subhas Chandra Welfare Sangha
                </h3>
                <p className="text-xs font-semibold tracking-wider text-[#DFC798] uppercase mt-0.5">
                  ESTD. 2007 • Kurar Village, Malad East
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9E938B] leading-relaxed max-w-md">
              Celebrating 20 years of Sarbojanin Durga Puja, Kojagari Lakshmi Puja, and community service in Malad East, Mumbai.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/nscwelfare.sangha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22070A] hover:bg-[#340B10] text-[#D8C7B8] hover:text-white text-xs border border-[#3D0F15] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} className="text-[#DFC798]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/19chm2MKaR/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22070A] hover:bg-[#340B10] text-[#D8C7B8] hover:text-white text-xs border border-[#3D0F15] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={14} className="text-[#DFC798]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Essential Navigation (4 cols on lg: 2 sub-columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#DFC798] mb-3">
                Festivities
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'Home', route: '/' },
                  { name: 'Durga Puja 2026', route: '/durga-puja' },
                  { name: 'Puja Schedule', route: '/schedule' },
                  { name: 'Lakshmi Puja', route: '/lakshmi-puja' },
                  { name: 'Photo Gallery', route: '/gallery' },
                ].map(item => (
                  <li key={item.route}>
                    <button
                      onClick={() => handleNav(item.route)}
                      className="text-[#9E938B] hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#DFC798] mb-3">
                Our Sangha
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'About Us', route: '/about' },
                  { name: 'Our Journey', route: '/history' },
                  { name: 'Committee', route: '/committee' },
                  { name: 'Contact Us', route: '/contact' },
                ].map(item => (
                  <li key={item.route}>
                    <button
                      onClick={() => handleNav(item.route)}
                      className="text-[#9E938B] hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Venue & Location (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#DFC798]">
              Venue & Location
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#9E938B] leading-relaxed">
              <MapPin size={15} className="text-[#DFC798] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Anand Wadi, Kurar Village</p>
                <p>Near B.M.C. Playground,</p>
                <p>Malad (East), Mumbai – 400097</p>
              </div>
            </div>

            <button
              onClick={() => handleNav('/location')}
              className="inline-flex items-center gap-1.5 text-xs text-[#DFC798] hover:text-white hover:underline transition-colors cursor-pointer pt-1"
            >
              <span>Get Directions & Map</span>
              <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D736C]">
          <p>© {new Date().getFullYear()} Netaji Subhas Chandra Welfare Sangha. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px] text-[#DFC798]"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
