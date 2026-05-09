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
    overflow: 'hidden',
    border: '1px solid rgba(0,212,255,0.1)',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  imagePlaceholder: {
    height: '200px',
    backgroundColor: '#1a1a2e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
  },
  content: {
    padding: '24px',
  },
  postTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '8px',
  },
  excerpt: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.6',
    marginBottom: '12px',
  },
  meta: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    color: '#666',
  },
};

const posts = [
  {
    title: 'Как инвестировать в долевую недвижимость',
    excerpt: 'Пошаговое руководство для начинающих инвесторов. Узнайте, как начать зарабатывать на долевой собственности.',
    date: '15 марта 2026',
    emoji: '📈',
  },
  {
    title: 'Преимущества студий с кадастром',
    excerpt: 'Почему стоит выбирать объекты с готовым кадастровым учётом и как это упрощает процесс покупки.',
    date: '10 марта 2026',
    emoji: '📋',
  },
  {
    title: 'Юридические аспекты долевой собственности',
    excerpt: 'Разбираем основные правовые вопросы: преимущественное право покупки, соглашение о порядке пользования.',
    date: '5 марта 2026',
    emoji: '⚖️',
  },
];

export default function BlogPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Блог</h1>
      <p style={styles.description}>
        Полезные статьи о долевой недвижимости и инвестициях
      </p>
      <div style={styles.grid}>
        {posts.map((post, index) => (
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
            <div style={styles.imagePlaceholder}>{post.emoji}</div>
            <div style={styles.content}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <span style={styles.meta}>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}