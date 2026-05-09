'use client';

export default function PolicyPage() {
  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Политика конфиденциальности
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Как мы обрабатываем и защищаем ваши персональные данные
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#b0b8c5', lineHeight: 1.8 }}>
        <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта altstudiya.ru.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>1. Сбор данных</h3>
        <p>Мы собираем только те данные, которые вы добровольно предоставляете: имя, email, телефон. Данные используются для связи с вами и предоставления услуг.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>2. Использование данных</h3>
        <p>Ваши данные используются исключительно для обработки запросов, предоставления консультаций и улучшения качества сервиса.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>3. Защита данных</h3>
        <p>Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>4. Передача данных третьим лицам</h3>
        <p>Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginTop: '30px', marginBottom: '12px' }}>5. Контакты</h3>
        <p>По вопросам, связанным с обработкой персональных данных, обращайтесь по email: altstudiya@inbox.ru</p>
      </div>
    </main>
  );
}
