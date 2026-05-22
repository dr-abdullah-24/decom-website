import { Link } from 'react-router-dom';
import DecomLogo from '../../assets/irflogo.png';

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

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#030308', borderTop: '1px solid rgba(204,36,36,0.12)' }}>
      {/* System status bar */}
      <div
        className="py-2 px-6 flex flex-wrap items-center justify-between gap-4 text-xs"
        style={{ borderBottom: '1px solid rgba(204,36,36,0.07)' }}
      >
        <div className="flex items-center gap-6" style={{ color: 'rgba(204,36,36,0.45)' }}>
          {[
            { label: 'AI.CORE',    val: 'ONLINE' },
            { label: 'AUTONOMY',   val: 'L4+' },
            { label: 'SYS.UPTIME', val: '99.9%' },
          ].map((s, i) => (
            <span key={i} style={{ letterSpacing: '0.12em' }}>
              {s.label}:{' '}
              <span style={{ color: '#e03333' }}>{s.val}</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2" style={{ color: 'rgba(204,36,36,0.45)', letterSpacing: '0.12em' }}>
          <div
            style={{
              width: 5, height: 5,
              background: '#cc2424',
              borderRadius: '50%',
              boxShadow: '0 0 6px #cc2424',
              animation: 'pulse-glow 1.5s ease-in-out infinite',
            }}
          />
          DECOM ROBOTICS // ALL SYSTEMS OPERATIONAL
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 no-underline">
              <img
                src={DecomLogo}
                alt="Decom Robotics"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(204,36,36,0.7))',
                }}
              />
              <div>
                <div className="font-black tracking-widest text-white" style={{ fontSize: '1rem', letterSpacing: '0.14em', lineHeight: 1 }}>
                  DECOM
                </div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: '#e03333' }}>ROBOTICS</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(200,210,230,0.5)', maxWidth: 260 }}>
              Advancing intelligent automation through robotics, AI, and systems engineering — enabling scalable, future-ready industrial automation across three continents.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: 'https://www.linkedin.com/in/ali-i-5306b597/', label: 'LinkedIn', icon: <LinkedInIcon /> },
                { href: 'https://x.com/57f588061640421',               label: 'X',        icon: <TwitterIcon /> },
                { href: '#',                                            label: 'GitHub',   icon: <GitHubIcon /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all"
                  style={{
                    color: 'rgba(204,36,36,0.45)',
                    border: '1px solid rgba(204,36,36,0.14)',
                    borderRadius: '2px',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = '#e03333';
                    el.style.borderColor = 'rgba(204,36,36,0.5)';
                    el.style.boxShadow = '0 0 12px rgba(204,36,36,0.2)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'rgba(204,36,36,0.45)';
                    el.style.borderColor = 'rgba(204,36,36,0.14)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#e03333' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/',        label: 'Home' },
                { to: '/about',   label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-all flex items-center gap-2"
                    style={{ color: 'rgba(200,210,230,0.5)', textDecoration: 'none' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,210,230,0.5)')}
                  >
                    <span style={{ color: 'rgba(204,36,36,0.4)', fontSize: '0.6rem' }}>▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#e03333' }}>
              Technology
            </h4>
            <ul className="space-y-3">
              {['Neural AI Core', 'Computer Vision', 'Autonomous Navigation', 'Modular Robotics', 'Edge AI Inference'].map((item, i) => (
                <li key={i} className="text-sm" style={{ color: 'rgba(200,210,230,0.5)' }}>
                  <span style={{ color: 'rgba(204,36,36,0.4)', fontSize: '0.6rem', marginRight: 8 }}>▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#e03333' }}>
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { label: 'Email',          val: 'info@decomrobotics.com', href: 'mailto:info@decomrobotics.com' },
                { label: 'Pakistan',       val: '+92 303 0595669',        href: 'tel:+923030595669' },
                { label: 'United States',  val: '+1 651 890-2369',        href: 'tel:+16518902369' },
                { label: 'Dubai, UAE',     val: '+971 55 645 7287',       href: 'tel:+971556457287' },
              ].map((c, i) => (
                <div key={i}>
                  <div className="text-xs font-bold mb-1" style={{ color: 'rgba(204,36,36,0.45)', letterSpacing: '0.1em' }}>
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    className="text-sm transition-all"
                    style={{ color: 'rgba(200,210,230,0.5)', textDecoration: 'none' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f0f4ff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,210,230,0.5)')}
                  >
                    {c.val}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs"
          style={{ borderTop: '1px solid rgba(204,36,36,0.08)', color: 'rgba(200,210,230,0.3)' }}
        >
          <span>© {year} Decom Robotics L.L.C. All rights reserved.</span>
          <div className="flex gap-6">
            {[
              { to: '/privacy-policy',    label: 'Privacy Policy' },
              { to: '/terms-of-service',  label: 'Terms of Service' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#e03333')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,210,230,0.3)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <span style={{ letterSpacing: '0.15em' }}>DECOM ROBOTICS // EST. 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
