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
  arrow: {
    transition: 'transform 0.3s',
    color: '#00d4ff',
    flexShrink: 0,
  },
  answer: {
    padding: '0 24px 20px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    lineHeight: '1.7',
  },
  link: {
    color: '#00d4ff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

const faqItems = [
  {
    question: 'Что такое долевая собственность на квартиру?',
    answer: 'Долевая собственность — это форма владения, при которой несколько лиц имеют право собственности на определённые доли в одном объекте недвижимости. Каждый собственник владеет своей долей и может распоряжаться ею (продать, подарить, завещать) с соблюдением преимущественного права покупки других собственников. Правовое регулирование осуществляется в соответствии с Гражданским кодексом РФ (статьи 244-252).',
    law: 'ГК РФ Статьи 244-252',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_5142/',
  },
  {
    question: 'Какие риски существуют при покупке доли?',
    answer: 'Основные риски включают: преимущественное право покупки других собственников (необходимо уведомлять их о продаже), возможные споры о порядке пользования общим имуществом, сложности с получением ипотеки, ограничения при продаже. Рекомендуется заключать соглашение о порядке пользования и проводить сделку с юридическим сопровождением.',
    law: 'ГК РФ Статья 250',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_5142/',
  },
  {
    question: 'Как происходит продажа доли?',
    answer: 'Продажа доли требует соблюдения преимущественного права покупки: продавец обязан письменно уведомить всех остальных собственников о намерении продать долю с указанием цены и условий. Если в течение месяца никто не выкупит долю, её можно продать стороннему лицу. Сделка оформляется нотариально.',
    law: 'ГК РФ Статья 250',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_5142/',
  },
  {
    question: 'Можно ли получить ипотеку на покупку доли?',
    answer: 'Получить ипотеку на покупку доли сложнее, чем на целый объект. Большинство банков не кредитуют такие сделки. Однако некоторые банки предлагают программы под залог имеющейся недвижимости или при условии, что после покупки доля будет объединена с уже имеющейся. Рекомендуется консультироваться с банками индивидуально.',
    law: 'ФЗ "Об ипотеке (залоге недвижимости)"',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_19372/',
  },
  {
    question: 'Как определяется порядок пользования общим имуществом?',
    answer: 'Порядок пользования общим имуществом (кухня, коридор, санузел) определяется соглашением между всеми собственниками. Если соглашение не достигнуто, порядок может быть установлен в судебном порядке. Каждый собственник имеет право пользоваться общим имуществом соразмерно своей доле.',
    law: 'ГК РФ Статья 247',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_5142/',
  },
  {
    question: 'Какие налоги платит собственник доли?',
    answer: 'Собственник доли уплачивает налог на имущество пропорционально размеру своей доли. При продаже доли (если она была в собственности менее минимального срока владения) уплачивается НДФЛ 13% (15% для сумм свыше 5 млн руб.). Налоговый вычет также предоставляется пропорционально доле.',
    law: 'НК РФ Статьи 406-409',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_19671/',
  },
  {
    question: 'Что такое кадастровый учёт и зачем он нужен?',
    answer: 'Кадастровый учёт — это внесение сведений об объекте недвижимости в Единый государственный реестр недвижимости (ЕГРН). Для долевой собственности кадастровый учёт позволяет точно определить границы и площадь объекта, что важно для последующих сделок. Наличие кадастрового номера упрощает продажу, аренду и юридические действия.',
    law: 'ФЗ "О государственной регистрации недвижимости"',
    lawUrl: 'https://www.consultant.ru/document/cons_doc_LAW_19372/',
  },
];

export default function LawPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Закон и долевая собственность</h1>
      <p style={styles.description}>
        Ответы на основные вопросы о правовых аспектах долевой собственности
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
              onClick={() => toggleItem(index)}
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
                    ...styles.arrow,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              {isOpen && (
                <div style={styles.answer}>
                  <p>{item.answer}</p>
                  <p style={{ marginTop: '12px' }}>
                    <a
                      href={item.lawUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.link}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#66fcf1'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#00d4ff'}
                    >
                      {item.law} →
                    </a>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}