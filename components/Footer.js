'use client';

import Link from 'next/link';

const styles = {
  footer: {
    backgroundColor: '#0a0a0f',
    borderTop: '1px solid rgba(0,212,255,0.1)',
    padding: '60px 20px 30px',
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px',
    display: 'block',
    textDecoration: 'none',
  },
  description: {
    color: '#b0b8c5',
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  columnTitle: {
    color: '#00d4ff',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '16px',
  },
  link: {
    display: 'block',
    color: '#b0b8c5',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '4px 0',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  socialContainer: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  copyright: {
    textAlign: 'center',
    color: '#555',
    fontSize: '13px',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
};

const IconTelegram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4ff">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4ff">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const IconVK = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4ff">
    <path d="M15.684 0H8.316C3.732 0 0 3.732 0 8.316v7.368C0 20.268 3.732 24 8.316 24h7.368C20.268 24 24 20.268 24 15.684V8.316C24 3.732 20.268 0 15.684 0zm3.6 16.848h-1.584c-.792 0-.972-.528-2.304-1.872-1.152-1.104-1.632-.24-1.632.768v1.104c0 .576-.288.864-1.008.864H10.8c-2.112 0-4.08-1.296-5.568-3.696-2.112-3.072-2.688-5.376-2.688-5.856 0-.24.144-.864.432-.864h1.584c.432 0 .624.192.768.624.864 2.448 2.304 4.608 2.88 4.608.24 0 .336-.144.336-.528v-3.36c0-1.104-.672-1.2-.672-1.584 0-.288.24-.48.528-.48h2.496c.384 0 .528.192.528.624v3.36c0 .384.192.576.336.576.24 0 .432-.192.672-.576.96-1.296 1.632-3.36 1.632-3.36.096-.288.336-.48.72-.48h1.584c.48 0 .672.24.576.72-.192.96-2.112 4.224-2.112 4.224-.192.384-.096.576 0 .864.192.288.864.864 1.296 1.344.672.672 1.2 1.248 1.344 1.632.24.48.096.768-.384.768z" />
  </svg>
);

const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#00d4ff">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <Link href="/" style={styles.logo}>АЛЬТСТУДИЯ</Link>
          <p style={styles.description}>
            Ваш надёжный партнёр в мире долевой недвижимости. Прозрачные сделки, юридическая защита и профессиональное сопровождение.
          </p>
          <div style={styles.socialContainer}>
            <a href="https://t.me/altstudiya" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IconTelegram />
            </a>
            <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IconWhatsApp />
            </a>
            <a href="https://vk.com/altstudiya" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IconVK />
            </a>
            <a href="https://youtube.com/@altstudiya" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <IconYouTube />
            </a>
          </div>
        </div>

        <div>
          <h3 style={styles.columnTitle}>Навигация</h3>
          <Link href="/" style={styles.link}>Главная</Link>
          <Link href="/search" style={styles.link}>Поиск</Link>
          <Link href="/kstudio" style={styles.link}>Студии с кадастром</Link>
          <Link href="/dstudio" style={styles.link}>Долевые студии</Link>
          <Link href="/law" style={styles.link}>Закон</Link>
          <Link href="/calculator" style={styles.link}>Калькулятор</Link>
          <Link href="/blog" style={styles.link}>Блог</Link>
        </div>

        <div>
          <h3 style={styles.columnTitle}>Контакты</h3>
          <a href="tel:+79991234567" style={styles.link}>+7 (999) 123-45-67</a>
          <a href="mailto:altstudiya@inbox.ru" style={styles.link}>altstudiya@inbox.ru</a>
          <p style={{ ...styles.link, cursor: 'default' }}>Москва, ул. Примерная, д. 1</p>
          <p style={{ ...styles.link, cursor: 'default' }}>Пн-Пт: 10:00 - 20:00</p>
          <p style={{ ...styles.link, cursor: 'default' }}>Сб-Вс: 11:00 - 18:00</p>
        </div>

        <div>
          <h3 style={styles.columnTitle}>Юридическая информация</h3>
          <Link href="/policy" style={styles.link}>Политика конфиденциальности</Link>
          <Link href="/agreement" style={styles.link}>Пользовательское соглашение</Link>
          <Link href="/faq" style={styles.link}>FAQ</Link>
          <Link href="/about" style={styles.link}>О компании</Link>
          <Link href="/partners" style={styles.link}>Партнёрам</Link>
          <Link href="/careers" style={styles.link}>Вакансии</Link>
        </div>
      </div>

      <div style={styles.copyright}>
        © 2026 Альтстудия. Все права защищены.
      </div>
    </footer>
  );
}