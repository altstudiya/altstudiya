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
  },
  jobTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '8px',
  },
  department: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    color: '#00d4ff',
    marginBottom: '16px',
  },
  description: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
    marginBottom: '16px',
  },
  requirements: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    color: '#b0b8c5',
    lineHeight: '1.7',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  button: {
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

const jobs = [
  {
    title: 'Менеджер по работе с клиентами',
    department: 'Отдел продаж',
    description: 'Мы ищем энергичного и коммуникабельного менеджера для консультирования клиентов по вопросам долевой недвижимости.',
    requirements: ['Опыт работы в продажах от 1 года', 'Знание рынка недвижимости', 'Навыки делового общения', 'Ответственность и ориентация на результат'],
  },
  {
    title: 'Юрист по недвижимости',
    department: 'Юридический отдел',
    description: 'Требуется опытный юрист для сопровождения сделок с долевой собственностью и проверки юридической чистоты объектов.',
    requirements: ['Высшее юридическое образование', 'Опыт работы в недвижимости от 2 лет', 'Знание ГК РФ и ФЗ о недвижимости', 'Внимательность к деталям'],
  },
  {
    title: 'Frontend-разработчик',
    department: 'IT-отдел',
    description: 'Присоединяйтесь к нашей команде для развития платформы Альтстудия. Работа с современным стеком технологий.',
    requirements: ['Опыт работы с React/Next.js от 2 лет', 'Знание JavaScript/TypeScript', 'Опыт работы с REST API', 'Git, CI/CD'],
  },
];

export default function CareersPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Вакансии</h1>
      <p style={styles.description}>
        Присоединяйтесь к команде Альтстудии
      </p>
      <div style={styles.grid}>
        {jobs.map((job, index) => (
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
            <h3 style={styles.jobTitle}>{job.title}</h3>
            <div style={styles.department}>{job.department}</div>
            <p style={styles.description}>{job.description}</p>
            <ul style={styles.requirements}>
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
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
              Откликнуться
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}