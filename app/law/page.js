'use client';

import { useState } from 'react';

const faqItems = [
  {
    q: 'Что такое долевая собственность на квартиру?',
    a: 'Долевая собственность — это форма владения, при которой несколько лиц имеют право на определённые доли в одной квартире. Каждый собственник владеет своей долей и может распоряжаться ею (продать, подарить, завещать) с соблюдением преимущественного права покупки других собственников (ст. 250 ГК РФ).',
  },
  {
    q: 'Какие риски при покупке доли в студии?',
    a: 'Основные риски: преимущественное право покупки других собственников (ст. 250 ГК РФ), необходимость согласования порядка пользования общим имуществом (ст. 247 ГК РФ), возможные споры о порядке пользования. Все риски минимизируются грамотным юридическим сопровождением и чёткими договорённостями.',
  },
  {
    q: 'Как оформить кадастровый учёт на студию?',
    a: 'Кадастровый учёт осуществляется через Росреестр или МФЦ. Необходимы: технический план, правоустанавливающие документы, заявление. После постановки на кадастровый учёт объект получает кадастровый номер и становится полноценным объектом недвижимости (ФЗ-218 "О государственной регистрации недвижимости").',
  },
  {
    q: 'Можно ли продать долю без согласия других собственников?',
    a: 'Да, но с соблюдением преимущественного права покупки (ст. 250 ГК РФ). Вы обязаны письменно известить всех собственников о намерении продать долю с указанием цены. Если в течение месяца никто не выкупит долю, вы можете продать её постороннему лицу по цене не ниже указанной.',
  },
  {
    q: 'Какие налоги при продаже доли?',
    a: 'НДФЛ 13% (для резидентов) с суммы дохода от продажи доли, если она была в собственности менее 3 лет (или 5 лет для объектов, приобретённых после 01.01.2016). Можно применить имущественный вычет до 1 млн рублей (ст. 220 НК РФ).',
  },
  {
    q: 'Что такое преимущественное право покупки?',
    a: 'Это право других участников долевой собственности выкупить продаваемую долю преимущественно перед посторонними лицами по цене, за которую она продаётся (ст. 250 ГК РФ). Продавец обязан известить всех участников в письменной форме. Срок — 30 дней для недвижимости.',
  },
  {
    q: 'Как защитить свои права при покупке доли?',
    a: 'Рекомендуется: 1) Проверить выписку из ЕГРН; 2) Заключить предварительный договор с задатком; 3) Зарегистрировать переход права в Росреестре; 4) Составить соглашение о порядке пользования общим имуществом (ст. 247 ГК РФ); 5) Обратиться к юристу для сопровождения сделки.',
  },
];

export default function LawPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const mainStyle = {
    paddingTop: '120px',
    maxWidth: '900px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const descStyle = {
    color: '#b0b8c5',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '40px',
  };

  const faqItemStyle = (isOpen) => ({
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    marginBottom: '12px',
    border: '1px solid rgba(0,212,255,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  });

  const questionStyle = {
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#fff',
  };

  const answerStyle = (isOpen) => ({
    padding: isOpen ? '0 24px 20px' : '0 24px',
    maxHeight: isOpen ? '500px' : '0',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#b0b8c5',
    lineHeight: 1.7,
  });

  const arrowStyle = (isOpen) => ({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    color: '#00d4ff',
  });

  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Что говорит закон</h1>
      <p style={descStyle}>Ответы на популярные вопросы о долевой собственности</p>
      {faqItems.map((item, i) => (
        <div
          key={i}
          style={faqItemStyle(openIndex === i)}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div>
            <div style={questionStyle}>
              <span>{item.q}</span>
              <span style={arrowStyle(openIndex === i)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
            <div style={answerStyle(openIndex === i)}>{item.a}</div>
          </div>
        </div>
      ))}
    </main>
  );
}
