'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика регистрации будет добавлена позже
  };

  return (
    <main style={{ paddingTop: '120px', maxWidth: '500px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '40px' }}>
        Регистрация
      </h1>
      <form onSubmit={handleSubmit} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '40px', border: '1px solid rgba(0,212,255,0.1)' }}>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required
          style={{ width: '100%', padding: '14px 16px', marginBottom: '16px', background: 'rgba(10,10,15,0.6)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '8px', color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => e.currentTarget.style.borderColor = '#00d4ff'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
        />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required
          style={{ width: '100%', padding: '14px 16px', marginBottom: '16px', background: 'rgba(10,10,15,0.6)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '8px', color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => e.currentTarget.style.borderColor = '#00d4ff'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
        />
        <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required
          style={{ width: '100%', padding: '14px 16px', marginBottom: '20px', background: 'rgba(10,10,15,0.6)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '8px', color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => e.currentTarget.style.borderColor = '#00d4ff'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
        />
        <button type="submit"
          style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #00d4ff, #66fcf1)', color: '#0a0a0f', border: 'none', borderRadius: '8px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '1px', marginBottom: '16px' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.4)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          Зарегистрироваться
        </button>
        <div style={{ textAlign: 'center' }}>
          <Link href="/login" style={{ color: '#00d4ff', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', textDecoration: 'none' }}>Уже есть аккаунт? Войти</Link>
        </div>
      </form>
    </main>
  );
}
