'use client';

export default function FaqPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        FAQ
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Часто задаваемые вопросы о работе с Альтстудией
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {[
          { q: 'Как начать поиск студии?', a: 'Воспользуйтесь поиском на сайте или перейдите в раздел "Студии с кадастром" или "Долевые студии". Вы можете отфильтровать объекты по цене, площади, району и другим параметрам.' },
          { q: 'Какие документы нужны для покупки?', a: 'Паспорт, ИНН, СНИЛС. Для сделки с недвижимостью также потребуется нотариально заверенное согласие супруга(и) при покупке в браке.' },
          { q: 'Как происходит сделка?', a: 'После выбора объекта мы проверяем документы, согласовываем условия, заключаем договор и регистрируем переход права собственности в Росреестре.' },
          { q: 'Сколько времени занимает регистрация?', a: 'Регистрация в Росреестре обычно занимает от 3 до 9 рабочих дней в зависимости от загруженности отделения.' },
          { q: 'Можно ли вернуть деньги, если передумал?', a: 'Условия возврата регулируются договором. Обычно предусмотрен период охлаждения и возможность расторжения договора с удержанием части расходов.' },
        ].map((item, i) => (
          <div key={i} style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '12px', padding: '20px 24px', marginBottom: '12px', border: '1px solid rgba(0,212,255,0.1)' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{item.q}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#b0b8c5', lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
