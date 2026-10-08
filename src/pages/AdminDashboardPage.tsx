import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  ShieldCheck,
  Megaphone,
  Calendar,
  Image as ImageIcon,
  Users,
  Clock,
  Settings,
  MessageSquare,
  Plus,
  Trash2,
  Edit2,
  RotateCcw
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const {
    siteSettings,
    updateSiteSettings,
    schedule,
    updateScheduleDay,
    gallery,
    addGalleryPhoto,
    deleteGalleryPhoto,
    committee,
    addCommitteeMember,
    deleteCommitteeMember,
    announcements,
    addAnnouncement,
    deleteAnnouncement,
    contactMessages,
    updateMessageStatus,
    deleteContactMessage,
    resetAllToDefault
  } = useData();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'announcements' | 'schedule' | 'gallery' | 'committee' | 'messages' | 'settings'
  >('overview');

  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnContent, setNewAnnContent] = useState('');
  const [newAnnUrgent, setNewAnnUrgent] = useState(false);

  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCat, setNewPhotoCat] = useState('Durga Puja 2026');
  const [newPhotoUrl, setNewPhotoUrl] = useState('/images/durga-hero.jpg');
  const [newPhotoCaption, setNewPhotoCaption] = useState('');

  const [newCommName, setNewCommName] = useState('');
  const [newCommRole, setNewCommRole] = useState('');
  const [newCommCat, setNewCommCat] = useState<'Executive Committee' | 'Puja Sub-Committee' | 'Youth Wing'>('Executive Committee');
  const [newCommPhotoUrl, setNewCommPhotoUrl] = useState('');
  const [newCommDesc, setNewCommDesc] = useState('');
  const [newCommMsg, setNewCommMsg] = useState('');

  const [editingDayId, setEditingDayId] = useState<string | null>(null);
  const [editDayNote, setEditDayNote] = useState('');

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle || !newAnnContent) return;
    addAnnouncement({
      title: newAnnTitle,
      content: newAnnContent,
      date: 'Today',
      isUrgent: newAnnUrgent,
      isActive: true,
      actionLink: '/schedule',
      actionText: 'View'
    });
    setNewAnnTitle('');
    setNewAnnContent('');
    setNewAnnUrgent(false);
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoTitle || !newPhotoUrl) return;
    addGalleryPhoto({
      title: newPhotoTitle,
      category: newPhotoCat,
      year: 2026,
      imageUrl: newPhotoUrl,
      caption: newPhotoCaption || newPhotoTitle,
      tags: ['Puja 2026', newPhotoCat]
    });
    setNewPhotoTitle('');
    setNewPhotoCaption('');
  };

  const handleAddCommittee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommName || !newCommRole) return;
    addCommitteeMember({
      name: newCommName,
      position: newCommRole,
      category: newCommCat,
      photoUrl: newCommPhotoUrl || undefined,
      description: newCommDesc || 'Active executive member of Netaji Subhas Chandra Welfare Sangha.',
      message: newCommMsg || undefined,
      order: committee.length + 1
    });
    setNewCommName('');
    setNewCommRole('');
    setNewCommPhotoUrl('');
    setNewCommDesc('');
    setNewCommMsg('');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 bg-[#FCFBF9]">
      {/* Admin Header */}
      <div className="clean-card p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#7A121D] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A121D] block">
              MANAGEMENT PORTAL
            </span>
            <h1 className="font-serif-clean font-bold text-xl text-[#1C1917]">
              Sangha Administration Dashboard
            </h1>
          </div>
        </div>

        <button
          onClick={resetAllToDefault}
          className="px-4 py-2 rounded-full bg-[#F6F4EE] hover:bg-[#E8E2D8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw size={13} />
          <span>Reset Demo Defaults</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {[
          { id: 'overview', label: 'Overview', icon: ShieldCheck },
          { id: 'announcements', label: 'Announcements', icon: Megaphone },
          { id: 'schedule', label: 'Puja Schedule', icon: Clock },
          { id: 'gallery', label: 'Gallery Photos', icon: ImageIcon },
          { id: 'committee', label: 'Committee Members', icon: Users },
          { id: 'messages', label: `Inquiries (${contactMessages.filter(m => m.status === 'Unread').length})`, icon: MessageSquare },
          { id: 'settings', label: 'Settings', icon: Settings },
        ].map(tab => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#7A121D] text-white shadow-sm'
                  : 'bg-[#F6F4EE] text-[#57534E] hover:bg-[#E8E2D8] hover:text-[#1C1917]'
              }`}
            >
              <Icon size={13} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="clean-card p-5 bg-white">
            <span className="text-xs font-semibold text-[#8C827A] uppercase">Schedule Days</span>
            <p className="font-serif-clean font-bold text-3xl text-[#1C1917] mt-1">{schedule.length}</p>
            <span className="text-[11px] text-[#57534E]">15 Oct – 25 Oct 2026</span>
          </div>

          <div className="clean-card p-5 bg-white">
            <span className="text-xs font-semibold text-[#8C827A] uppercase">Announcements</span>
            <p className="font-serif-clean font-bold text-3xl text-[#1C1917] mt-1">{announcements.length}</p>
            <span className="text-[11px] text-[#57534E]">Live on site banner</span>
          </div>

          <div className="clean-card p-5 bg-white">
            <span className="text-xs font-semibold text-[#8C827A] uppercase">Gallery Photos</span>
            <p className="font-serif-clean font-bold text-3xl text-[#1C1917] mt-1">{gallery.length}</p>
            <span className="text-[11px] text-[#57534E]">Curated items</span>
          </div>

          <div className="clean-card p-5 bg-white">
            <span className="text-xs font-semibold text-[#8C827A] uppercase">Inquiries</span>
            <p className="font-serif-clean font-bold text-3xl text-[#1C1917] mt-1">{contactMessages.length}</p>
            <span className="text-[11px] text-emerald-700 font-medium">
              {contactMessages.filter(m => m.status === 'Unread').length} unread
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Announcements */}
      {activeTab === 'announcements' && (
        <div className="space-y-6">
          <div className="clean-card p-6 bg-white space-y-4">
            <h3 className="font-serif-clean font-bold text-base text-[#1C1917] uppercase">
              Post Announcement
            </h3>
            <form onSubmit={handleAddAnnouncement} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={newAnnTitle}
                    onChange={e => setNewAnnTitle(e.target.value)}
                    placeholder="e.g. Maha Astami Pushpanjali Timings"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={newAnnUrgent}
                    onChange={e => setNewAnnUrgent(e.target.checked)}
                    className="w-4 h-4 text-[#7A121D]"
                  />
                  <label htmlFor="urgent" className="text-xs font-semibold text-[#1C1917] cursor-pointer">
                    Urgent Notice
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] uppercase mb-1">Content</label>
                <textarea
                  required
                  rows={2}
                  value={newAnnContent}
                  onChange={e => setNewAnnContent(e.target.value)}
                  placeholder="Detailed announcement text..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <Plus size={13} />
                <span>Publish</span>
              </button>
            </form>
          </div>

          <div className="space-y-3">
            {announcements.map(ann => (
              <div
                key={ann.id}
                className="clean-card p-4 bg-white flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-semibold text-sm text-[#1C1917]">{ann.title}</h4>
                  <p className="text-xs text-[#57534E] mt-0.5">{ann.content}</p>
                </div>
                <button
                  onClick={() => deleteAnnouncement(ann.id)}
                  className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Schedule */}
      {activeTab === 'schedule' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedule.map(day => (
            <div key={day.id} className="clean-card p-5 bg-white space-y-3">
              <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-2">
                <div>
                  <h4 className="font-serif-clean font-bold text-sm text-[#1C1917]">{day.dayName}</h4>
                  <p className="text-[11px] text-[#7A121D]">{day.dateStr} ({day.weekday})</p>
                </div>
                <span className="text-xs bg-[#F6F4EE] px-2.5 py-0.5 rounded font-medium">
                  {day.events.length} Events
                </span>
              </div>

              <ul className="space-y-1 text-xs text-[#57534E]">
                {day.events.map((ev, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="font-semibold text-[#1C1917]">{ev.time}:</span>
                    <span>{ev.title}</span>
                  </li>
                ))}
              </ul>

              {editingDayId === day.id ? (
                <div className="pt-2 border-t border-[#E8E2D8] space-y-2">
                  <input
                    type="text"
                    value={editDayNote}
                    onChange={e => setEditDayNote(e.target.value)}
                    placeholder="Enter updated ritual note..."
                    className="w-full px-3 py-1.5 rounded-lg border border-[#E8E2D8] text-xs"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        updateScheduleDay(day.id, { note: editDayNote });
                        setEditingDayId(null);
                      }}
                      className="px-3 py-1 rounded-full bg-[#1C1917] text-white text-xs font-semibold cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingDayId(null)}
                      className="px-3 py-1 rounded-full bg-[#F6F4EE] text-[#57534E] text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#8C827A] truncate max-w-xs">{day.note}</span>
                  <button
                    onClick={() => {
                      setEditingDayId(day.id);
                      setEditDayNote(day.note || '');
                    }}
                    className="text-xs text-[#7A121D] hover:underline cursor-pointer flex items-center gap-1 font-semibold"
                  >
                    <Edit2 size={11} /> Edit Note
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Committee Members */}
      {activeTab === 'committee' && (
        <div className="space-y-6">
          <div className="clean-card p-6 bg-white space-y-4">
            <h3 className="font-serif-clean font-bold text-base text-[#1C1917] uppercase">
              Add Committee Member / Leader
            </h3>
            <form onSubmit={handleAddCommittee} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={newCommName}
                    onChange={e => setNewCommName(e.target.value)}
                    placeholder="e.g. Subir Banerjee"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Position / Role</label>
                  <input
                    type="text"
                    required
                    value={newCommRole}
                    onChange={e => setNewCommRole(e.target.value)}
                    placeholder="e.g. Cultural Secretary"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Wing / Category</label>
                  <select
                    value={newCommCat}
                    onChange={e => setNewCommCat(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  >
                    <option value="Executive Committee">Executive Committee</option>
                    <option value="Puja Sub-Committee">Puja Sub-Committee</option>
                    <option value="Youth Wing">Youth Wing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Portrait Photo URL</label>
                  <input
                    type="url"
                    value={newCommPhotoUrl}
                    onChange={e => setNewCommPhotoUrl(e.target.value)}
                    placeholder="https://... or /images/..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1C1917] uppercase mb-1">Short Bio / Responsibility</label>
                  <input
                    type="text"
                    value={newCommDesc}
                    onChange={e => setNewCommDesc(e.target.value)}
                    placeholder="e.g. Managing stage acoustics and music coordination"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] uppercase mb-1">Leadership Message / Quote (Optional)</label>
                <textarea
                  rows={2}
                  value={newCommMsg}
                  onChange={e => setNewCommMsg(e.target.value)}
                  placeholder="e.g. As we celebrate 20 years, we welcome all devotees..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#F6F4EE] border border-[#E8E2D8] text-xs"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#7A121D] text-white font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <Plus size={13} />
                <span>Add Member</span>
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.map(member => (
              <div
                key={member.id}
                className="clean-card p-4 bg-white flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#F6F4EE] border border-[#E8E2D8] shrink-0">
                    {member.photoUrl ? (
                      <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-xs text-[#7A121D]">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-[#1C1917] truncate">{member.name}</h4>
                    <p className="text-xs text-[#7A121D] font-medium truncate">{member.position}</p>
                    <span className="text-[10px] text-[#8C827A] block truncate">{member.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => deleteCommitteeMember(member.id)}
                  className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer shrink-0"
                  title="Remove member"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Messages */}
      {activeTab === 'messages' && (
        <div className="space-y-3">
          {contactMessages.map(msg => (
            <div
              key={msg.id}
              className={`clean-card p-5 bg-white space-y-2 ${
                msg.status === 'Unread' ? 'border-amber-300' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-sm text-[#1C1917] mr-2">{msg.name}</span>
                  <span className="text-xs text-[#8C827A]">({msg.mobile || msg.email})</span>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    msg.status === 'Unread' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
                  }`}
                >
                  {msg.status}
                </span>
              </div>
              <p className="text-xs text-[#57534E] bg-[#F6F4EE] p-3 rounded-xl">
                "{msg.message}"
              </p>
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => updateMessageStatus(msg.id, msg.status === 'Unread' ? 'Replied' : 'Unread')}
                  className="text-xs text-[#7A121D] font-medium hover:underline cursor-pointer"
                >
                  Mark as {msg.status === 'Unread' ? 'Replied' : 'Unread'}
                </button>
                <button
                  onClick={() => deleteContactMessage(msg.id)}
                  className="text-rose-600 text-xs hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Trash2 size={12} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
