'use client';

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '900px',
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
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.8',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    color: '#00d4ff',
    marginBottom: '12px',
  },
  paragraph: {
    marginBottom: '12px',
  },
};

export default function AgreementPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Пользовательское соглашение</h1>
      <p style={styles.description}>
        Условия использования сайта Альтстудия
      </p>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Термины и определения</h2>
          <p style={styles.paragraph}>Сайт — интернет-ресурс, расположенный по адресу altstudiya.ru. Пользователь — любое лицо, использующее сайт. Администрация — владельцы сайта Альтстудия.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Предмет соглашения</h2>
          <p style={styles.paragraph}>Настоящее соглашение регулирует отношения между Пользователем и Администрацией сайта по использованию функционала и сервисов сайта.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Права и обязанности сторон</h2>
          <p style={styles.paragraph}>Пользователь обязуется не использовать сайт для противоправных действий, не распространять вредоносное ПО, не нарушать права третьих лиц.</p>
          <p style={styles.paragraph}>Администрация обязуется обеспечивать работу сайта, защищать персональные данные пользователей, своевременно обновлять информацию.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Ответственность</h2>
          <p style={styles.paragraph}>Администрация не несёт ответственности за возможные убытки, связанные с использованием информации, размещённой на сайте. Вся информация предоставляется в ознакомительных целях.</p>
        </div>
      </div>
    </main>
  );
}