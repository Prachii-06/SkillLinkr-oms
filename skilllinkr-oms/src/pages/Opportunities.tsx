import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShieldCheck, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

const OpportunityCard = ({ opp, index }: { opp: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full uppercase tracking-wider">{opp.category}</span>
        {opp.verified && (
          <span className="flex items-center gap-1 text-[10px] font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded-full border border-brand-green/20">
            <ShieldCheck size={12} /> VERIFIED
          </span>
        )}
      </div>
      <div className="text-xs font-bold text-brand-gray bg-brand-light px-2.5 py-1 rounded-full">{opp.mode}</div>
    </div>

    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-cyan transition-colors">{opp.title}</h3>

    <div className="space-y-2 mb-6">
      <div className="flex items-center gap-2 text-sm text-brand-gray">
        <Users size={16} /> <span className="font-medium">{opp.org}</span> • <span className="text-brand-dark">{opp.college}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-brand-gray">
        <Calendar size={16} /> Deadline: <span className="font-medium">{opp.deadline}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-brand-gray">
        <MapPin size={16} /> {opp.location}
      </div>
    </div>

    <div className="pt-4 border-t border-brand-border">
      <button className="w-full flex items-center justify-center gap-2 bg-brand-secondary text-brand-dark font-semibold py-2.5 rounded-xl group-hover:bg-brand-dark group-hover:text-white transition-colors">
        View Opportunity <ExternalLink size={16} />
      </button>
    </div>
  </motion.div>
);

export const Opportunities = () => {
  const sampleOpps = [
    { title: 'National Web3 Hackathon', category: 'Hackathon', org: 'Blockchain Club', college: 'KIIT', mode: 'Hybrid', deadline: 'Oct 20, 2026', location: 'Bhubaneswar', verified: true },
    { title: 'AI & Future of Work Workshop', category: 'Workshop', org: 'Tech Society', college: 'VIT', mode: 'Online', deadline: 'Oct 15, 2026', location: 'Virtual', verified: true },
    { title: 'UI/UX Design Challenge', category: 'Competition', org: 'Design Hub', college: 'SRM', mode: 'In-person', deadline: 'Nov 01, 2026', location: 'Chennai Campus', verified: true },
    { title: 'Summer Research Internship', category: 'Internship', org: 'Robotics Lab', college: 'BITS', mode: 'In-person', deadline: 'Dec 10, 2026', location: 'Pilani Campus', verified: true },
    { title: 'Open Source Contribution Sprint', category: 'Hackathon', org: 'Open Code', college: 'NIT', mode: 'Online', deadline: 'Nov 15, 2026', location: 'Virtual', verified: true },
    { title: 'Startup Pitch Fest', category: 'Competition', org: 'E-Cell', college: 'KIIT', mode: 'In-person', deadline: 'Oct 25, 2026', location: 'Main Auditorium', verified: true },
  ];

  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
          >
            Discover <span className="text-brand-cyan">Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-gray"
          >
            Find verified hackathons, competitions, workshops, internships and more across the SkillLinkr ecosystem.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-2xl shadow-sm border border-brand-border mb-12 flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={20} />
            <input
              type="text"
              placeholder="Search for opportunities..."
              className="w-full pl-12 pr-4 py-3 bg-brand-secondary border border-transparent focus:border-brand-cyan focus:bg-white rounded-xl outline-none transition-all font-medium text-brand-dark placeholder:text-brand-gray/60"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {['Category', 'Type', 'College', 'Mode'].map(filter => (
              <button key={filter} className="flex items-center gap-2 px-4 py-3 bg-brand-light border border-brand-border rounded-xl font-medium text-brand-gray hover:bg-brand-secondary whitespace-nowrap">
                {filter} <Filter size={16} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleOpps.map((opp, i) => (
            <OpportunityCard key={i} opp={opp} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};
