'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Главная', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>' },
  { href: '/search', label: 'Поиск', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' },
  { href: '/kstudio', label: 'Студии с кадастром', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>' },
  { href: '/dstudio', label: 'Долевые студии', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
  { href: '/law', label: 'Закон', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
  { href: '/about', label: 'О компании', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>' },
  { href: '/contacts', label: 'Контакты', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>' },
  { href: '/calculator', label: 'Калькулятор', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4M8 18h4"/></svg>' },
  { href: '/account', label: 'Личный кабинет', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' },
  { href: '/login', label: 'Вход', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>' },
  { href: '/register', label: 'Регистрация', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' },
  { href: '/faq', label: 'FAQ', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
  { href: '/reviews', label: 'Отзывы', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' },
  { href: '/blog', label: 'Блог', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>' },
  { href: '/careers', label: 'Вакансии', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>' },
  { href: '/partners', label: 'Партнёрам', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>' },
  { href: '/policy', label: 'Политика', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { href: '/agreement', label: 'Соглашение', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  const iconMap = {};
  links.forEach(l => {
    iconMap[l.label] = l.icon;
  });

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '1px solid rgba(0,212,255,0.15)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    letterSpacing: '2px',
  };

  const burgerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '28px',
    height: '22px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 1100,
  };

  const lineBase = {
    width: '100%',
    height: '2px',
    background: '#00d4ff',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    zIndex: 999,
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
  };

  const menuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '320px',
    maxWidth: '90vw',
    height: '100vh',
    background: '#0a0a0f',
    borderLeft: '1px solid rgba(0,212,255,0.15)',
    zIndex: 1000,
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
    overflowY: 'auto',
    padding: '80px 20px 40px',
  };

  const linkItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    color: '#b0b8c5',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    marginBottom: '4px',
  };

  const linkHoverStyle = {
    background: 'rgba(0,212,255,0.08)',
    color: '#fff',
    boxShadow: '0 0 15px rgba(0,212,255,0.2)',
  };

  return (
    <>
      <nav style={navStyle}>
        <Link href="/" style={logoStyle}>АЛЬТСТУДИЯ</Link>
        <button
          style={burgerStyle}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span style={{ ...lineBase, transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...lineBase, opacity: open ? 0 : 1 }} />
          <span style={{ ...lineBase, transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>
      <div style={overlayStyle} onClick={() => setOpen(false)} />
      <div style={menuStyle}>
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            style={linkItemStyle}
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, linkHoverStyle);
            }}
            onMouseLeave={e => {
              Object.assign(e.currentTarget.style, linkItemStyle);
            }}
            onClick={() => setOpen(false)}
          >
            <span dangerouslySetInnerHTML={{ __html: link.icon }} />
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
