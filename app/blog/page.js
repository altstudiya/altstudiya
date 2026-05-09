'use client';

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Блог
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Статьи, новости и полезные материалы о долевой недвижимости
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
        {[
          { title: 'Как выбрать студию для инвестиций', date: '15 марта 2026', desc: 'Основные критерии выбора студии для пассивного дохода.' },
          { title: 'Долевая собственность: плюсы и минусы', date: '10 марта 2026', desc: 'Разбираем все преимущества и возможные риски долевого владения.' },
          { title: 'Кадастровый учёт: пошаговая инструкция', date: '5 марта 2026', desc: 'Как поставить студию на кадастровый учёт самостоятельно.' },
        ].map((post, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(0,212,255,0.1)', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'; }}
          >
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#00d4ff', marginBottom: '12px' }}>{post.date}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{post.title}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#b0b8c5', lineHeight: 1.6 }}>{post.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
