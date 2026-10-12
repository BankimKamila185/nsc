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
    id: 'location',
    category: 'location',
    question: 'Where is Netaji Subhas Chandra Welfare Sangha Durga Puja located in Mumbai?',
    questionBn: 'নেতাজী সুভাষ চন্দ্র ওয়েলফেয়ার সংঘের দুর্গাপূজার ঠিকানা কোথায়?',
    answer: 'The puja mandap is situated at Anand Wadi Durga Puja Mandap Ground, Ganesh Niwas Mitra Mandal, Near B.M.C. Playground, Kurar Village, Malad East, Mumbai - 400097, Maharashtra. It is easily reachable within 10 minutes from Malad Railway Station (East) and right off the Western Express Highway (WEH Kurar exit).'
  },
  {
    id: 'dates-2026',
    category: 'schedule',
    question: 'What are the dates for the 20th landmark Durga Puja 2026?',
    questionBn: '২০তম শারদোৎসব ২০২৬ এর সঠিক নির্ঘণ্ট ও তারিখ কি?',
    answer: 'The landmark 20th year Sarbojanin Durga Puja celebration spans from Maha Panchami (Thursday, October 15, 2026) through Bijoya Dashami (Tuesday, October 20, 2026), culminating in sacred Kojagari Lakshmi Puja on Saturday, October 24, 2026.'
  },
  {
    id: 'entry-free',
    category: 'visitor',
    question: 'Is entry free, and do devotees need any VIP passes for Darshan or Pushpanjali?',
    questionBn: 'দর্শনার্থীদের জন্য প্রবেশ কি সম্পূর্ণ বিনামূল্যে?',
    answer: 'Yes! Entry to the mandap, idol darshan, morning Pushpanjali, and afternoon Maha Bhandara bhog prasad are 100% free and open to everyone regardless of community or background. No passes or paid tickets are required.'
  },
  {
    id: 'timings',
    category: 'schedule',
    question: 'What are the official daily Pushpanjali, Aarti, and Bhog distribution timings?',
    questionBn: 'দৈনিক অঞ্জলি, আরতি এবং মহাপ্রসাদ বিতরণের সময়সূচী কি?',
    answer: 'Morning Vedic Puja commences at 8:30 AM daily. Pushpanjali is conducted in orderly batches from 10:30 AM to 12:30 PM (with extended batches on Maha Ashtami). Daily Sandhya Aarti begins at 7:00 PM, followed by evening cultural celebrations. Maha Bhandara Anna Bhog is served daily from 1:30 PM onwards.'
  },
  {
    id: 'sandhi-puja',
    category: 'rituals',
    question: 'When is the sacred Sandhi Puja performed, and what makes it special?',
    questionBn: 'সন্ধিপূজা কখন অনুষ্ঠিত হয় এবং এর বৈশিষ্ট্য কি?',
    answer: 'Sandhi Puja marks the exact sacred transition between Maha Ashtami and Maha Nabami. At Netaji Subhas Chandra Welfare Sangha, our Vedic priests light 108 auspicious earthen lamps (pradips) accompanied by 108 fresh blue lotus offerings, continuous conch blowing (shankhadhwani), and traditional Bengali dhak beats.'
  },
  {
    id: 'pratima-style',
    category: 'rituals',
    question: 'What makes the Netaji Subhas Chandra Welfare Sangha Durga Idol unique?',
    questionBn: 'আমাদের প্রতিমার বিশেষত্ব ও ঐতিহ্য কি?',
    answer: 'Our idol is fashioned in the aristocratic, centuries-old Bengali "Ekchala Daaker Saaj" tradition. Crafted from pure Ganges clay and adorned with shimmering silver-foiled shola (pith) ornaments, the pratima depicts Maa Durga slaying Mahishasura flanked by Lakshmi, Saraswati, Kartik, and Ganesha in unified divine harmony.'
  },
  {
    id: 'how-to-reach',
    category: 'location',
    question: 'How do I reach Anand Wadi mandap from Malad Station or the Western Express Highway?',
    questionBn: 'মালাড স্টেশন ও হাইওয়ে থেকে কিভাবে পৌঁছাবেন?',
    answer: 'From Malad Station East, take an auto-rickshaw or BEST bus (route 345/347) towards Kurar Village Anand Wadi (10–12 minutes). If coming by car via the Western Express Highway, take the Kurar Village flyover turn into Malad East; parking and signage are arranged near the BMC Playground.'
  },
  {
    id: 'community-welfare',
    category: 'visitor',
    question: 'What cultural and welfare activities does the Sangha organize throughout the year?',
    questionBn: 'সংঘ আর কি কি সামাজিক ও সাংস্কৃতিক কার্যক্রম পরিচালনা করে?',
    answer: 'Established in 2007, Netaji Subhas Chandra Welfare Sangha organizes regular blood donation drives, educational textbook aid for underprivileged children, medical camps, traditional Anandamela food competitions, Dhunuchi Naach contests, and festive clothes distribution alongside the annual Durga and Lakshmi Puja festivities.'
  }
];

export const SeoFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('location');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq-guide" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      <SectionHeading
        badge="Visitor & Devotee Guide"
        title="Frequently Asked Questions"
        titleBn="প্রয়োজনীয় তথ্য ও প্রশ্নোত্তর"
        subtitle="Complete guide to Netaji Subhas Chandra Welfare Sangha's 20th Sarbojanin Durga Puja 2026, Pushpanjali timetable, Bhog prasad, and mandap location in Kurar Village, Malad East, Mumbai."
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
          Official Festival Topics & Keyword Index
        </div>
        <p className="text-xs text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          Netaji Subhas Chandra Welfare Sangha • 20th Sarbojanin Durga Puja 2026 Mumbai • Anand Wadi Puja Mandap Ground • Kurar Village Malad East 400097 • Ekchala Daaker Saaj Pratima • Maha Ashtami 108 Pradip Sandhi Puja • Maha Bhandara Free Anna Bhog Prasad • Pushpanjali Timetable 2026 • Sindoor Khela & Dhunuchi Naach • Kojagari Lakshmi Puja Malad • Western Suburbs Mumbai Bengali Club • Estd. 2007
        </p>
      </div>
    </section>
  );
};
