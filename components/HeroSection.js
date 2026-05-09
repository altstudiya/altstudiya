'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(3rem, 10vw, 7rem)',
    fontWeight: 900,
    letterSpacing: '0.05em',
    marginBottom: '10px',
    transition: 'filter 0.5s ease',
  },
  subtitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontWeight: 300,
    color: '#b0b8c5',
    marginBottom: '8px',
    letterSpacing: '0.1em',
  },
  subtitleAccent: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontWeight: 300,
    color: '#66fcf1',
    marginBottom: '40px',
    letterSpacing: '0.1em',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: '16px 32px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.3)',
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  buttonPrimary: {
    padding: '16px 32px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
};

export default function HeroSection() {
  const [brightness, setBrightness] = useState(1);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrightness((prev) => {
        const next = prev + direction * 0.02;
        if (next >= 1.3) {
          setDirection(-1);
          return 1.3;
        }
        if (next <= 0.8) {
          setDirection(1);
          return 0.8;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section style={styles.section}>
      <h1
        style={{
          ...styles.title,
          background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: `brightness(${brightness})`,
        }}
      >
        АЛЬТСТУДИЯ
      </h1>
      <p style={styles.subtitle}>Вход в недвижимость.</p>
      <p style={styles.subtitleAccent}>Без переплат за воздух.</p>
      <div style={styles.buttonContainer}>
        <Link
          href="/kstudio"
          style={styles.buttonPrimary}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Студии с кадастром
        </Link>
        <Link
          href="/dstudio"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
            e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.15)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.backgroundColor = 'rgba(18,20,28,0.7)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Долевые студии
        </Link>
        <Link
          href="/law"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
            e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.15)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.backgroundColor = 'rgba(18,20,28,0.7)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Что говорит закон
        </Link>
      </div>
    </section>
  );
}