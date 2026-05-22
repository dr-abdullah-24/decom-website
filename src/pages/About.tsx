import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aliIkramImg from '../assets/attemp2.png';
import ijazHaiderImg from '../assets/ijaz.png';

/* ── icons ── */
const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <polygon points="18,3 8,18 15,18 14,29 24,14 17,14" stroke="currentColor" strokeWidth="1.5" fill="rgba(232,53,53,0.08)"/>
    <circle cx="18" cy="3" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="14" cy="29" r="1.5" fill="#8b5cf6" opacity="0.6"/>
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 3 L28 8 L28 18 Q28 26 16 30 Q4 26 4 18 L4 8 Z" stroke="currentColor" strokeWidth="1.5" fill="rgba(232,53,53,0.06)"/>
    <path d="M11 16 L14.5 19.5 L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAward = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" fill="rgba(232,53,53,0.06)"/>
    <path d="M11 20 L8 28 L16 24 L24 28 L21 20" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.08)"/>
    <circle cx="16" cy="13" r="4" stroke="currentColor" strokeWidth="1" fill="rgba(232,53,53,0.15)"/>
    <circle cx="16" cy="13" r="1.5" fill="currentColor"/>
  </svg>
);
const IconUsers = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" fill="rgba(232,53,53,0.06)"/>
    <circle cx="22" cy="11" r="5" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.06)"/>
    <path d="M3 26 Q3 20 11 20 Q19 20 19 26" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M19 22 Q19 20 22 20 Q29 20 29 26" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
  </svg>
);
const IconRepeat = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M6 10 L26 10 L26 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 22 L22 18 M26 22 L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 22 L6 22 L6 10" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 10 L10 14 M6 10 L2 14" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10V17M7 7V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 17V13C11 11.5 12 10 14 10C16 10 17 11 17 13V17M11 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M3 5H7.5L12 11.5L16.5 5H21L14 13.5L21 21H16.5L12 14.5L7.5 21H3L10 12.5L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

/* ── data ── */
const values = [
  { icon: <IconZap />,    num: '01', title: 'Applied Innovation',     desc: 'Advancing intelligent automation through practical, real-world engineering and research that ships production-grade systems.' },
  { icon: <IconAward />,  num: '02', title: 'Engineering Excellence', desc: 'Building robust, production-ready systems designed for reliability and long-term deployment in demanding industrial environments.' },
  { icon: <IconShield />, num: '03', title: 'Integrity by Design',   desc: 'Upholding responsible engineering, transparency, and trust across all technology we develop and every partnership we build.' },
  { icon: <IconUsers />,  num: '04', title: 'Systems Collaboration', desc: 'Working across disciplines to integrate mechanical, embedded, and intelligent systems seamlessly into unified platforms.' },
  { icon: <IconRepeat />, num: '05', title: 'Scalable Thinking',     desc: 'Designing adaptable platforms that evolve with industrial needs — software-defined systems that get smarter over time.' },
];

const teamMembers = [
  {
    id: 1,
    name: 'Ali Ikram',
    role: 'Founder & Chief Executive Officer',
    bio: 'AI and robotics engineer specializing in computer vision, autonomous systems, and real-time AI deployment. Leads the technical vision at Decom Robotics — from system architecture to production-grade intelligent automation.',
    social: { linkedin: 'https://www.linkedin.com/in/ali-i-5306b597/', twitter: 'https://x.com/57f588061640421' },
    image: aliIkramImg,
    tag: 'FOUNDER',
    accent: '#e83535',
  },
  {
    id: 2,
    name: 'Ijaz Haider',
    role: 'Chairman',
    bio: 'Seasoned technology executive with extensive experience as CEO, CRO, and Managing Partner across AI and sustainability-focused organizations. Provides strategic oversight and long-term direction for Decom Robotics.',
    social: { linkedin: '#' },
    image: ijazHaiderImg,
    tag: 'CHAIRMAN',
    accent: '#8b5cf6',
  },
];

