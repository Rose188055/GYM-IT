import { useState } from 'react';

const NAV_LINKS = ['Features', 'How It Works', 'Stats', 'Get Started'];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.5 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" strokeLinecap="round"/>
        <path d="M4 19c0-3.314 3.582-6 8-6s8 2.686 8 6" strokeLinecap="round"/>
        <circle cx="12" cy="5" r="1" fill="currentColor"/>
        <path d="M9 12l1.5 2 3-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Pose Estimation',
    desc: 'Advanced body-joint tracking maps your skeleton in real time using only your device camera — no wearables required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 9v4l2 2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3v2M12 19v2M3 12H5M19 12h2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Instant Form Warnings',
    desc: 'Visual and audio alerts fire the moment your posture deviates — protecting your joints before pain sets in.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M8 12h8M12 8v8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Auto Rep Counting',
    desc: 'The system detects full range-of-motion cycles and tallies your reps automatically — no clickers, no guessing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 17l4-4 4 4 4-8 4 4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="20" height="18" rx="2"/>
      </svg>
    ),
    title: 'Progress Tracking',
    desc: 'Visual dashboards surface your volume, frequency, and form-accuracy trends week over week.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Exercise History',
    desc: 'Every session is logged with timestamps, rep counts, and form scores so you can review your full fitness journey.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Beginner Guidance',
    desc: 'Curated starter programs with annotated technique cues walk first-timers through every movement safely.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Point Your Camera',
    desc: 'Open GYM-IT on any device with a front-facing or webcam. Position yourself so your full body is visible.',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=480&h=320&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Pick Your Exercise',
    desc: 'Choose from our exercise library or follow a beginner program. The AI initialises your pose baseline instantly.',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=480&h=320&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'Train With Feedback',
    desc: 'GYM-IT counts reps, warns on bad form, and saves your session data — all hands-free while you focus on training.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=480&h=320&fit=crop&auto=format',
  },
];

