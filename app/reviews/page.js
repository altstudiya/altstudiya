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
    padding: '24px',
    border: '1px solid rgba(0,212,255,0.1)',
    transition: 'all 0.3s',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 600,
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
  },
  name: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    color: '#fff',
  },
  date: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    color: '#666',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '12px',
  },
  text: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
  },
};

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const reviews = [
  { name: 'Анна М.', date: '12 марта 2026', rating: 5, text: 'Отличная платформа! Помогли подобрать студию в центре Москвы. Всё прошло гладко, юридическое сопровождение на высшем уровне. Рекомендую!' },
  { name: 'Дмитрий К.', date: '8 марта 2026', rating: 5, text: 'Долго искал возможность войти в недвижимость без огромных вложений. Альтстудия предложила отличный вариант долевой студии. Спасибо за профессиональный подход!' },
  { name: 'Елена С.', date: '1 марта 2026', rating: 4, text: 'Хороший сервис, удобный калькулятор доходности. Единственное — хотелось бы больше объектов в базе. Но в целом довольна.' },
  { name: 'Сергей В.', date: '25 февраля 2026', rating: 5, text: 'Купил долю в студии с кадастром. Всё прозрачно, документы в порядке. Уже сдаю в аренду и получаю доход. Спасибо команде!' },
  { name: 'Ольга П.', date: '18 февраля 2026', rating: 5, text: 'Очень довольна сотрудничеством. Менеджеры подробно всё объяснили, помогли с выбором. Процесс покупки прошёл быстро и безопасно.' },
  { name: 'Иван Н.', date: '10 февраля 2026', rating: 4, text: 'Хороший старт для начинающего инвестора. Понравился подход к юридической проверке объектов. Буду рекомендовать знакомым.' },
];

export default function ReviewsPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Отзывы</h1>
      <p style={styles.description}>
        Что говорят наши клиенты о сотрудничестве с Альтстудией
      </p>
      <div style={styles.grid}>
        {reviews.map((review, index) => (
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
            <div style={styles.header}>
              <div style={styles.avatar}>{review.name[0]}</div>
              <div>
                <div style={styles.name}>{review.name}</div>
                <div style={styles.date}>{review.date}</div>
              </div>
            </div>
            <div style={styles.stars}>
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p style={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}