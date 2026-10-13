import React, { useState } from 'react';
import { SectionHeading } from '../decorative/SectionHeading';
import { ChevronDown, MapPin, Calendar, Clock, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  questionBn?: string;
  answer: string;
  category: 'location' | 'schedule' | 'rituals' | 'visitor';
}

const FAQS: FaqItem[] = [
  {
    id: 'famous-malad-puja',
    category: 'visitor',
    question: 'Which is the most famous Malad Durga Puja to visit in Mumbai?',
    questionBn: 'মুম্বাইয়ের মালাডের সবচেয়ে বিখ্যাত ও প্রাচীন দুর্গাপূজা কোনটি?',
    answer: 'Netaji Subhas Chandra Welfare Sangha (NSCWS) is widely celebrated as one of the premier and most famous Malad Durga Pujas in Mumbai. Celebrating its landmark 20th consecutive year in 2026, NSCWS is renowned for its aristocratic Ekchala Daaker Saaj idol, strict Vedic ritual sanctity, warm Bengali community hospitality, and daily free Maha Bhandara bhog distribution in Kurar Village, Malad East.'
  },
  {
    id: 'location',
    category: 'location',
    question: 'Where is NSCWS (Netaji Subhas Chandra Welfare Sangha) Malad Durga Puja located?',
    questionBn: 'এনএসসিডব্লিউএস (NSCWS) মালাড দুর্গাপূজার ঠিকানা ও লোকেশন কোথায়?',
    answer: 'The NSCWS Malad Durga Puja mandap is situated at Anand Wadi Durga Puja Mandap Ground, Ganesh Niwas Mitra Mandal, Near B.M.C. Playground, Kurar Village, Malad East, Mumbai - 400097, Maharashtra. It is easily reachable within 10 minutes from Malad Railway Station (East) and right off the Western Express Highway (WEH Kurar Village exit).'
  },
  {
    id: 'dates-2026',
    category: 'schedule',
    question: 'What are the official dates for the 20th Malad Durga Puja 2026 by NSCWS?',
    questionBn: '২০তম মালাড শারদোৎসব ২০২৬ এর সঠিক নির্ঘণ্ট ও তারিখ কি?',
    answer: 'The landmark 20th year Sarbojanin Malad Durga Puja by NSCWS spans from Maha Panchami (Thursday, October 15, 2026) through Bijoya Dashami & Sindoor Khela (Tuesday, October 20, 2026), followed by the auspicious Kojagari Lakshmi Puja on Saturday, October 24, 2026.'
  },
  {
    id: 'timings',
    category: 'schedule',
    question: 'What are the Pushpanjali and Bhog distribution timings for Malad Durga Puja 2026?',
    questionBn: 'মালাড দুর্গাপূজায় পুষ্পাঞ্জলি এবং মহাপ্রসাদ বিতরণের সময়সূচী কি?',
    answer: 'At NSCWS Malad Durga Puja, morning Vedic Puja begins at 8:30 AM daily. Pushpanjali is conducted in orderly batches from 10:30 AM to 12:30 PM (with extended batches on Maha Ashtami). Daily evening Sandhya Aarti starts at 7:00 PM with dhak beats and dhunuchi naach. Free Maha Bhandara Anna Bhog prasad is lovingly served daily from 1:30 PM onwards to all devotees.'
  },
  {
    id: 'entry-free',
    category: 'visitor',
    question: 'Is entry free for Malad Durga Puja darshan, and are VIP passes needed?',
    questionBn: 'মালাড দুর্গাপূজা দর্শনে প্রবেশ কি সম্পূর্ণ বিনামূল্যে?',
    answer: 'Yes! Entry to the NSCWS Malad Durga Puja mandap, pratima darshan, morning Pushpanjali, and afternoon Maha Bhandara bhog prasad are 100% free and open to everyone regardless of background or community. No VIP pass or paid ticket is required.'
  },
  {
    id: 'sandhi-puja',
    category: 'rituals',
    question: 'When is Sandhi Puja performed at NSCWS Malad Durga Puja?',
    questionBn: 'সন্ধিপূজা কখন অনুষ্ঠিত হয় এবং এর বিশেষত্ব কি?',
    answer: 'Sandhi Puja marks the sacred transition between Maha Ashtami and Maha Nabami. At NSCWS Malad Durga Puja, Vedic priests illuminate 108 auspicious clay lamps (pradips) accompanied by 108 fresh blue lotus offerings, continuous conch blowing (shankhadhwani), and traditional Bengali dhak beats.'
  },
  {
    id: 'pratima-style',
    category: 'rituals',
    question: 'What makes the NSCWS Malad Durga Puja idol (pratima) unique in Mumbai?',
    questionBn: 'আমাদের প্রতিমার ঐতিহ্যবাহী ডাকের সাজের বিশেষত্ব কি?',
    answer: 'The NSCWS pratima is sculpted in the authentic, aristocratic Bengali "Ekchala Daaker Saaj" tradition. Crafted from sacred clay and adorned with shimmering silver-foiled shola (pith) ornaments, Maa Durga slays Mahishasura in a single unified divine frame alongside Lakshmi, Saraswati, Kartik, and Ganesha.'
  },
  {
    id: 'how-to-reach',
    category: 'location',
    question: 'How do I reach the Malad Durga Puja mandap from Malad Station or Highway?',
    questionBn: 'মালাড স্টেশন ও হাইওয়ে থেকে কিভাবে পৌঁছাবেন?',
    answer: 'From Malad Station East, take an auto-rickshaw or BEST bus (route 345/347) towards Kurar Village Anand Wadi (10–12 minutes). If driving via the Western Express Highway, take the Kurar Village flyover turn into Malad East; parking and signage are arranged near the BMC Playground.'
  },
  {
    id: 'community-welfare',
    category: 'visitor',
    question: 'What welfare initiatives does NSCWS organize throughout the year in Malad?',
    questionBn: 'এনএসসিডব্লিউএস সারা বছর কি কি সামাজিক ও সাংস্কৃতিক কাজ পরিচালনা করে?',
    answer: 'Established in 2007, Netaji Subhas Chandra Welfare Sangha (NSCWS) actively conducts regular blood donation camps, educational book distribution for underprivileged students, medical checkups, traditional Anandamela food contests, Dhunuchi Naach events, and festive cloth distribution in Malad East and Mumbai.'
  }
];

