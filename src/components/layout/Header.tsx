import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DecomLogo from '../../assets/irflogo.png';

const NAV = [
  { path: '/',        label: 'Home',    num: '01' },
  { path: '/about',   label: 'About',   num: '02' },
  { path: '/contact', label: 'Contact', num: '03' },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Thin bar ── */}
      <header
        className="fixed top-0 left-0 w-full z-50"
        style={{
          height: 64,
          background: scrolled && !open ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled && !open ? 'blur(16px)' : 'none',
          borderBottom: scrolled && !open ? '1px solid rgba(204,36,36,0.08)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img
              src={DecomLogo}
              alt="Decom Robotics"
              style={{
                width: 38, height: 38, objectFit: 'contain',
                filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(204,36,36,0.7))',
              }}
            />
            <div>
              <div style={{ fontWeight: 900, letterSpacing: '0.14em', color: '#fff', fontSize: '0.9rem', lineHeight: 1 }}>DECOM</div>
              <div style={{ fontSize: '0.5rem', letterSpacing: '0.35em', color: '#cc2424', lineHeight: 1.4 }}>ROBOTICS</div>
            </div>
          </Link>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Menu button */}
            <button
              onClick={() => setOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}
            >
              <span
                style={{
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.25em',
                  color: open ? '#cc2424' : 'rgba(200,200,200,0.6)',
                  textTransform: 'uppercase', transition: 'color 0.3s',
                }}
              >
                {open ? 'Close' : 'Menu'}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 22 }}>
                <motion.div animate={open ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}  transition={{ duration: 0.3 }}
                  style={{ height: 1.5, background: open ? '#cc2424' : '#fff', transformOrigin: 'center' }} />
                <motion.div animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
                  style={{ height: 1.5, background: '#fff', width: '70%' }} />
                <motion.div animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }}
                  style={{ height: 1.5, background: open ? '#cc2424' : '#fff', transformOrigin: 'center' }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: '#000',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: '80px 8vw',
              overflow: 'hidden',
            }}
          >
            {/* background grid */}
            <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

            {/* decorative corner lines */}
            <div style={{ position: 'absolute', top: 80, left: 32, width: 40, height: 40, borderTop: '1px solid rgba(204,36,36,0.3)', borderLeft: '1px solid rgba(204,36,36,0.3)' }} />
            <div style={{ position: 'absolute', bottom: 80, right: 32, width: 40, height: 40, borderBottom: '1px solid rgba(204,36,36,0.3)', borderRight: '1px solid rgba(204,36,36,0.3)' }} />

            {/* Big nav links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {NAV.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 20, padding: '20px 0', position: 'relative' }}
                    className="group"
                  >
                    {({ isActive }) => (
                      <>
                        <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: isActive ? '#cc2424' : 'rgba(204,36,36,0.3)', fontWeight: 800, minWidth: 28 }}>
                          {link.num}
                        </span>
                        <span
                          style={{
                            fontWeight: 900, lineHeight: 1,
                            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                            letterSpacing: '-0.02em',
                            color: isActive ? '#cc2424' : '#fff',
                            transition: 'color 0.2s',
                          }}
                        >
                          {link.label}
                        </span>
                        {/* Arrow that appears on hover */}
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          style={{ marginLeft: 'auto', color: '#cc2424', fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Bottom strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {[
                { label: 'Email', val: 'info@decomrobotics.com', href: 'mailto:info@decomrobotics.com' },
                { label: 'Offices', val: 'Islamabad  ·  Eagan MN  ·  Dubai', href: null },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(204,36,36,0.5)', textTransform: 'uppercase', marginBottom: 6, fontWeight: 700 }}>
                    {item.label}
                  </div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: '0.85rem', color: 'rgba(200,200,200,0.6)', textDecoration: 'none' }}>{item.val}</a>
                    : <div style={{ fontSize: '0.85rem', color: 'rgba(200,200,200,0.6)' }}>{item.val}</div>
                  }
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
