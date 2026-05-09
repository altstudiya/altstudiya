'use client';

export default function AgreementPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Пользовательское соглашение
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Условия использования сайта altstudiya.ru
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#b0b8c5', lineHeight: 1.8 }}>
        <p>Настоящее Пользовательское соглашение регулирует отношения между администрацией сайта altstudiya.ru и пользователем.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>1. Общие положения</h3>
        <p>Используя сайт, вы соглашаетесь с условиями настоящего соглашения. Если вы не согласны с условиями, прекратите использование сайта.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>2. Права и обязанности сторон</h3>
        <p>Администрация обязуется обеспечивать работу сайта и предоставлять актуальную информацию об объектах недвижимости. Пользователь обязуется не использовать сайт для противоправных действий.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>3. Ответственность</h3>
        <p>Информация на сайте предоставляется в ознакомительных целях. Администрация не несёт ответственности за возможные убытки, связанные с использованием информации с сайта.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>4. Изменение условий</h3>
        <p>Администрация оставляет за собой право вносить изменения в настоящее соглашение без уведомления пользователя.</p>
      </div>
    </main>
  );
}