export const SeoFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('famous-malad-puja');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-guide" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      <SectionHeading
        badge="NSCWS • Malad Durga Puja 2026 Guide"
        title="Frequently Asked Questions"
        titleBn="মালাড দুর্গাপূজা ও প্রয়োজনীয় তথ্য"
        subtitle="Complete visitor guide to Netaji Subhas Chandra Welfare Sangha (NSCWS) - 20th Sarbojanin Malad Durga Puja 2026, Pushpanjali timetable, Maha Bhandara bhog prasad, and mandap directions in Kurar Village, Malad East, Mumbai."
        align="center"
      />

      {/* Accordion Container */}
      <div className="space-y-3.5">
        {FAQS.map(item => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white border-[#7A121D]/30 shadow-md ring-1 ring-[#7A121D]/15'
                  : 'bg-white/80 hover:bg-white border-[#E8E2D8] shadow-xs'
              }`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="space-y-1 pr-2">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                    {item.question}
                  </h3>
                  {item.questionBn && (
                    <p className="font-serif-bengali text-xs sm:text-sm text-[#7A121D] font-medium">
                      {item.questionBn}
                    </p>
                  )}
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#7A121D] text-white' : 'bg-[#F6F4EE] text-neutral-600'
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-neutral-100 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Rich Keyword Index Ribbon (Search Engine Authority Signal) */}
      <div className="mt-12 p-6 rounded-2xl bg-[#F6F4EE]/80 border border-[#E8E2D8] text-center space-y-3">
        <div className="text-[11px] font-bold tracking-[0.2em] text-[#7A121D] uppercase">
          Official Malad Durga Puja & NSCWS Keyword Index
        </div>
        <p className="text-xs text-neutral-600 max-w-4xl mx-auto leading-relaxed font-normal">
          <strong className="font-semibold text-neutral-900">NSCWS</strong> • <strong className="font-semibold text-neutral-900">nscws</strong> • NSCWS Mumbai • NSCWS Malad • NSCWS Malad East • <strong className="font-semibold text-neutral-900">Malad Durga Puja</strong> • <strong className="font-semibold text-neutral-900">Malad East Durga Puja</strong> • Malad West Durga Puja • Durga Puja in Malad • Durga Puja in Malad East • Durga Puja near Malad Station • Best Durga Puja in Malad • Famous Durga Puja in Malad • Top Malad Durga Puja 2026 • Kurar Village Malad Durga Puja • Anand Wadi Malad Durga Puja Ground • Ganesh Niwas Mitra Mandal • Netaji Subhas Chandra Welfare Sangha • 20th Sarbojanin Durga Puja 2026 Mumbai • Ekchala Daaker Saaj Pratima Malad • Maha Ashtami 108 Pradip Sandhi Puja • Maha Bhandara Free Anna Bhog Prasad • Malad Pushpanjali Timetable 2026 • Sindoor Khela & Dhunuchi Naach Malad • Kojagari Lakshmi Puja Malad 2026 • Western Suburbs Mumbai Bengali Club • Estd. 2007
        </p>
      </div>
    </section>
  );
};
