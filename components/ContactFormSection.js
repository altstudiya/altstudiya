'use client';

import { useState } from 'react';

const styles = {
  section: {
    padding: '80px 20px',
    maxWidth: '800px',
    margin: '0 auto',
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
    marginBottom: '20px',
  },
  subtitle: {
    color: '#b0b8c5',
    textAlign: 'center',
    fontSize: '1.1rem',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '40px',
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
    fontWeight: 500,
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
  textarea: {
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
    minHeight: '120px',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '16px',
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
  success: {
    textAlign: 'center',
    color: '#66fcf1',
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    padding: '20px',
  },
  error: {
    textAlign: 'center',
    color: '#ff4444',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    padding: '10px',
  },
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('message', formData.message);

      const res = await fetch('https://formsubmit.co/ajax/altstudiya@inbox.ru', {
        method: 'POST',
        body: form,
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Свяжитесь с нами</h2>
      <p style={styles.subtitle}>
        Оставьте заявку, и мы свяжемся с вами в ближайшее время
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="Новая заявка с Альтстудия" />
        <input type="hidden" name="_captcha" value="false" />

        <div style={styles.inputGroup}>
          <label style={styles.label}>Имя</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
            onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Телефон</label>
          <input
            style={styles.input}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
            onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Сообщение</label>
          <textarea
            style={styles.textarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите ваш вопрос..."
            required
            onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
          />
        </div>

        <button
          type="submit"
          style={styles.button}
          disabled={status === 'loading'}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'none';
          }}
        >
          {status === 'loading' ? 'Отправка...' : 'Отправить'}
        </button>

        {status === 'success' && (
          <p style={styles.success}>✓ Сообщение отправлено! Мы свяжемся с вами.</p>
        )}
        {status === 'error' && (
          <p style={styles.error}>✗ Ошибка отправки. Попробуйте позже.</p>
        )}
      </form>
    </section>
  );
}