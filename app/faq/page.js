'use client';

import { useState } from 'react';

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '900px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
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
    marginBottom: '20px',
  },
  description: {
    color: '#b0b8c5',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '40px',
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  item: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    border: '1px solid rgba(0,212,255,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  itemHeader: {
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },
  question: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    color: '#fff',
    flex: 1,
  },
  answer: {
    padding: '0 24px 20px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
  },
};

const faqItems = [
  {
    question: 'Как начать пользоваться платформой?',
    answer: 'Зарегистрируйтесь на сайте, заполните профиль и вы сможете просматривать доступные студии, добавлять их в избранное и связываться с нами для консультации.',
  },
  {
    question: 'Какие документы нужны для покупки доли?',
    answer: 'Для покупки доли потребуется паспорт, ИНН, а также документы, подтверждающие доход (для ипотеки). Юридическое сопровождение поможет подготовить полный пакет документов.',
  },
  {
    question: 'Как происходит осмотр студии?',
    answer: 'После выбора объекта вы можете записаться на просмотр через форму обратной связи или по телефону. Наш менеджер организует удобное время для осмотра.',
  },
  {
    question: 'Предоставляете ли вы гарантии?',
    answer: 'Мы предоставляем юридическую гарантию чистоты сделки. Все объекты проходят предварительную проверку. В случае выявления проблем на этапе проверки, мы предлагаем альтернативные варианты.',
  },
  {
    question: 'Как быстро можно выйти на доход?',
    answer: 'Срок выхода на доход зависит от типа аренды и состояния студии. В среднем, после покупки и подготовки объекта, первый доход можно получить в течение 1-3 месяцев.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>FAQ</h1>
      <p style={styles.description}>
        Часто задаваемые вопросы о работе платформы
      </p>
      <div style={styles.accordion}>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                ...styles.item,
                ...(isOpen ? { borderColor: 'rgba(0,212,255,0.3)' } : {}),
              }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.1)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.itemHeader}>
                <span style={styles.question}>{item.question}</span>
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
                    transition: 'transform 0.3s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              {isOpen && (
                <div style={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}