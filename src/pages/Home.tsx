import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import CompanyImage from '../assets/irf-companypage.png';

/* ── counter ── */
const Counter = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inV = useInView(ref, { once: true });
  const mv  = useMotionValue(0);
  const sp  = useSpring(mv, { stiffness: 50, damping: 18 });
  const [n, setN] = useState(0);
  useEffect(() => { if (inV) mv.set(to); }, [inV, mv, to]);
  useEffect(() => sp.on('change', v => setN(Math.round(v))), [sp]);
  return <span ref={ref}>{n}{suffix}</span>;
};

/* ── rotating word ── */
const Cycle = ({ words }: { words: string[] }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <AnimatePresence mode="wait">
        <motion.span key={i}
          initial={{ y: '110%' }} animate={{ y: 0 }} exit={{ y: '-110%' }}
          transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
          style={{ display: 'block', color: '#cc2424' }}>
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* ── marquee ── */
const TAPE = ['AI-POWERED','AUTONOMOUS SYSTEMS','COMPUTER VISION','REAL-TIME INFERENCE',
  'EDGE AI','L4+ AUTONOMY','MULTI-SENSOR FUSION','ROBOTIC PLATFORMS','NEURAL NETWORKS','EMBEDDED AI'];

const Tape = ({ inv }: { inv?: boolean }) => {
  const txt = TAPE.map(s => `${s}  ·  `).join('');
  return (
    <div style={{ overflow:'hidden', background: inv ? '#cc2424' : '#000',
      borderTop: inv ? 'none' : '1px solid rgba(204,36,36,0.1)',
      borderBottom: inv ? 'none' : '1px solid rgba(204,36,36,0.1)', padding:'13px 0' }}>
      <div className="marquee-track-slow">
        {[...Array(6)].map((_,i) => (
          <span key={i} style={{ fontSize:'0.62rem', fontWeight:800, letterSpacing:'0.18em',
            color: inv ? 'rgba(255,255,255,0.7)' : 'rgba(204,36,36,0.45)', whiteSpace:'nowrap' }}>
            {txt}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── hero pipeline svg ── */
const Pipeline = () => (
  <svg viewBox="0 0 420 340" fill="none" style={{ width:'100%', height:'100%', overflow:'visible' }}>
    <circle cx="210" cy="170" r="140" stroke="rgba(204,36,36,0.06)" strokeWidth="1" strokeDasharray="4 6"/>
    <g className="ring-rotate" style={{ transformOrigin:'210px 170px' }}>
      <circle cx="210" cy="170" r="140" stroke="rgba(204,36,36,0.18)" strokeWidth="0.8" strokeDasharray="22 400" strokeLinecap="round"/>
    </g>
    <g className="ring-rotate-rev" style={{ transformOrigin:'210px 170px' }}>
      <circle cx="210" cy="170" r="105" stroke="rgba(139,92,246,0.12)" strokeWidth="0.8" strokeDasharray="30 350" strokeLinecap="round"/>
    </g>
    <rect x="172" y="142" width="76" height="56" rx="3" stroke="#cc2424" strokeWidth="1.5" fill="rgba(204,36,36,0.08)"/>
    <rect x="180" y="150" width="60" height="12" rx="1" fill="rgba(204,36,36,0.18)"/>
    <text x="210" y="161" textAnchor="middle" fill="#cc2424" fontSize="7.5" fontWeight="800" letterSpacing="1.5">AI CORE</text>
    <rect x="180" y="168" width="38" height="3" rx="1" fill="rgba(204,36,36,0.1)"/>
    <rect x="180" y="175" width="25" height="3" rx="1" fill="rgba(204,36,36,0.07)"/>
    {[{y:80,label:'LIDAR',cy2:155},{y:170,label:'CAMERA',cy2:170},{y:260,label:'IMU',cy2:185}].map((n,i)=>(
      <g key={i}>
        <rect x="22" y={n.y-14} width="62" height="28" rx="2" stroke="rgba(204,36,36,0.35)" strokeWidth="1" fill="rgba(204,36,36,0.05)"/>
        <text x="53" y={n.y+5} textAnchor="middle" fill="rgba(200,200,200,0.65)" fontSize="6.8" fontWeight="700" letterSpacing="1">{n.label}</text>
        <line x1="84" y1={n.y} x2="172" y2={n.cy2} stroke="rgba(204,36,36,0.18)" strokeWidth="0.8" strokeDasharray="3 4"/>
        <circle r="2.5" fill="#cc2424" opacity="0.8">
          <animateMotion dur={`${2+i*0.7}s`} repeatCount="indefinite" path={`M 84 ${n.y} L 172 ${n.cy2}`}/>
        </circle>
      </g>
    ))}
    {[{y:90,label:'NAVIGATE',cy2:155},{y:170,label:'CONTROL',cy2:170},{y:250,label:'LEARN',cy2:185}].map((n,i)=>(
      <g key={i}>
        <rect x="336" y={n.y-14} width="72" height="28" rx="2" stroke="rgba(139,92,246,0.35)" strokeWidth="1" fill="rgba(139,92,246,0.05)"/>
        <text x="372" y={n.y+5} textAnchor="middle" fill="rgba(200,200,200,0.65)" fontSize="6.8" fontWeight="700" letterSpacing="1">{n.label}</text>
        <line x1="248" y1={n.cy2} x2="336" y2={n.y} stroke="rgba(139,92,246,0.18)" strokeWidth="0.8" strokeDasharray="3 4"/>
        <circle r="2.5" fill="#8b5cf6" opacity="0.8">
          <animateMotion dur={`${1.8+i*0.6}s`} repeatCount="indefinite" path={`M 248 ${n.cy2} L 336 ${n.y}`}/>
        </circle>
      </g>
    ))}
    <circle cx="210" cy="170" r="5" fill="#cc2424" opacity="0.9"/>
    <circle cx="210" cy="170" r="5">
      <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0;0.9" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="14" y="20" fill="rgba(204,36,36,0.25)" fontSize="6.5" fontFamily="monospace">33.5°N 73.1°E</text>
    <text x="310" y="330" fill="rgba(204,36,36,0.25)" fontSize="6.5" fontFamily="monospace">SYS.REV 2.4.1</text>
  </svg>
);

/* ════════════════════════════════
   HOME
════════════════════════════════ */
export default function Home() {

  /* parallax for hero heading */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const vizRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ background: '#000', color: '#f0f0f0', overflowX: 'hidden' }}>

      {/* ════════════════════════════════
          01 · HERO
      ════════════════════════════════ */}
      <section ref={heroRef} style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: 64 }}>
        <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
        <div style={{ position:'absolute', bottom:-120, left:-80, width:600, height:600, background:'radial-gradient(circle, rgba(204,36,36,0.06) 0%, transparent 65%)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', top:60, right:-60, width:380, height:380, background:'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents:'none' }}/>

        <div style={{ maxWidth:1400, margin:'0 auto', width:'100%', padding:'60px 40px', display:'grid', alignItems:'center', gap:40 }}
          className="lg:grid-cols-[1fr_400px]">

          {/* left */}
          <motion.div style={{ y: heroY }}>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              style={{ display:'flex', alignItems:'center', gap:16, marginBottom:44, flexWrap:'wrap' }}>
              <span className="terminal-text">EST. 2024</span>
              <span style={{ width:1, height:12, background:'rgba(204,36,36,0.3)' }}/>
              <span className="terminal-text">ISB · EGN · DXB</span>
              <span style={{ width:1, height:12, background:'rgba(204,36,36,0.3)' }}/>
              <span style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span className="pulse-dot" style={{ width:6, height:6 }}/>
                <span className="terminal-text">SYSTEMS ACTIVE</span>
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.75, delay:0.1 }}
              style={{ fontWeight:900, lineHeight:0.9, letterSpacing:'-0.04em', fontSize:'clamp(3.8rem, 9.5vw, 9rem)', margin:0, color:'#fff' }}>
              <span style={{ display:'block' }}>DESIGN&shy;ING</span>
              <span style={{ display:'block' }}>
                <Cycle words={['AUTONOMOUS','INTELLIGENT','ADAPTIVE','PRECISE']} />
              </span>
              <span style={{ display:'block' }}>MACHINES</span>
            </motion.h1>

            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.9, delay:0.45 }}
              style={{ height:1, background:'linear-gradient(90deg, #cc2424 60%, transparent)', margin:'32px 0', transformOrigin:'left' }}/>

            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6, delay:0.55 }}
              style={{ fontSize:'clamp(0.9rem, 1.4vw, 1.05rem)', color:'rgba(200,200,200,0.52)', lineHeight:1.75, maxWidth:500, margin:'0 0 40px' }}>
              Decom Robotics designs and builds intelligent robotic systems that amplify human potential, streamline complex workflows, and unlock new possibilities across industries.
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.7 }}
              style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <Link to="/contact" className="btn-red">
                Get in Touch
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link to="/about" className="btn-ghost">Learn More</Link>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.0 }}
              style={{ display:'flex', gap:36, marginTop:56, flexWrap:'wrap' }}>
              {[{v:'3',l:'Global Offices'},{v:'L4+',l:'Autonomy Level'},{v:'100%',l:'AI-Native'},{v:'24/7',l:'Operations'}].map((s,i) => (
                <div key={i}>
                  <div style={{ fontWeight:900, fontSize:'1.65rem', color:'#fff', letterSpacing:'-0.03em', lineHeight:1 }}>{s.v}</div>
                  <div style={{ fontSize:'0.58rem', fontWeight:700, letterSpacing:'0.16em', color:'rgba(204,36,36,0.6)', textTransform:'uppercase', marginTop:4 }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* right: viz */}
          <motion.div ref={vizRef} initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.1, delay:0.3 }}
            style={{ height:340 }} className="hidden lg:block">
            <Pipeline />
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
          style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:'0.52rem', letterSpacing:'0.3em', color:'rgba(204,36,36,0.4)', textTransform:'uppercase' }}>Scroll</span>
          <motion.div animate={{ y:[0,7,0] }} transition={{ repeat:Infinity, duration:1.4 }}
            style={{ width:1, height:32, background:'linear-gradient(180deg, #cc2424, transparent)' }}/>
        </motion.div>
      </section>

      <Tape />

      {/* ════════════════════════════════
          02 · ABOUT — editorial split, no cards
      ════════════════════════════════ */}
      <section style={{ background:'#000', padding:'0', position:'relative', overflow:'hidden' }}>

        {/* full-bleed heading strip */}
        <div style={{ background:'#0a0000', borderTop:'1px solid rgba(204,36,36,0.1)', borderBottom:'1px solid rgba(204,36,36,0.08)', padding:'28px 40px', display:'flex', alignItems:'center', gap:20, overflow:'hidden' }}>
          <span style={{ fontWeight:900, fontSize:'clamp(1.8rem, 4vw, 3.5rem)', color:'#fff', letterSpacing:'-0.04em', lineHeight:1, whiteSpace:'nowrap' }}>WHERE INNOVATION</span>
          <div style={{ flex:1, height:1, background:'linear-gradient(90deg, rgba(204,36,36,0.4), transparent)', minWidth:40 }}/>
          <span style={{ fontWeight:900, fontSize:'clamp(1.8rem, 4vw, 3.5rem)', color:'#cc2424', letterSpacing:'-0.04em', lineHeight:1, whiteSpace:'nowrap' }}>MEETS INTELLIGENCE</span>
        </div>

        {/* three-column body */}
        <div style={{ display:'grid', gridTemplateColumns:'80px 1fr', maxWidth:1400, margin:'0 auto', padding:'80px 40px 0' }} className="lg:grid-cols-[80px_1fr_380px]">

          {/* col 1: rotated label */}
          <div style={{ display:'flex', alignItems:'flex-start', paddingTop:8 }}>
            <div style={{ writingMode:'vertical-rl', transform:'rotate(180deg)', fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.3em', color:'rgba(204,36,36,0.35)', textTransform:'uppercase', whiteSpace:'nowrap' }}>
              About Decom Robotics
            </div>
          </div>

          {/* col 2: main text */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ paddingRight:40 }}>
            <p style={{ fontSize:'clamp(1.05rem, 1.8vw, 1.3rem)', color:'rgba(220,220,220,0.75)', lineHeight:1.8, marginBottom:28, fontWeight:400 }}>
              Decom Robotics is at the forefront of AI-driven robotics innovation. We design and build intelligent robotic systems that <em style={{ fontStyle:'normal', color:'#fff', fontWeight:600 }}>amplify human potential</em>, streamline complex workflows, and unlock new possibilities across industries.
            </p>
            <p style={{ fontSize:'1rem', color:'rgba(200,200,200,0.45)', lineHeight:1.8, marginBottom:40 }}>
              Our products integrate cutting-edge AI, advanced sensors, and precision engineering to deliver solutions that are not just smart — they're transformative. From industrial automation to intelligent assistants, we're building the future of robotics.
            </p>

            {/* tags */}
            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:36 }}>
              {[
                { icon:'◉', label:'AI-Powered', sub:'Intelligent systems' },
                { icon:'◈', label:'Innovation First', sub:'Cutting-edge tech' },
              ].map((t,i) => (
                <div key={i} style={{ padding:'14px 20px', border:'1px solid rgba(204,36,36,0.2)', background:'rgba(204,36,36,0.04)', display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontSize:'1.1rem', color:'#cc2424' }}>{t.icon}</span>
                  <div>
                    <div style={{ fontWeight:800, fontSize:'0.78rem', color:'#fff', letterSpacing:'0.05em' }}>{t.label}</div>
                    <div style={{ fontSize:'0.65rem', color:'rgba(204,36,36,0.5)', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:700 }}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-ghost">
              Learn More About Us →
            </Link>
          </motion.div>

          {/* col 3: image (desktop only) */}
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ position:'relative', alignSelf:'start' }} className="hidden lg:block">
            <div style={{ position:'relative', overflow:'hidden', border:'1px solid rgba(204,36,36,0.15)' }}>
              <img src={CompanyImage} alt="Decom Robotics" style={{ width:'100%', display:'block', filter:'brightness(0.7) contrast(1.1) grayscale(0.15)' }}/>
              <div className="scan-line"/>
              <div style={{ position:'absolute', top:10, left:10, width:18, height:18, borderTop:'1.5px solid #cc2424', borderLeft:'1.5px solid #cc2424' }}/>
              <div style={{ position:'absolute', top:10, right:10, width:18, height:18, borderTop:'1.5px solid #cc2424', borderRight:'1.5px solid #cc2424' }}/>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent, rgba(0,0,0,0.9))', padding:'30px 16px 16px' }}>
                <div style={{ fontWeight:800, fontSize:'0.75rem', color:'#fff', letterSpacing:'0.05em' }}>Decom Robotics Innovation Lab</div>
                <div style={{ fontSize:'0.58rem', color:'rgba(204,36,36,0.6)', letterSpacing:'0.15em', textTransform:'uppercase', fontWeight:700, marginTop:3 }}>Autonomous Systems Division</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          03 · VISION — staggered cascade (no cards)
      ════════════════════════════════ */}
      <section style={{ background:'#000', padding:'120px 40px 80px', position:'relative', overflow:'hidden' }}>

        {/* giant watermark */}
        <div style={{ position:'absolute', top:-20, right:-30, fontWeight:900, fontSize:'22vw', color:'rgba(204,36,36,0.025)', letterSpacing:'-0.06em', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
          VISION
        </div>

        <div style={{ maxWidth:1400, margin:'0 auto' }}>
          {/* header */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ marginBottom:80 }}>
            <div className="section-tag" style={{ marginBottom:16 }}>Our Vision</div>
            <h2 style={{ fontWeight:900, fontSize:'clamp(2rem, 4vw, 3.5rem)', letterSpacing:'-0.03em', color:'#fff', lineHeight:1, margin:0 }}>
              Building the Future<br/><span className="gradient-text">of Robotics</span>
            </h2>
          </motion.div>

          {/* cascade: each item at different horizontal offset */}
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {[
              {
                n:'01', offset:'0%',
                title:'AI-Driven Innovation',
                body:'Leveraging cutting-edge artificial intelligence to create robotics that learn, adapt, and evolve. Every system we build becomes smarter with each deployment cycle — not just programmed, but genuinely intelligent.',
                align:'left',
              },
              {
                n:'02', offset:'18%',
                title:'Real-World Impact',
                body:'Designing solutions that solve actual problems and make a tangible difference in people\'s lives. We measure success not in benchmarks but in operational efficiency gains and human hours saved.',
                align:'right',
              },
              {
                n:'03', offset:'8%',
                title:'Human-Centric Design',
                body:'Building technology that enhances human capabilities rather than replacing them. Our autonomous systems work alongside people — amplifying what humans do best while removing what machines do better.',
                align:'left',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, x: item.align === 'right' ? 40 : -40 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  marginLeft: item.align === 'left' ? `${item.offset}` : 'auto',
                  marginRight: item.align === 'right' ? '0' : 'auto',
                  paddingLeft: item.align === 'right' ? `${item.offset}` : '0',
                  maxWidth:'60%',
                  paddingTop: i === 0 ? 0 : 60,
                  paddingBottom: 60,
                  borderBottom: i < 2 ? '1px solid rgba(204,36,36,0.08)' : 'none',
                  position:'relative',
                }}
                className="max-w-full"
              >
                {/* large number watermark behind text */}
                <div style={{ position:'absolute', top:-20, left: item.align === 'right' ? 'auto' : -10, right: item.align === 'right' ? -10 : 'auto',
                  fontWeight:900, fontSize:'8rem', color:'rgba(204,36,36,0.04)', letterSpacing:'-0.06em', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
                  {item.n}
                </div>

                <div style={{ display:'flex', alignItems:'baseline', gap:16, marginBottom:16 }}>
                  <span style={{ fontWeight:800, fontSize:'0.6rem', letterSpacing:'0.2em', color:'#cc2424', textTransform:'uppercase' }}>{item.n}</span>
                  <div style={{ flex:1, height:1, background:'rgba(204,36,36,0.2)' }}/>
                </div>
                <h3 style={{ fontWeight:900, fontSize:'clamp(1.5rem, 2.8vw, 2.2rem)', color:'#fff', letterSpacing:'-0.02em', lineHeight:1.15, marginBottom:16 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize:'0.9rem', color:'rgba(200,200,200,0.48)', lineHeight:1.8, margin:0 }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          04 · CAPABILITIES — full-bleed bento
      ════════════════════════════════ */}
      <section style={{ background:'#000', padding:'0 0 0 0' }}>

        {/* full-width section label bar */}
        <div style={{ padding:'20px 40px', borderTop:'1px solid rgba(204,36,36,0.1)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div className="section-tag" style={{ marginBottom:4 }}>Our Capabilities</div>
            <h2 style={{ fontWeight:900, fontSize:'clamp(1.6rem, 3vw, 2.5rem)', letterSpacing:'-0.03em', color:'#fff', margin:0 }}>
              Advanced Robotics Technology
            </h2>
          </div>
          <p style={{ fontSize:'0.8rem', color:'rgba(200,200,200,0.4)', maxWidth:320, lineHeight:1.6, textAlign:'right' }} className="hidden md:block">
            Powered by next-generation AI and precision engineering — unmatched performance and reliability.
          </p>
        </div>

        {/* edge-to-edge bento — no container */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'auto auto', gap:1, background:'rgba(204,36,36,0.07)', margin:'1px 0' }}>

          {/* Tile A — AI Integration (2 col wide) */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            style={{ gridColumn:'1/3', gridRow:'1', background:'#080000', padding:'48px 40px', position:'relative', overflow:'hidden', minHeight:260 }}>
            <div style={{ position:'absolute', right:40, top:40, opacity:0.06 }}>
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <circle cx="80" cy="80" r="70" stroke="#cc2424" strokeWidth="1" strokeDasharray="4 4"/>
                <circle cx="80" cy="80" r="45" stroke="#cc2424" strokeWidth="1"/>
                <circle cx="80" cy="80" r="18" fill="#cc2424"/>
                {[0,72,144,216,288].map((deg,i) => {
                  const x = 80 + 70*Math.cos(deg*Math.PI/180), y = 80 + 70*Math.sin(deg*Math.PI/180);
                  return <g key={i}><line x1="80" y1="80" x2={x} y2={y} stroke="#cc2424" strokeWidth="0.5"/><circle cx={x} cy={y} r="4" fill="#cc2424"/></g>;
                })}
              </svg>
            </div>
            <div style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.25em', color:'#cc2424', textTransform:'uppercase', marginBottom:20, display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:20, height:1, background:'#cc2424' }}/>01 — AI Integration
            </div>
            <h3 style={{ fontWeight:900, fontSize:'clamp(1.5rem, 2.5vw, 2.2rem)', color:'#fff', letterSpacing:'-0.03em', lineHeight:1.15, marginBottom:16 }}>
              Deep Learning · Neural Networks<br/>Real-Time Decisions
            </h3>
            <p style={{ fontSize:'0.875rem', color:'rgba(200,200,200,0.48)', lineHeight:1.8, maxWidth:520, marginBottom:28 }}>
              Deep learning algorithms and neural networks enable our robots to learn, adapt, and make intelligent decisions in real-time environments — operating at the edge with sub-10ms inference.
            </p>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {['PyTorch','ONNX Runtime','TensorRT','Edge TPU','CUDA'].map(t => (
                <span key={t} style={{ fontSize:'0.58rem', fontWeight:800, letterSpacing:'0.12em', color:'rgba(204,36,36,0.65)', border:'1px solid rgba(204,36,36,0.18)', padding:'4px 10px', textTransform:'uppercase' }}>{t}</span>
              ))}
            </div>
            <Link to="/about" style={{ display:'inline-flex', alignItems:'center', gap:8, marginTop:28, fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(204,36,36,0.7)', textDecoration:'none' }}>
              Learn More →
            </Link>
          </motion.div>

          {/* Tile B — Autonomous Systems (tall right) */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true, margin:'-50px' }}
            style={{ gridColumn:'3', gridRow:'1/3', background:'#060008', padding:'48px 32px', display:'flex', flexDirection:'column', minHeight:440, position:'relative', overflow:'hidden' }}>
            <div style={{ marginBottom:32 }}>
              <svg viewBox="0 0 160 160" width="100%" height="140" fill="none">
                <g className="ring-rotate" style={{ transformOrigin:'80px 80px' }}>
                  <circle cx="80" cy="80" r="70" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" strokeDasharray="25 300" strokeLinecap="round"/>
                </g>
                <circle cx="80" cy="80" r="50" stroke="rgba(139,92,246,0.15)" strokeWidth="1" strokeDasharray="3 5"/>
                {[0,60,120,180,240,300].map((deg,i) => {
                  const r=70, x=80+r*Math.cos(deg*Math.PI/180), y=80+r*Math.sin(deg*Math.PI/180);
                  return <g key={i}><line x1="80" y1="80" x2={x} y2={y} stroke="rgba(139,92,246,0.12)" strokeWidth="0.6"/><circle cx={x} cy={y} r="4" fill="#8b5cf6" opacity="0.65"/></g>;
                })}
                <circle cx="80" cy="80" r="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1.2"/>
                <circle cx="80" cy="80" r="5" fill="#8b5cf6"/>
              </svg>
            </div>
            <div style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.25em', color:'#8b5cf6', textTransform:'uppercase', marginBottom:16, display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:20, height:1, background:'#8b5cf6' }}/>02 — Autonomous
            </div>
            <h3 style={{ fontWeight:900, fontSize:'1.35rem', color:'#fff', letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:14 }}>
              Self-Navigating, Self-Optimizing Systems
            </h3>
            <p style={{ fontSize:'0.8rem', color:'rgba(200,200,200,0.45)', lineHeight:1.7, flex:1 }}>
              Robotic systems that operate independently while maintaining precision and safety in complex scenarios. No hand-holding. No manual re-programming. Pure autonomy.
            </p>
            <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(139,92,246,0.1)' }}>
              <div style={{ fontWeight:900, fontSize:'2.5rem', color:'#8b5cf6', letterSpacing:'-0.04em', lineHeight:1 }}>L4+</div>
              <div style={{ fontSize:'0.58rem', color:'rgba(139,92,246,0.5)', textTransform:'uppercase', letterSpacing:'0.15em', fontWeight:700, marginTop:4 }}>Autonomy Level</div>
            </div>
            <Link to="/about" style={{ display:'inline-flex', alignItems:'center', gap:8, marginTop:20, fontSize:'0.65rem', fontWeight:800, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(139,92,246,0.7)', textDecoration:'none' }}>
              Learn More →
            </Link>
          </motion.div>

          {/* Tile C — Modular Design */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            style={{ gridColumn:'1', gridRow:'2', background:'#050000', padding:'36px 32px', position:'relative', overflow:'hidden' }}>
            <div style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.25em', color:'#cc2424', textTransform:'uppercase', marginBottom:16, display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:20, height:1, background:'#cc2424' }}/>03 — Modular
            </div>
            <h3 style={{ fontWeight:900, fontSize:'1.25rem', color:'#fff', letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:12 }}>
              Modular Design
            </h3>
            <p style={{ fontSize:'0.78rem', color:'rgba(200,200,200,0.45)', lineHeight:1.7, marginBottom:20 }}>
              Flexible, scalable robotics platforms that adapt to diverse applications from industrial automation to intelligent consumer products.
            </p>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              {['Manufacturing','Logistics','Inspection'].map(t => (
                <span key={t} style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.1em', color:'rgba(204,36,36,0.55)', border:'1px solid rgba(204,36,36,0.15)', padding:'3px 8px', textTransform:'uppercase' }}>{t}</span>
              ))}
            </div>
            <Link to="/about" style={{ display:'inline-flex', alignItems:'center', gap:8, marginTop:20, fontSize:'0.65rem', fontWeight:800, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(204,36,36,0.6)', textDecoration:'none' }}>
              Learn More →
            </Link>
          </motion.div>

          {/* Tile D — stat tile */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            style={{ gridColumn:'2', gridRow:'2', background:'#030308', padding:'36px 32px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div style={{ fontSize:'0.55rem', fontWeight:800, letterSpacing:'0.25em', color:'rgba(139,92,246,0.7)', textTransform:'uppercase', marginBottom:16, display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:20, height:1, background:'#8b5cf6' }}/>Performance
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:900, fontSize:'4rem', color:'#fff', letterSpacing:'-0.05em', lineHeight:1 }}>
                <Counter to={99} suffix=".9%"/>
              </div>
              <div style={{ fontSize:'0.65rem', fontWeight:800, letterSpacing:'0.18em', color:'rgba(139,92,246,0.6)', textTransform:'uppercase', marginTop:8, marginBottom:16 }}>Uptime SLA</div>
              <p style={{ fontSize:'0.75rem', color:'rgba(200,200,200,0.4)', lineHeight:1.6 }}>Enterprise-grade reliability across all deployed autonomous systems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          05 · DECOM ADVANTAGE — horizontal strip
      ════════════════════════════════ */}
      <section style={{ background:'#050000', borderTop:'1px solid rgba(204,36,36,0.1)', padding:'100px 40px' }}>
        <div style={{ maxWidth:1400, margin:'0 auto' }}>

          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ marginBottom:60 }}>
            <div className="section-tag" style={{ marginBottom:14 }}>The Decom Advantage</div>
            <div style={{ display:'flex', alignItems:'baseline', gap:24, flexWrap:'wrap' }}>
              <h2 style={{ fontWeight:900, fontSize:'clamp(2rem, 4vw, 3.5rem)', letterSpacing:'-0.03em', color:'#fff', margin:0, lineHeight:1 }}>
                Why Partner With Us
              </h2>
              <p style={{ fontSize:'0.85rem', color:'rgba(200,200,200,0.4)', maxWidth:340, lineHeight:1.6, margin:0 }}>
                What sets our robotics solutions apart in a rapidly evolving landscape.
              </p>
            </div>
          </motion.div>

          {/* Horizontal 4-col advantage strip */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, borderTop:'1px solid rgba(204,36,36,0.1)', borderLeft:'1px solid rgba(204,36,36,0.1)' }}>
            {[
              { n:'I',   title:'AI-First Approach',     body:'Every product built with artificial intelligence at its core, enabling adaptive, intelligent behavior across every deployment.' },
              { n:'II',  title:'Reliable & Secure',      body:'Enterprise-grade security and reliability standards ensure your operations run smoothly and safely — 99.9% uptime guaranteed.' },
              { n:'III', title:'Continuous Innovation',  body:'Regular updates and improvements keep your robotics systems at the cutting edge — software-defined hardware that gets smarter over time.' },
              { n:'IV',  title:'Expert Support',         body:'Dedicated technical support and consultation to maximize the value of your robotics investment from day one through every expansion.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding:'40px 32px', borderRight:'1px solid rgba(204,36,36,0.1)', borderBottom:'1px solid rgba(204,36,36,0.1)', position:'relative' }}>
                {/* Large Roman numeral */}
                <div style={{ fontWeight:900, fontSize:'4rem', color:'rgba(204,36,36,0.07)', letterSpacing:'-0.04em', lineHeight:1, marginBottom:24, fontFamily:'serif' }}>
                  {item.n}
                </div>
                <h3 style={{ fontWeight:800, fontSize:'1rem', color:'#fff', letterSpacing:'-0.01em', marginBottom:12, lineHeight:1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize:'0.78rem', color:'rgba(200,200,200,0.42)', lineHeight:1.75, margin:0 }}>
                  {item.body}
                </p>
                {/* accent corner */}
                <div style={{ position:'absolute', top:0, left:0, width:24, height:2, background:'#cc2424' }}/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Tape inv />

      {/* ════════════════════════════════
          06 · STATS — oversized numbers
      ════════════════════════════════ */}
      <section style={{ background:'#000', borderBottom:'1px solid rgba(204,36,36,0.08)', padding:'80px 40px', overflow:'hidden' }}>
        <div style={{ maxWidth:1400, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:0 }}>
            {[
              { to:3,   suf:'',   sub:'Global Offices',  desc:'Active across three continents' },
              { to:10,  suf:'ms', sub:'AI Latency',       desc:'Real-time edge inference' },
              { to:100, suf:'%',  sub:'AI-Native Stack',  desc:'Purpose-built for autonomy' },
            ].map((s,i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.12 }}
                style={{ padding:'40px', borderRight: i < 2 ? '1px solid rgba(204,36,36,0.08)' : 'none', position:'relative' }}>
                <div style={{ position:'absolute', top:0, left:40, width:30, height:2, background:'#cc2424' }}/>
                <div style={{ fontWeight:900, fontSize:'clamp(3.5rem, 6vw, 6.5rem)', letterSpacing:'-0.07em', lineHeight:1, color:'#fff', marginBottom:10 }}>
                  <Counter to={s.to} suffix={s.suf}/>
                </div>
                <div style={{ fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.2em', color:'#cc2424', textTransform:'uppercase', marginBottom:8 }}>{s.sub}</div>
                <div style={{ fontSize:'0.78rem', color:'rgba(200,200,200,0.38)', lineHeight:1.5 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          07 · CTA — "JOIN US ON OUR JOURNEY"
      ════════════════════════════════ */}
      <section style={{ background:'#000', padding:'130px 40px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 60% 50%, rgba(204,36,36,0.06) 0%, transparent 65%)', pointerEvents:'none' }}/>
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none"/>

        {/* ghost text background */}
        <div style={{ position:'absolute', bottom:-30, left:-20, fontWeight:900, fontSize:'18vw', color:'rgba(204,36,36,0.025)', letterSpacing:'-0.06em', lineHeight:1, pointerEvents:'none', userSelect:'none', whiteSpace:'nowrap' }}>
          JOIN US
        </div>

        <div style={{ maxWidth:1400, margin:'0 auto', display:'grid', gap:60, alignItems:'center' }} className="lg:grid-cols-[1fr_360px]">

          <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div className="section-tag" style={{ marginBottom:24 }}>Join the Journey</div>
            <h2 style={{ fontWeight:900, fontSize:'clamp(3rem, 7vw, 6.5rem)', letterSpacing:'-0.04em', lineHeight:0.92, color:'#fff', marginBottom:36 }}>
              JOIN US<br/>ON OUR<br/><span className="gradient-text">JOURNEY</span>
            </h2>
            <p style={{ fontSize:'1rem', color:'rgba(200,200,200,0.5)', lineHeight:1.8, maxWidth:480 }}>
              We're building the future of intelligent robotics. Be part of our story as we develop innovative solutions that will transform industries and enhance lives.
            </p>
          </motion.div>

          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <Link to="/contact" className="btn-red" style={{ fontSize:'0.8rem', padding:'18px 36px', justifyContent:'center' }}>
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/about" className="btn-ghost" style={{ fontSize:'0.8rem', padding:'17px 36px', justifyContent:'center' }}>
              Learn More
            </Link>
            <div style={{ paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.05)' }}>
              <a href="mailto:info@decomrobotics.com" style={{ fontSize:'0.72rem', color:'rgba(204,36,36,0.55)', textDecoration:'none', letterSpacing:'0.05em', display:'flex', alignItems:'center', gap:8, transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#cc2424')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(204,36,36,0.55)')}>
                <span>◉</span> info@decomrobotics.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
