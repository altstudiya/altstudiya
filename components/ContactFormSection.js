'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/altstudiya@inbox.ru', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '700px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '40px',
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const formStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid rgba(0,212,255,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    marginBottom: '16px',
    background: 'rgba(10,10,15,0.6)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
  };

  const btnStyle = {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    border: 'none',
    borderRadius: '8px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
  };

  const statusStyle = {
    textAlign: 'center',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    marginTop: '16px',
    padding: '12px',
    borderRadius: '8px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Свяжитесь с нами</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#00d4ff'; }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#00d4ff'; }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#00d4ff'; }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; }}
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          required
          style={textareaStyle}
          onFocus={e => { e.currentTarget.style.borderColor = '#00d4ff'; }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; }}
        />
        <button
          type="submit"
          style={btnStyle}
          disabled={status === 'sending'}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          {status === 'sending' ? 'Отправка...' : 'Отправить'}
        </button>
        {status === 'success' && (
          <div style={{ ...statusStyle, background: 'rgba(102,252,241,0.1)', color: '#66fcf1', border: '1px solid rgba(102,252,241,0.3)' }}>
            Сообщение отправлено! Мы свяжемся с вами в ближайшее время.
          </div>
        )}
        {status === 'error' && (
          <div style={{ ...statusStyle, background: 'rgba(255,0,0,0.1)', color: '#ff4444', border: '1px solid rgba(255,0,0,0.3)' }}>
            Ошибка отправки. Попробуйте позже.
          </div>
        )}
      </form>
    </section>
  );
}