const STATS = [
  { value: '17+', label: 'Exercises Detected' },
  { value: '<50ms', label: 'Feedback Latency' },
  { value: '94%', label: 'Pose Accuracy' },
  { value: '0 kg', label: 'Equipment Needed' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#080808', color: '#fff' }}>

      {/* ─── NAVBAR ─── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(8,8,8,0.85)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#C8F135', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="#080808" strokeWidth="2.5">
                <path d="M6.5 6.5h11M6.5 17.5h11M12 6.5v11" strokeLinecap="round"/>
                <circle cx="6.5" cy="6.5" r="2"/>
                <circle cx="17.5" cy="6.5" r="2"/>
                <circle cx="6.5" cy="17.5" r="2"/>
                <circle cx="17.5" cy="17.5" r="2"/>
              </svg>
            </div>
            <span className="font-display" style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '0.05em', color: '#fff' }}>GYM<span style={{ color: '#C8F135' }}>-IT</span></span>
          </div>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', color: '#888', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C8F135')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#888')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#get-started"
            className="hidden-mobile"
            style={{
              padding: '9px 22px',
              border: '1px solid #C8F135',
              borderRadius: '3px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#C8F135',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C8F135'; e.currentTarget.style.color = '#080808'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C8F135'; }}
          >
            Try Free
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0d0d0d', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: '15px', fontWeight: 500, color: '#ccc', textDecoration: 'none', letterSpacing: '0.04em' }}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '64px',
        }}
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop&auto=format"
            alt="Person training in gym"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 40%, rgba(8,8,8,0.6) 75%, rgba(8,8,8,0.3) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,1) 0%, transparent 50%)' }} />
        </div>

        {/* Accent grid lines */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'linear-gradient(rgba(200,241,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,241,53,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Headline */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(60px, 10vw, 110px)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                marginBottom: '28px',
                color: '#fff',
              }}
            >
              Train<br />
              <span style={{ color: '#C8F135' }}>Smarter.</span><br />
              Move<br />
              Safer.
            </h1>

            {/* Subhead */}
            <p style={{ fontSize: '17px', lineHeight: 1.65, color: '#999', maxWidth: '480px', marginBottom: '44px', fontWeight: 300 }}>
              GYM-IT uses your camera and real-time pose estimation to count reps, detect form errors, and coach you — no trainer, no gym, no gear.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="#get-started"
                style={{
                  display: 'inline-block',
                  padding: '16px 36px',
                  backgroundColor: '#C8F135',
                  color: '#080808',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 24px rgba(200,241,53,0.25)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(200,241,53,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 24px rgba(200,241,53,0.25)'; }}
              >
                Start Training Free
              </a>
              <a
                href="#how-it-works"
                style={{
                  display: 'inline-block',
                  padding: '16px 36px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #C8F135, transparent)' }} />
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section id="stats" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#0d0d0d' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '40px 32px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderLeft: i === 0 ? '2px solid #C8F135' : 'none',
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: '52px', fontWeight: 900, color: '#C8F135', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section label */}
          <div style={{ marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8F135', marginBottom: '16px' }}>
              Core Capabilities
            </span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', color: '#fff', letterSpacing: '-0.01em' }}
              >
                Everything<br />You Need<br />
                <span style={{ color: '#C8F135' }}>To Train Right</span>
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#777', maxWidth: '320px', fontWeight: 300 }}>
                Built for beginners. Trusted by athletes. Powered by computer vision that runs entirely on your device.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} className="feature-grid">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  backgroundColor: '#080808',
                  padding: '44px 36px',
                  border: '1px solid transparent',
                  cursor: 'default',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,241,53,0.3)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLDivElement).style.zIndex = '1';
                  (e.currentTarget as HTMLDivElement).style.position = 'relative';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                  (e.currentTarget as HTMLDivElement).style.zIndex = '0';
                }}
              >
                <div style={{ color: '#C8F135', marginBottom: '20px' }}>{f.icon}</div>
                <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#777', fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" style={{ padding: '120px 0', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '72px', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8F135', display: 'block', marginBottom: '16px' }}>
              The Process
            </span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', color: '#fff' }}
            >
              Up And Running<br />
              <span style={{ color: '#C8F135' }}>In 3 Steps</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
                  <img
                    src={step.img}
                    alt={step.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)' }} />
                  {/* Step number overlay */}
                  <div
                    className="font-display"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      fontSize: '13px',
                      fontWeight: 900,
                      letterSpacing: '0.05em',
                      color: '#C8F135',
                      backgroundColor: 'rgba(8,8,8,0.7)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                {/* Text */}
                <div>
                  {/* Divider accent */}
                  <div style={{ width: '32px', height: '2px', backgroundColor: '#C8F135', marginBottom: '14px' }} />
                  <h3
                    className="font-display"
                    style={{ fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', color: '#fff', letterSpacing: '0.02em', marginBottom: '10px' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#777', fontWeight: 300 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / WHY ─── */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="why-grid">
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&h=875&fit=crop&auto=format"
                alt="Athlete checking form in mirror"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,241,53,0.08) 0%, transparent 60%)' }} />
            </div>
            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '-24px',
              backgroundColor: '#C8F135',
              padding: '28px 32px',
              borderRadius: '4px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div className="font-display" style={{ fontSize: '52px', fontWeight: 900, color: '#080808', lineHeight: 1, letterSpacing: '-0.02em' }}>82%</div>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3a4a00', marginTop: '4px' }}>of gym injuries<br />are form-related</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8F135', display: 'block', marginBottom: '20px' }}>
              Why It Matters
            </span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', color: '#fff', marginBottom: '28px' }}
            >
              Bad Form Kills<br />
              <span style={{ color: '#C8F135' }}>Gains &<br />Causes Injury</span>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#888', marginBottom: '20px', fontWeight: 300 }}>
              Most beginners train alone with only videos for guidance. Videos can't see you. Personal trainers are expensive and unavailable 24/7. The result? Millions of preventable injuries every year.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#888', marginBottom: '40px', fontWeight: 300 }}>
              GYM-IT closes this gap by giving everyone access to intelligent, always-on form coaching — built on the same computer vision principles used in elite sports analytics.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Real-time corrections, not post-workout reviews',
                'Works on any smartphone or laptop camera',
                'No subscription required to get started',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(200,241,53,0.12)', border: '1px solid rgba(200,241,53,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10" stroke="#C8F135" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '14px', color: '#bbb', fontWeight: 400 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section id="get-started" style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* BG accent */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(200,241,53,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8F135', display: 'block', marginBottom: '20px' }}>
            Get Started
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', color: '#fff', marginBottom: '24px' }}
          >
            Your Personal<br />
            Trainer Lives<br />
            <span style={{ color: '#C8F135' }}>In Your Camera</span>
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#777', maxWidth: '500px', margin: '0 auto 48px', fontWeight: 300 }}>
            Train anytime, anywhere — with instant feedback that keeps you safe, consistent, and progressing toward your fitness goals.
          </p>

          {/* Email input */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto', borderRadius: '3px', overflow: 'hidden', border: '1px solid rgba(200,241,53,0.3)' }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '16px 20px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
            
<button
  type="submit"
  onClick={async () => {
    try {
      await fetch('http://localhost:3001/learn-more', {
        method: 'POST',
      });
      console.log('Get Access click recorded!');
    } catch (error) {
      console.error('Could not record click:', error);
    }
  }}
  style={{
    padding: '16px 28px',
    backgroundColor: '#C8F135',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#080808',
    fontFamily: 'Inter, sans-serif',
    flexShrink: 0,
    transition: 'background-color 0.2s',
  }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d4f545';
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C8F135';
  }}
>
  Get Access
</button>

          </form>
          <p style={{ fontSize: '12px', color: '#555', marginTop: '14px' }}>Free to use. No credit card required.</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: '#C8F135', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16" stroke="#080808" strokeWidth="2.5">
                <path d="M6.5 6.5h11M6.5 17.5h11M12 6.5v11" strokeLinecap="round"/>
                <circle cx="6.5" cy="6.5" r="2"/>
                <circle cx="17.5" cy="6.5" r="2"/>
                <circle cx="6.5" cy="17.5" r="2"/>
                <circle cx="17.5" cy="17.5" r="2"/>
              </svg>
            </div>
            <span className="font-display" style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em' }}>GYM<span style={{ color: '#C8F135' }}>-IT</span></span>
          </div>

          <p style={{ fontSize: '12px', color: '#444', letterSpacing: '0.04em' }}>
            © 2026 GYM-IT · A Workout Guidance and Form Correction System
          </p>

          <div style={{ display: 'flex', gap: '28px' }}>
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: '12px', color: '#555', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C8F135'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
