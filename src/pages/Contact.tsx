import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const offices = [
  {
    id: 1,
    city: 'Islamabad',
    country: 'Pakistan',
    flag: 'PK',
    address: '5th Floor, Plaza 1, Paradise Commercial, Bahria Town, Islamabad',
    phone: '+92 303 0595669',
    email: 'info@decomrobotics.com',
    hours: 'Mon–Fri  09:00 – 18:00  PKT',
    coords: [33.5461, 73.1350] as [number, number],
    accent: '#e83535',
  },
  {
    id: 2,
    city: 'Eagan, MN',
    country: 'United States',
    flag: 'US',
    address: '2817 Eagandale Blvd, Eagan, MN 55121',
    phone: '+1 651 890-2369',
    email: 'info@decomrobotics.com',
    hours: 'Mon–Fri  08:00 – 17:00  CST',
    coords: [44.8539, -93.2320] as [number, number],
    accent: '#8b5cf6',
  },
  {
    id: 3,
    city: 'Dubai',
    country: 'United Arab Emirates',
    flag: 'AE',
    address: '6F Business Center, The Meydan Hotel, Nad Al Sheba, Dubai',
    phone: '+971 55 645 7287',
    email: 'info@decomrobotics.com',
    hours: 'Mon–Fri  09:00 – 18:00  GST',
    coords: [25.1925, 55.3030] as [number, number],
    accent: '#e83535',
  },
];

