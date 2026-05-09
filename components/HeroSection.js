'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [pulseBrightness, setPulseBrightness] = useState(1);

  useEffect(() => {
    let increasing = true;
    const interval = setInterval(() => {
      setPulseBrightness(prev => {
        if (increasing) {
          if (prev >= 1.3) {
            increasing = false;
            return prev - 0.02;
          }
          return prev + 0.02;
        } else {
          if (prev <= 1) {
            increasing = true;
            return prev + 0.02;
          }
          return prev - 0.02;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 20px',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(3rem, 10vw, 7rem)',
    fontWeight: 900,
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '8px',
    marginBottom: '20px',
    filter: `brightness(${pulseBrightness})`,
    lineHeight: 1.1,
    transition: 'filter 0.05s ease',
  };

  const subtitleStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    color: '#b0b8c5',
    marginBottom: '8px',
    fontWeight: 300,
    letterSpacing: '2px',
  };

  const accentSubtitleStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    color: '#66fcf1',
    marginBottom: '40px',
    fontWeight: 300,
    letterSpacing: '1px',
  };

  const btnRowStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const btnBase = {
    padding: '16px 32px',
    borderRadius: '8px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '1px',
  };

  const btnPrimary = {
    ...btnBase,
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
  };

  const btnSecondary = {
    ...btnBase,
    background: 'transparent',
    color: '#00d4ff',
    border: '1px solid #00d4ff',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>АЛЬТСТУДИЯ</h1>
      <p style={subtitleStyle}>Вход в недвижимость.</p>
      <p style={accentSubtitleStyle}>Без переплат за воздух.</p>
      <div style={btnRowStyle}>
        <Link
          href="/kstudio"
          style={btnPrimary}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 25px rgba(0,212,255,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          Студии с кадастром
        </Link>
        <Link
          href="/dstudio"
          style={btnSecondary}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)'; e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'transparent'; }}
        >
          Долевые студии
        </Link>
        <Link
          href="/law"
          style={btnSecondary}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)'; e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'transparent'; }}
        >
          Что говорит закон
        </Link>
      </div>
    </section>
  );
}
