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

export default function PolicyPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Политика конфиденциальности</h1>
      <p style={styles.description}>
        Как мы обрабатываем и защищаем ваши персональные данные
      </p>
      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Общие положения</h2>
          <p style={styles.paragraph}>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Альтстудия (altstudiya.ru).</p>
          <p style={styles.paragraph}>Используя сайт, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с условиями, пожалуйста, прекратите использование сайта.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Какие данные мы собираем</h2>
          <p style={styles.paragraph}>Мы можем собирать следующие данные: имя, адрес электронной почты, номер телефона, а также информацию, которую вы добровольно предоставляете через формы обратной связи.</p>
          <p style={styles.paragraph}>Автоматически собирается техническая информация: IP-адрес, тип браузера, время посещения, страницы, которые вы просматриваете.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Как мы используем ваши данные</h2>
          <p style={styles.paragraph}>Ваши данные используются для: предоставления доступа к функционалу сайта, обработки заявок и обращений, улучшения качества обслуживания, отправки информационных материалов (с вашего согласия).</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Защита данных</h2>
          <p style={styles.paragraph}>Мы принимаем необходимые организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Контактная информация</h2>
          <p style={styles.paragraph}>По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами по email: altstudiya@inbox.ru.</p>
        </div>
      </div>
    </main>
  );
}