/* ════════════════════════════
   ABOUT
════════════════════════════ */
export default function About() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: '#000', color: '#f0f0f0', overflowX: 'hidden' }}>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden', paddingTop: 64, background: '#000' }}>
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 60%, rgba(232,53,53,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />

        {/* giant watermark */}
        <div style={{ position: 'absolute', top: 40, right: -40, fontWeight: 900, fontSize: '22vw', color: 'rgba(232,53,53,0.025)', letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
          ABOUT
        </div>

        {/* rotating hex */}
        <div className="absolute right-8 top-24 opacity-10 pointer-events-none hidden lg:block">
          <svg className="ring-rotate" width="420" height="420" viewBox="0 0 420 420" fill="none" style={{ transformOrigin: '210px 210px' }}>
            <polygon points="210,20 390,115 390,305 210,400 30,305 30,115" stroke="#e83535" strokeWidth="0.8" strokeDasharray="6 8"/>
            <polygon points="210,60 350,135 350,285 210,360 70,285 70,135"  stroke="#e83535" strokeWidth="0.5" strokeDasharray="3 12" opacity="0.5"/>
          </svg>
        </div>

        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%', padding: '0 40px 80px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 28 }}>About Decom Robotics</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontWeight: 900, fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', letterSpacing: '-0.04em', lineHeight: 0.88, color: '#fff', margin: 0 }}>
            <span style={{ display: 'block' }}>BUILT BY</span>
            <span style={{ display: 'block' }}>ENGINEERS.</span>
            <span style={{ display: 'block' }} className="gradient-text">DRIVEN BY</span>
            <span style={{ display: 'block' }} className="gradient-text">VISION.</span>
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.5 }}
            style={{ height: 1, background: 'linear-gradient(90deg, #e83535 40%, transparent)', margin: '40px 0', transformOrigin: 'left' }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'rgba(200,200,200,0.5)', lineHeight: 1.8, maxWidth: 560 }}>
            Decom Robotics L.L.C. is an autonomous systems and AI company building next-generation industrial robotics for a smarter world.
          </motion.p>
        </div>
      </section>

      {/* ══ MISSION & VISION — editorial, no boxes ══ */}
      <section style={{ background: '#000', position: 'relative' }}>

        {/* full-bleed strip */}
        <div style={{ background: '#080000', borderTop: '1px solid rgba(232,53,53,0.1)', borderBottom: '1px solid rgba(232,53,53,0.06)', padding: '22px 40px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, whiteSpace: 'nowrap' }}>OUR PURPOSE</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(232,53,53,0.35), transparent)', minWidth: 40 }} />
          <span style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.25em', color: 'rgba(232,53,53,0.4)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>EST. 2024</span>
        </div>

        <div style={{ display: 'grid', maxWidth: '100%' }} className="lg:grid-cols-2">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ padding: 'clamp(48px, 6vw, 96px) clamp(32px, 5vw, 80px)', borderRight: '1px solid rgba(232,53,53,0.07)', borderBottom: '1px solid rgba(232,53,53,0.07)', position: 'relative', overflow: 'hidden' }}>
            {/* large faint label behind */}
            <div style={{ position: 'absolute', bottom: -20, left: -10, fontWeight: 900, fontSize: '8rem', color: 'rgba(232,53,53,0.03)', letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              M
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{ width: 2, height: 36, background: '#e83535' }} />
              <div>
                <div style={{ fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.28em', color: '#e83535', textTransform: 'uppercase' }}>Mission</div>
                <div style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>What We Do</div>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', color: 'rgba(220,220,220,0.62)', lineHeight: 1.9, marginBottom: 40 }}>
              At Decom Robotics L.L.C., our mission is to develop <span style={{ color: '#fff', fontWeight: 600 }}>intelligent robotic systems</span> that automate complex physical processes traditionally dependent on manual labor. By combining robotics, embedded systems, and artificial intelligence, we enable scalable, reliable automation solutions that improve efficiency, accuracy, and operational consistency across industrial environments.
            </p>
            {/* three quick metrics */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['L4+','Autonomy'],['<10ms','AI Latency'],['100%','AI-Native']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontWeight: 900, fontSize: '1.8rem', color: '#e83535', letterSpacing: '-0.04em', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(232,53,53,0.5)', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ padding: 'clamp(48px, 6vw, 96px) clamp(32px, 5vw, 80px)', borderBottom: '1px solid rgba(232,53,53,0.07)', background: 'rgba(139,92,246,0.02)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -20, right: -10, fontWeight: 900, fontSize: '8rem', color: 'rgba(139,92,246,0.03)', letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              V
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{ width: 2, height: 36, background: '#8b5cf6' }} />
              <div>
                <div style={{ fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.28em', color: '#8b5cf6', textTransform: 'uppercase' }}>Vision</div>
                <div style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>Where We're Headed</div>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', color: 'rgba(220,220,220,0.55)', lineHeight: 1.9, marginBottom: 44 }}>
              A future where intelligent machines seamlessly handle high-precision, repetitive, and labor-intensive tasks — allowing industries to operate with greater efficiency, safety, and sustainability.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                'Driving autonomous robotics adoption in real-world industrial workflows.',
                'Enabling smarter automation through AI-powered perception and decision-making.',
                'Building adaptable platforms that evolve with future industrial needs.',
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '20px 0', borderBottom: i < 2 ? '1px solid rgba(139,92,246,0.08)' : 'none' }}>
                  <span style={{ fontWeight: 900, fontSize: '0.62rem', color: '#8b5cf6', letterSpacing: '0.15em', minWidth: 24, paddingTop: 3 }}>0{i + 1}</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(200,200,200,0.6)', lineHeight: 1.7 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CORE VALUES — interactive horizontal bands ══ */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(232,53,53,0.08)' }}>

        <div style={{ padding: '40px 40px 0', maxWidth: 1400, margin: '0 auto' }}>
          <div className="section-tag" style={{ marginBottom: 12 }}>Core Values</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 0, flexWrap: 'wrap' }}>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
              Principles We Build On
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'rgba(200,200,200,0.38)', margin: 0, maxWidth: 300, lineHeight: 1.6 }}>
              The operating system behind every decision we make.
            </p>
          </div>
        </div>

        {/* full-width interactive bands */}
        <div style={{ marginTop: 48 }}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr 1fr auto',
                gap: 32,
                alignItems: 'center',
                padding: '28px 40px',
                borderTop: '1px solid rgba(232,53,53,0.07)',
                background: hovered === i ? 'rgba(232,53,53,0.03)' : 'transparent',
                transition: 'background 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}>

              {/* left accent bar that fills in on hover */}
              <motion.div
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#e83535', transformOrigin: 'top' }} />

              {/* number */}
              <span style={{ fontWeight: 900, fontSize: '0.62rem', letterSpacing: '0.2em', color: hovered === i ? '#e83535' : 'rgba(232,53,53,0.3)', transition: 'color 0.3s', fontFamily: 'monospace' }}>
                {v.num}
              </span>

              {/* title */}
              <motion.h3
                animate={{ x: hovered === i ? 8 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ fontWeight: 900, fontSize: 'clamp(1.1rem, 2vw, 1.65rem)', color: hovered === i ? '#fff' : 'rgba(240,240,240,0.75)', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>
                {v.title}
              </motion.h3>

              {/* description — always visible but fades in fully on hover */}
              <p style={{ fontSize: '0.8rem', color: hovered === i ? 'rgba(200,200,200,0.7)' : 'rgba(200,200,200,0.3)', lineHeight: 1.7, margin: 0, transition: 'color 0.3s' }} className="hidden md:block">
                {v.desc}
              </p>

              {/* icon */}
              <div style={{ color: hovered === i ? '#e83535' : 'rgba(232,53,53,0.3)', transition: 'color 0.3s', flexShrink: 0 }}>
                {v.icon}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(232,53,53,0.07)' }} />
        </div>
      </section>

      {/* ══ TEAM — full-width editorial panels ══ */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(232,53,53,0.08)' }}>

        <div style={{ padding: '60px 40px 0', maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="section-tag" style={{ marginBottom: 12 }}>Leadership</div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
              The Minds Behind the Machines
            </h2>
          </div>
        </div>

        <div style={{ marginTop: 60 }}>
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '420px 1fr' : '1fr 420px',
                minHeight: '55vh',
                borderTop: '1px solid rgba(232,53,53,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="lg:grid-cols-[420px_1fr]">

              {/* PHOTO panel */}
              <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative', overflow: 'hidden', minHeight: 420 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center',
                    display: 'block',
                    filter: 'brightness(0.6) contrast(1.1) grayscale(0.15)',
                  }} />
                {/* gradient fade toward text */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 100%)'
                    : 'linear-gradient(-90deg, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 100%)',
                }} />
                {/* corner marks */}
                <div style={{ position: 'absolute', top: 20, left: 20, width: 20, height: 20, borderTop: `1.5px solid ${member.accent}`, borderLeft: `1.5px solid ${member.accent}`, zIndex: 2 }} />
                <div style={{ position: 'absolute', bottom: 20, right: 20, width: 20, height: 20, borderBottom: `1.5px solid ${member.accent}`, borderRight: `1.5px solid ${member.accent}`, zIndex: 2 }} />
                {/* tag — top-left corner, overlaid on photo */}
                <div style={{
                  position: 'absolute', top: 20, left: 20, zIndex: 3,
                  fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.25em',
                  color: member.accent, background: 'rgba(0,0,0,0.82)',
                  border: `1px solid ${member.accent}`,
                  padding: '5px 12px', textTransform: 'uppercase',
                }}>
                  {member.tag}
                </div>
                {/* live indicator */}
                <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                  <div className="pulse-dot" style={{ width: 7, height: 7, background: member.accent, boxShadow: `0 0 8px ${member.accent}` }} />
                  <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Active</span>
                </div>
              </div>

              {/* TEXT panel */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: 'clamp(40px, 5vw, 80px) clamp(32px, 5vw, 80px)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  background: i % 2 === 0 ? '#040000' : '#020208',
                  position: 'relative', overflow: 'hidden',
                }}>

                {/* large faint name watermark */}
                <div style={{
                  position: 'absolute', bottom: -20, right: i % 2 === 0 ? -20 : 'auto', left: i % 2 === 1 ? -20 : 'auto',
                  fontWeight: 900, fontSize: '7rem', color: `${member.accent}08`,
                  letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
                  whiteSpace: 'nowrap',
                }}>
                  {member.name.split(' ')[0].toUpperCase()}
                </div>

                <div style={{ position: 'relative' }}>
                  {/* role */}
                  <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.25em', color: member.accent, textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 20, height: 1, background: member.accent }} />
                    {member.role}
                  </div>

                  {/* name */}
                  <h2 style={{ fontWeight: 900, fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 28 }}>
                    {member.name.split(' ').map((word, wi) => (
                      <span key={wi} style={{ display: 'block', color: wi === 0 ? '#fff' : member.accent }}>
                        {word}
                      </span>
                    ))}
                  </h2>

                  {/* divider */}
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${member.accent}40, transparent)`, marginBottom: 28, width: '60%' }} />

                  {/* bio */}
                  <p style={{ fontSize: '0.875rem', color: 'rgba(200,200,200,0.55)', lineHeight: 1.85, marginBottom: 36, maxWidth: 440 }}>
                    {member.bio}
                  </p>

                  {/* social links */}
                  <div style={{ display: 'flex', gap: 12 }}>
                    {member.social.linkedin && member.social.linkedin !== '#' && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,200,200,0.4)', textDecoration: 'none', padding: '10px 16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.25s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = member.accent; (e.currentTarget as HTMLElement).style.borderColor = `${member.accent}50`; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(200,200,200,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                        <LinkedInIcon /> LinkedIn
                      </a>
                    )}
                    {member.social.twitter && member.social.twitter !== '#' && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,200,200,0.4)', textDecoration: 'none', padding: '10px 16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.25s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = member.accent; (e.currentTarget as HTMLElement).style.borderColor = `${member.accent}50`; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(200,200,200,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                        <TwitterIcon /> X / Twitter
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: '#000', padding: '120px 40px', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(232,53,53,0.08)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(232,53,53,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        {/* ghost text */}
        <div style={{ position: 'absolute', bottom: -40, left: -30, fontWeight: 900, fontSize: '20vw', color: 'rgba(232,53,53,0.025)', letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }}>
          JOIN US
        </div>

        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gap: 60, alignItems: 'center' }} className="lg:grid-cols-[1fr_320px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-tag" style={{ marginBottom: 24 }}>Join the Mission</div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 0.9, color: '#fff', margin: 0 }}>
              BUILD THE<br/>FUTURE<br/><span className="gradient-text">WITH US</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontSize: '0.88rem', color: 'rgba(200,200,200,0.48)', lineHeight: 1.75, marginBottom: 8 }}>
              Decom Robotics is assembling engineers, researchers, and visionaries passionate about robotics, AI, and industrial automation.
            </p>
            <Link to="/contact" className="btn-red" style={{ justifyContent: 'center' }}>
              Get in Touch
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a href="mailto:info@decomrobotics.com"
              style={{ fontSize: '0.68rem', color: 'rgba(232,53,53,0.5)', textDecoration: 'none', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', paddingTop: 8, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e83535')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,53,53,0.5)')}>
              ◉ info@decomrobotics.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
