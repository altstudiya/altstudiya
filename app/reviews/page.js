'use client';

export default function ReviewsPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Отзывы
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Что говорят наши клиенты
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
        {[
          { name: 'Анна К.', text: 'Очень довольна покупкой студии через Альтстудию. Всё прозрачно, юристы проверили документы, помогли с регистрацией. Рекомендую!', rating: 5 },
          { name: 'Михаил С.', text: 'Отличный сервис. Нашли студию с кадастром по хорошей цене. Сделка прошла быстро и без проблем.', rating: 5 },
          { name: 'Елена В.', text: 'Спасибо команде за профессиональное сопровождение. Все этапы сделки были понятны и прозрачны.', rating: 5 },
          { name: 'Дмитрий П.', text: 'Купил долю в студии как инвестицию. Калькулятор доходности помог принять решение. Пока всё устраивает.', rating: 4 },
        ].map((review, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(0,212,255,0.1)' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill={j < review.rating ? '#ffd700' : 'none'} stroke="#ffd700" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{review.name}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#b0b8c5', lineHeight: 1.7 }}>{review.text}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
