'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(10,10,15,0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,212,255,0.1)',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
  },
  logo: {
    fontSize: '24px',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  burgerButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    zIndex: 1001,
    transition: 'transform 0.3s',
  },
  burgerLine: {
    width: '28px',
    height: '3px',
    backgroundColor: '#00d4ff',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 998,
  },
  menu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '320px',
    maxWidth: '90vw',
    height: '100vh',
    backgroundColor: 'rgba(18,20,28,0.98)',
    backdropFilter: 'blur(15px)',
    zIndex: 999,
    overflowY: 'auto',
    padding: '80px 20px 40px',
    transition: 'transform 0.3s',
    boxShadow: '-5px 0 30px rgba(0,212,255,0.2)',
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    color: '#b0b8c5',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  linkItemHover: {
    backgroundColor: 'rgba(0,212,255,0.1)',
    color: '#00d4ff',
    boxShadow: '0 0 15px rgba(0,212,255,0.2)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(0,212,255,0.1)',
    margin: '8px 0',
  },
};

const links = [
  { href: '/', label: 'Главная', icon: 'home' },
  { href: '/search', label: 'Поиск', icon: 'search' },
  { href: '/kstudio', label: 'Студии с кадастром', icon: 'kadastr' },
  { href: '/dstudio', label: 'Долевые студии', icon: 'building' },
  { href: '/law', label: 'Закон', icon: 'law' },
  { href: '/about', label: 'О компании', icon: 'info' },
  { href: '/contacts', label: 'Контакты', icon: 'phone' },
  { href: '/calculator', label: 'Калькулятор', icon: 'calc' },
  { href: '/account', label: 'Личный кабинет', icon: 'user' },
  { href: '/login', label: 'Вход', icon: 'login' },
  { href: '/register', label: 'Регистрация', icon: 'register' },
  { href: '/faq', label: 'FAQ', icon: 'faq' },
  { href: '/reviews', label: 'Отзывы', icon: 'star' },
  { href: '/blog', label: 'Блог', icon: 'blog' },
  { href: '/careers', label: 'Вакансии', icon: 'briefcase' },
  { href: '/partners', label: 'Партнёрам', icon: 'handshake' },
  { href: '/policy', label: 'Политика', icon: 'lock' },
  { href: '/agreement', label: 'Соглашение', icon: 'file' },
];

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconKadastr = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
  </svg>
);

const IconLaw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconCalc = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10.01" />
    <line x1="12" y1="10" x2="12" y2="10.01" />
    <line x1="16" y1="10" x2="16" y2="10.01" />
    <line x1="8" y1="14" x2="8" y2="14.01" />
    <line x1="12" y1="14" x2="12" y2="14.01" />
    <line x1="16" y1="14" x2="16" y2="14.01" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconLogin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

const IconRegister = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const IconFaq = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconBlog = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconHandshake = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const IconLock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconFile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const iconComponents = {
  home: IconHome,
  search: IconSearch,
  kadastr: IconKadastr,
  building: IconBuilding,
  law: IconLaw,
  info: IconInfo,
  phone: IconPhone,
  calc: IconCalc,
  user: IconUser,
  login: IconLogin,
  register: IconRegister,
  faq: IconFaq,
  star: IconStar,
  blog: IconBlog,
  briefcase: IconBriefcase,
  handshake: IconHandshake,
  lock: IconLock,
  file: IconFile,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <header style={styles.header}>
        <Link href="/" style={styles.logo}>АЛЬТСТУДИЯ</Link>
        <button
          style={styles.burgerButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span style={{
            ...styles.burgerLine,
            transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
          }} />
          <span style={{
            ...styles.burgerLine,
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            ...styles.burgerLine,
            transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
          }} />
        </button>
      </header>

      {isOpen && (
        <div style={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      <div ref={menuRef} style={{
        ...styles.menu,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      }}>
        {links.map((link, index) => {
          const IconComponent = iconComponents[link.icon];
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                ...styles.linkItem,
                ...(hoveredIndex === index ? styles.linkItemHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setIsOpen(false)}
            >
              {IconComponent && <IconComponent />}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}