const faqs = [
  { q: 'What industries do you serve?', a: 'Decom Robotics develops AI-powered autonomous systems for industrial, laboratory, and commercial environments — spanning manufacturing, recycling, logistics, and sectors demanding precision at scale.' },
  { q: 'How long does deployment typically take?', a: 'Timelines vary by scale and integration requirements. Our team works closely with you from initial consultation through operational setup, prioritizing speed without compromising quality.' },
  { q: 'Do you offer ongoing support after deployment?', a: 'Yes. We provide comprehensive maintenance and support packages ensuring your systems remain optimized, secure, and performing at peak capacity well beyond initial launch.' },
  { q: 'What does your pricing look like?', a: 'We offer flexible engagement models — project-based, retainer, and licensing — tailored to your specific operational needs. Discuss the best fit during an initial consultation.' },
  { q: 'Can your systems integrate with existing operations?', a: 'Absolutely. Our robotic and AI systems are engineered for seamless integration with existing industrial workflows and infrastructure, minimizing disruption and maximizing ROI.' },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(10,12,20,0.8)',
        border: `1px solid ${open ? 'rgba(232,53,53,0.3)' : 'rgba(232,53,53,0.1)'}`,
        borderRadius: '4px',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-sm pr-8" style={{ color: open ? '#e83535' : '#f0f4ff' }}>
          {q}
        </span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          style={{
            flexShrink: 0,
            color: '#e83535',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <line x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'rgba(200,210,230,0.6)', borderTop: '1px solid rgba(232,53,53,0.08)' }}>
              <div className="pt-4">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-0 overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden"
        style={{ background: '#030308' }}
      >
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.06) 0%, transparent 60%)' }}
        />

        <div className="container mx-auto px-6 text-center relative z-10 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label mx-auto mb-6 w-fit">Contact</div>
            <h1
              className="font-black mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#f0f4ff' }}
            >
              Let's Build the{' '}
              <span className="gradient-text">Future Together</span>
            </h1>
            <p
              className="max-w-xl mx-auto"
              style={{ color: 'rgba(200,210,230,0.6)', fontSize: '1.05rem', lineHeight: 1.8 }}
            >
              Explore a partnership, request a live demo, or simply ask a question — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT CARDS ══ */}
      <section className="py-16 relative" style={{ background: '#07070f' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="2" width="24" height="24" rx="2" stroke="#e83535" strokeWidth="1.5" fill="rgba(232,53,53,0.05)"/>
                    <path d="M2 8 L14 16 L26 8" stroke="#e83535" strokeWidth="1.5"/>
                  </svg>
                ),
                title: 'Email Us',
                content: 'info@decomrobotics.com',
                sub: 'Response within 24 hours',
                link: 'mailto:info@decomrobotics.com',
                action: 'Send Email',
                accent: '#e83535',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 5 C5 5 8 3 10 5 L12 9 C12 9 13 10 11 12 C11 12 10 13 12 15 L13 16 C15 18 16 17 16 17 C18 15 19 16 19 16 L23 18 C25 20 23 23 23 23 C21 25 18 25 15 22 C12 19 3 10 5 5 Z" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.05)"/>
                  </svg>
                ),
                title: 'Call Us',
                content: '+92 303 0595669',
                sub: 'Mon–Fri, 09:00–18:00 PKT',
                link: 'tel:+923030595669',
                action: 'Call Now',
                accent: '#8b5cf6',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="12" r="6" stroke="#e83535" strokeWidth="1.5" fill="rgba(232,53,53,0.05)"/>
                    <path d="M8 18 Q14 28 20 18" stroke="#e83535" strokeWidth="1.5" fill="none"/>
                    <circle cx="14" cy="12" r="2" fill="#e83535"/>
                  </svg>
                ),
                title: 'Visit Us',
                content: '3 Global Offices',
                sub: 'US · UAE · Pakistan',
                link: '#offices',
                action: 'See Locations',
                accent: '#e83535',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-cyber p-8 relative"
                style={{ borderRadius: '4px' }}
              >
                <div className="absolute top-0 left-0 w-4 h-4">
                  <div className="absolute top-0 left-0 w-full h-px" style={{ background: card.accent }} />
                  <div className="absolute top-0 left-0 h-full w-px" style={{ background: card.accent }} />
                </div>
                <div className="mb-5 hex-glow" style={{ filter: `drop-shadow(0 0 8px ${card.accent})` }}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#f0f4ff' }}>{card.title}</h3>
                <p className="font-bold mb-1 text-sm" style={{ color: card.accent }}>{card.content}</p>
                <p className="text-xs mb-5" style={{ color: 'rgba(200,210,230,0.5)' }}>{card.sub}</p>
                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all"
                  style={{ color: card.accent }}
                >
                  {card.action}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OFFICES ══ */}
      <section id="offices" className="py-24 relative" style={{ background: '#030308' }}>
        <div className="absolute inset-0 cyber-grid opacity-25" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-4 w-fit">Global Presence</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f0f4ff' }}>
              Our Offices Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="card-cyber overflow-hidden"
                style={{ borderRadius: '4px' }}
              >
                <div style={{ height: 3, background: `linear-gradient(90deg, ${office.accent}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="font-black text-lg" style={{ color: '#f0f4ff' }}>{office.city}</h3>
                      <p className="text-xs font-bold tracking-widest uppercase mt-1" style={{ color: office.accent }}>
                        {office.country}
                      </p>
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider px-2 py-1"
                      style={{
                        background: `rgba(0,0,0,0.4)`,
                        border: `1px solid ${office.accent}30`,
                        color: office.accent,
                        borderRadius: '2px',
                      }}
                    >
                      {office.flag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: '◎', label: office.address },
                      { icon: '⟁', label: office.phone, href: `tel:${office.phone.replace(/\D/g, '')}` },
                      { icon: '◻', label: office.email, href: `mailto:${office.email}` },
                      { icon: '◷', label: office.hours },
                    ].map((item, j) => (
                      <div key={j} className="flex gap-3 text-xs">
                        <span style={{ color: office.accent, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="transition-colors"
                            style={{ color: 'rgba(200,210,230,0.6)', lineHeight: 1.5 }}
                            onMouseEnter={e => ((e.target as HTMLElement).style.color = office.accent)}
                            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(200,210,230,0.6)')}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span style={{ color: 'rgba(200,210,230,0.6)', lineHeight: 1.5 }}>{item.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section className="py-16 relative" style={{ background: '#07070f' }}>
        <div className="container mx-auto px-6">
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid rgba(232,53,53,0.15)',
              borderRadius: '4px',
              boxShadow: '0 0 40px rgba(232,53,53,0.05)',
            }}
          >
            <div style={{ height: 500, width: '100%' }}>
              <MapContainer
                center={[30.0, 50.0] as [number, number]}
                zoom={2}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {offices.map((o) => (
                  <Marker key={o.id} position={o.coords}>
                    <Popup maxWidth={260}>
                      <strong className="block mb-1">Decom Robotics</strong>
                      <strong className="block mb-2 text-blue-600">{o.city}, {o.country}</strong>
                      <span className="text-sm block mb-2 text-gray-600">{o.address}</span>
                      <a href={`tel:${o.phone.replace(/\D/g, '')}`} className="text-sm text-blue-500 block">{o.phone}</a>
                      <a href={`mailto:${o.email}`} className="text-sm text-blue-500 block">{o.email}</a>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-24 relative" style={{ background: '#030308' }}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-4 w-fit">FAQ</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f0f4ff' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #050510 0%, #0a0520 50%, #050510 100%)',
          borderTop: '1px solid rgba(232,53,53,0.1)',
        }}
      >
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mx-auto mb-6 w-fit">Ready to Automate</div>
            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#f0f4ff' }}
            >
              Deploy Intelligent Automation{' '}
              <span className="gradient-text">Today</span>
            </h2>
            <p className="max-w-lg mx-auto mb-10" style={{ color: 'rgba(200,210,230,0.6)', lineHeight: 1.8 }}>
              Let's collaborate to bring intelligent automation to your operations. Reach out and let's start the conversation.
            </p>
            <a
              href="mailto:info@decomrobotics.com"
              className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest uppercase"
              style={{ borderRadius: '2px' }}
            >
              Email Us Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
