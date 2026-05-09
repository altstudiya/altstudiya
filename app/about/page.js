'use client';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        О компании
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.8 }}>
        Альтстудия — это современная платформа для покупки долевой собственности в квартирах и студиях. Мы делаем недвижимость доступной, прозрачной и выгодной. Наша миссия — помочь каждому войти в мир недвижимости без переплат за воздух.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
        {[
          { num: '50+', label: 'Объектов в базе' },
          { num: '3 года', label: 'На рынке' },
          { num: '98%', label: 'Довольных клиентов' },
          { num: '24/7', label: 'Поддержка' },
        ].map((item, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '30px', textAlign: 'center', border: '1px solid rgba(0,212,255,0.1)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#00d4ff', marginBottom: '8px' }}>{item.num}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#b0b8c5' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
