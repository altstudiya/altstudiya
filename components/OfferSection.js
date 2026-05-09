'use client';

import { useState } from 'react';

const styles = {
  section: {
    padding: '80px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
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
    marginBottom: '50px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
  },
  cardDescription: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.4s ease',
    opacity: 0,
  },
  cardDescriptionOpen: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
    maxHeight: '300px',
    opacity: 1,
    transition: 'max-height 0.4s ease, opacity 0.4s ease',
  },
  arrow: {
    marginLeft: 'auto',
    transition: 'transform 0.3s',
    color: '#00d4ff',
  },
};

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconTool = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconGrid = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const IconImage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const offers = [
  {
    icon: IconSearch,
    title: 'Качественный подбор',
    description: 'Мы тщательно анализируем рынок и подбираем объекты, соответствующие вашим критериям. Наша база включает только проверенные варианты с полным юридическим сопровождением. Экономьте время и получайте лучшие предложения.',
  },
  {
    icon: IconShield,
    title: 'Юридическое сопровождение',
    description: 'Полная юридическая проверка каждого объекта. Мы сопровождаем сделку от начала до конца, проверяем документы, регистрируем право собственности и гарантируем безопасность ваших инвестиций.',
  },
  {
    icon: IconTool,
    title: 'Ремонт',
    description: 'Предлагаем услуги по ремонту и отделке студий под ключ. Сотрудничаем с проверенными бригадами и дизайнерами. От косметического до капитального ремонта — реализуем проекты любого уровня сложности.',
  },
  {
    icon: IconGrid,
    title: 'Мебель',
    description: 'Комплектация студий мебелью и техникой. Мы подбираем функциональные решения для компактных пространств. Современный дизайн, качественные материалы и оптимальные цены.',
  },
  {
    icon: IconImage,
    title: 'Хоумстейджинг',
    description: 'Профессиональная подготовка объекта к продаже или аренде. Мы создаём привлекательный интерьер, который помогает продать или сдать студию быстрее и дороже. Фотосъёмка и виртуальные туры.',
  },
  {
    icon: IconSettings,
    title: 'Управление объектом',
    description: 'Полное управление вашей недвижимостью: поиск арендаторов, контроль платежей, решение текущих вопросов, обслуживание и ремонт. Получайте пассивный доход без лишних хлопот.',
  },
];

export default function OfferSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Что мы предлагаем</h2>
      <div style={styles.grid}>
        {offers.map((offer, index) => {
          const isOpen = openIndex === index;
          const IconComponent = offer.icon;
          return (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(isOpen ? { borderColor: 'rgba(0,212,255,0.3)', boxShadow: '0 0 20px rgba(0,212,255,0.1)' } : {}),
              }}
              onClick={() => toggleCard(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={styles.cardHeader}>
                <div style={styles.iconContainer}>
                  <IconComponent />
                </div>
                <h3 style={styles.cardTitle}>{offer.title}</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    ...styles.arrow,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div style={isOpen ? styles.cardDescriptionOpen : styles.cardDescription}>
                <p>{offer.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}