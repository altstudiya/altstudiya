'use client';

export default function PartnersPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Партнёрам
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.8 }}>
        Мы открыты к сотрудничеству с агентствами недвижимости, застройщиками, инвесторами и частными лицами. Предлагаем выгодные условия партнёрства и комиссионные.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
        {[
          { title: 'Агентствам', desc: 'Сотрудничество на условиях комиссии. Доступ к закрытой базе объектов. Совместные сделки.' },
          { title: 'Застройщикам', desc: 'Размещение объектов на платформе. Маркетинговая поддержка. Прямые продажи.' },
          { title: 'Инвесторам', desc: 'Готовые инвестиционные решения. Аналитика рынка. Управление объектами.' },
        ].map((item, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(0,212,255,0.1)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{item.title}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#b0b8c5', lineHeight: 1.7 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
