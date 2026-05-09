'use client';

import { useState } from 'react';
import Link from 'next/link';

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '500px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#b0b8c5',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '30px',
  },
  form: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid rgba(0,212,255,0.1)',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    color: '#b0b8c5',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(10,10,15,0.5)',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginTop: '10px',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    color: '#00d4ff',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    cursor: 'pointer',
  },
  success: {
    textAlign: 'center',
    color: '#66fcf1',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    marginTop: '16px',
  },
};

export default function PasswordResetPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Сброс пароля</h1>
      <p style={styles.subtitle}>Введите email для восстановления доступа</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Отправить
        </button>
        {sent && (
          <p style={styles.success}>✓ Инструкция по сбросу пароля отправлена на ваш email</p>
        )}
        <Link href="/login" style={styles.link}>Вернуться ко входу</Link>
      </form>
    </main>
  );
}