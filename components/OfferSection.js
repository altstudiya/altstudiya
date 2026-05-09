'use client';

import { useState } from 'react';

const offers = [
  {
    title: 'Качественный подбор',
    desc: 'Мы тщательно отбираем объекты недвижимости, проверяем документы и юридическую чистоту. Вы получаете только лучшие варианты, соответствующие вашим критериям и бюджету.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    title: 'Юридическое сопровождение',
    desc: 'Полное юридическое сопровождение сделки от начала до конца. Помощь в оформлении документов, проверка контрагентов, регистрация права собственности.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  {
    title: 'Ремонт',
    desc: 'Предлагаем варианты с уже выполненным ремонтом или под ваш индивидуальный проект. Сотрудничаем с проверенными бригадами и дизайнерами.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  },
  {
    title: 'Мебель',
    desc: 'Комплектация студий мебелью под ключ. Современный дизайн, качественные материалы, быстрая установка. Всё включено.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><rect x="4" y="9" width="16" height="10" rx="2"/><path d="M8 9V5h8v4"/><line x1="4" y1="17" x2="4" y2="19"/><line x1="20" y1="17" x2="20" y2="19"/></svg>',
  },
  {
    title: 'Хоумстейджинг',
    desc: 'Профессиональная подготовка объекта к продаже. Повышаем привлекательность студии для покупателей и увеличиваем стоимость сделки.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  },
  {
    title: 'Управление объектом',
    desc: 'Берём на себя управление вашей недвижимостью: поиск арендаторов, контроль платежей, решение текущих вопросов. Пассивный доход без хлопот.',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
];

export default function OfferSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '60px',
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  };

  const cardStyle = (isActive) => ({
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '28px',
    border: '1px solid rgba(0,212,255,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minHeight: isActive ? 'auto' : '140px',
  });

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px',
  };

  const cardTitleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#fff',
  };

  const cardDescStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#b0b8c5',
    lineHeight: 1.7,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Что мы предлагаем</h2>
      <div style={gridStyle}>
        {offers.map((offer, i) => (
          <div
            key={i}
            style={cardStyle(activeIndex === i)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)';
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
            }}
          >
            <div style={cardHeaderStyle}>
              <span dangerouslySetInnerHTML={{ __html: offer.icon }} />
              <span style={cardTitleStyle}>{offer.title}</span>
            </div>
            <div
              style={{
                ...cardDescStyle,
                maxHeight: activeIndex === i ? '300px' : '0',
                opacity: activeIndex === i ? 1 : 0,
              }}
            >
              {offer.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
