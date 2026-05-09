'use client';

import Link from 'next/link';

export default function Footer() {
  const footerStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderTop: '1px solid rgba(0,212,255,0.1)',
    padding: '60px 20px 30px',
    marginTop: '80px',
  };

  const innerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
  };

  const logoStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '2px',
    marginBottom: '16px',
  };

  const columnTitleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const linkStyle = {
    display: 'block',
    color: '#b0b8c5',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  };

  const socialRow = {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
  };

  const socialIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(0,212,255,0.1)',
    border: '1px solid rgba(0,212,255,0.2)',
    color: '#00d4ff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    textAlign: 'center',
    color: '#6a7280',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  };

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/search', label: 'Поиск' },
    { href: '/kstudio', label: 'Студии с кадастром' },
    { href: '/dstudio', label: 'Долевые студии' },
    { href: '/law', label: 'Закон' },
    { href: '/about', label: 'О компании' },
    { href: '/contacts', label: 'Контакты' },
    { href: '/calculator', label: 'Калькулятор' },
    { href: '/blog', label: 'Блог' },
    { href: '/faq', label: 'FAQ' },
  ];

  const contactLinks = [
    { href: 'tel:+74951234567', label: '+7 (495) 123-45-67' },
    { href: 'mailto:altstudiya@inbox.ru', label: 'altstudiya@inbox.ru' },
    { href: '#', label: 'г. Москва, ул. Примерная, д. 1' },
  ];

  const legalLinks = [
    { href: '/policy', label: 'Политика конфиденциальности' },
    { href: '/agreement', label: 'Пользовательское соглашение' },
    { href: '/partners', label: 'Партнёрам' },
    { href: '/careers', label: 'Вакансии' },
  ];

  const socialLinks = [
    { href: '#', label: 'Telegram', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' },
    { href: '#', label: 'WhatsApp', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' },
    { href: '#', label: 'VK', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C3.064 0 0 3.064 0 8.316v7.368C0 20.936 3.064 24 8.316 24h7.368C20.936 24 24 20.936 24 15.684V8.316C24 3.064 20.936 0 15.684 0zm3.6 16.965h-1.753c-.66 0-.864-.516-2.013-1.68-1.02-1.02-1.476-1.152-1.728-1.152-.348 0-.456.108-.456.648v1.536c0 .468-.144.648-1.296.648-1.92 0-4.044-1.176-5.532-3.372-1.896-2.628-2.412-4.584-2.412-4.992 0-.204.096-.384.396-.384h1.752c.408 0 .564.18.72.612.792 2.052 2.112 3.864 2.652 3.864.204 0 .3-.096.3-.624v-2.46c0-1.008-.588-1.092-.588-1.452 0-.168.144-.324.372-.324h2.784c.312 0 .42.156.42.492v2.664c0 .312.144.42.252.42.204 0 .372-.108.588-.324.84-.936 1.44-2.388 1.44-2.388.072-.192.216-.36.504-.36h1.752c.528 0 .648.264.528.612-.216.708-2.148 3.288-2.148 3.288-.192.276-.24.408 0 .672.168.228.732.708 1.104 1.128.684.756 1.212 1.392 1.368 1.824.156.432-.084.648-.528.648z"/></svg>' },
    { href: '#', label: 'YouTube', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
  ];

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div>
          <div style={logoStyle}>АЛЬТСТУДИЯ</div>
          <p style={{ color: '#6a7280', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', lineHeight: 1.6 }}>
            Ваш надёжный партнёр в мире долевой недвижимости. Прозрачно, честно, выгодно.
          </p>
          <div style={socialRow}>
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                style={socialIconStyle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,212,255,0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,212,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: s.icon }} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={columnTitleStyle}>Навигация</div>
          {navLinks.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#b0b8c5'; }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <div style={columnTitleStyle}>Контакты</div>
          {contactLinks.map((l, i) => (
            <a
              key={i}
              href={l.href}
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#b0b8c5'; }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <div style={columnTitleStyle}>Юридическая информация</div>
          {legalLinks.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#b0b8c5'; }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={copyrightStyle}>© 2026 Альтстудия</div>
    </footer>
  );
}
