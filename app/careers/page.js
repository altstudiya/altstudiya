'use client';

export default function CareersPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Вакансии
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Присоединяйтесь к команде Альтстудии
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {[
          { title: 'Менеджер по продажам', desc: 'Работа с клиентами, консультации по объектам недвижимости, сопровождение сделок. Опыт в недвижимости приветствуется.' },
          { title: 'Юрист по недвижимости', desc: 'Правовое сопровождение сделок, проверка документов, регистрация прав собственности. Знание ГК РФ и ФЗ-218 обязательно.' },
          { title: 'Frontend-разработчик', desc: 'Разработка и поддержка сайта, создание новых компонентов, оптимизация производительности. React/Next.js, опыт от 2 лет.' },
        ].map((job, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '28px', marginBottom: '16px', border: '1px solid rgba(0,212,255,0.1)', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'; }}
          >
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{job.title}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#b0b8c5', lineHeight: 1.7 }}>{job.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
