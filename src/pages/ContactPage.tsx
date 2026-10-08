import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { SectionHeading } from '../components/decorative/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/icons/SocialIcons';

export const ContactPage: React.FC = () => {
  const { siteSettings, addContactMessage } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    purpose: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    addContactMessage({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      purpose: formData.purpose,
      message: formData.message
    });

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      purpose: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 bg-[#FCFBF9]">
      {/* Title */}
      <SectionHeading
        badge="GET IN TOUCH"
        titleBn="যোগাযোগ ও অনুসন্ধান"
        title="CONTACT OUR SANGHA"
        subtitle="Reach out for festival participation, Pushpanjali queries, cultural programs, or volunteer registration."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="clean-card p-6 sm:p-8 bg-white space-y-6">
            <h3 className="font-serif-clean font-bold text-lg text-[#1C1917] uppercase">
              Official Venue Details
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#57534E]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#7A121D] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1917]">{siteSettings.orgName}</p>
                  <p>{siteSettings.addressRoom}, {siteSettings.addressBuilding}</p>
                  <p>{siteSettings.addressArea}, {siteSettings.addressCity} – {siteSettings.addressPincode}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D8] space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A121D] block">
                Official Channels
              </span>

              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F6F4EE] hover:bg-[#E8E2D8] text-[#1C1917] transition-all text-xs"
              >
                <InstagramIcon size={16} className="text-[#7A121D]" />
                <span className="font-medium">{siteSettings.instagramHandle}</span>
              </a>

              <a
                href={siteSettings.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F6F4EE] hover:bg-[#E8E2D8] text-[#1C1917] transition-all text-xs"
              >
                <FacebookIcon size={16} className="text-[#7A121D]" />
                <span className="font-medium">{siteSettings.facebookName}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <div className="clean-card p-6 sm:p-8 bg-white">
            <h3 className="font-serif-clean font-bold text-xl text-[#1C1917] uppercase mb-1">
              Send an Inquiry to the Committee
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] mb-6">
              Fill out the form below and our team will get back to you.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-2">
                <CheckCircle2 size={32} className="mx-auto text-emerald-600" />
                <h4 className="font-serif-clean font-bold text-base">Thank You for Your Message</h4>
                <p className="text-xs">
                  Your inquiry has been received by Netaji Subhas Chandra Welfare Sangha.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-full bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sourav Mukherjee"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sourav@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. 9820012345"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                      Inquiry Purpose
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
                    >
                      <option>General Inquiry</option>
                      <option>Pushpanjali / Ritual Query</option>
                      <option>Cultural Stage Participation</option>
                      <option>Volunteer Registration</option>
                      <option>Bhog / Prasad Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or request here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A121D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
