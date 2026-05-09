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
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '24px',
    fontWeight: 600,
    color: '#00d4ff',
    marginBottom: '16px',
  },
  text: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    color: '#b0b8c5',
    lineHeight: '1.8',
    marginBottom: '12px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },
  statCard: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    border: '1px solid rgba(0,212,255,0.1)',
  },
  statNumber: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '36px',
    fontWeight: 700,
    color: '#66fcf1',
    marginBottom: '8px',
  },
  statLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
  },
};

export default function AboutPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>О компании</h1>
      <p style={styles.description}>
        Узнайте больше о нашей миссии и ценностях
      </p>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Наша миссия</h2>
          <p style={styles.text}>
            Альтстудия — это инновационная платформа, которая делает инвестиции в недвижимость доступными для каждого. Мы объединяем людей, желающих приобрести долю в квартире, с проверенными объектами недвижимости.
          </p>
          <p style={styles.text}>
            Наша цель — создать прозрачный и безопасный рынок долевой собственности, где каждый может войти в недвижимость без переплат за «воздух».
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Наши ценности</h2>
          <p style={styles.text}>
            <strong>Прозрачность:</strong> Мы предоставляем полную информацию о каждом объекте, включая юридический статус и кадастровые данные.
          </p>
          <p style={styles.text}>
            <strong>Безопасность:</strong> Каждая сделка проходит юридическую экспертизу и сопровождается профессиональными юристами.
          </p>
          <p style={styles.text}>
            <strong>Доступность:</strong> Мы делаем недвижимость доступной для широкого круга людей, снижая порог входа.
          </p>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Успешных сделок</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>98%</div>
            <div style={styles.statLabel}>Довольных клиентов</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>5 лет</div>
            <div style={styles.statLabel}>На рынке</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Объектов в базе</div>
          </div>
        </div>
      </div>
    </main>
  );
}