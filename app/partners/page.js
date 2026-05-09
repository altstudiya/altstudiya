'use client';

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '1400px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
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
  description: {
    color: '#b0b8c5',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
    transition: 'all 0.3s',
    textAlign: 'center',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  partnerTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '12px',
  },
  partnerText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.3)',
    backgroundColor: 'transparent',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
};

const IconHandshake = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const IconUsers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBuilding = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
  </svg>
);

const partners = [
  {
    icon: IconHandshake,
    title: 'Агентства недвижимости',
    text: 'Сотрудничайте с нами для расширения клиентской базы. Предлагайте своим клиентам доступные варианты долевой собственности.',
  },
  {
    icon: IconUsers,
    title: 'Инвесторы',
    text: 'Станьте партнёром-инвестором. Вкладывайте средства в перспективные объекты и получайте стабильный доход от аренды.',
  },
  {
    icon: IconBuilding,
    title: 'Застройщики',
    text: 'Предлагайте свои объекты на нашей платформе. Мы поможем найти покупателей на долевые студии в ваших новостройках.',
  },
];

export default function PartnersPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Партнёрам</h1>
      <p style={styles.description}>
        Откройте новые возможности сотрудничества с Альтстудией
      </p>
      <div style={styles.grid}>
        {partners.map((partner, index) => {
          const IconComponent = partner.icon;
          return (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={styles.iconContainer}>
                <IconComponent />
              </div>
              <h3 style={styles.partnerTitle}>{partner.title}</h3>
              <p style={styles.partnerText}>{partner.text}</p>
              <button
                style={styles.button}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Стать партнёром
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}