

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const mockStudios = [
  { id: 1, title: 'Уютная студия в центре', address: 'ул. Тверская, 15', price: 4500000, area: 22, metro: 'Тверская', kadastr_status: 'no', renovation: true, furniture: false, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.7, metroTime: 5, description: 'Прекрасная студия в самом центре Москвы. Развитая инфраструктура, транспортная доступность.' },
  { id: 2, title: 'Студия с панорамным видом', address: 'ул. Москва-Сити, 1', price: 7800000, area: 35, metro: 'Деловой центр', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.2, metroTime: 3, description: 'Студия с потрясающим панорамным видом на Москву-Сити.' },
  { id: 3, title: 'Компактная студия', address: 'ул. Арбат, 25', price: 3200000, area: 18, metro: 'Смоленская', kadastr_status: 'no', renovation: false, furniture: false, district: 'ЦАО', houseType: 'Старый фонд', ceilingHeight: 3.0, metroTime: 7, description: 'Компактная студия на Арбате. Идеальный вариант для первого входа в недвижимость.' },
  { id: 4, title: 'Студия в новостройке', address: 'ул. Ленинская, 10', price: 5500000, area: 28, metro: 'Парк культуры', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 2.8, metroTime: 10, description: 'Новостройка с отделкой. Всё включено.' },
  { id: 5, title: 'Светлая студия', address: 'пр. Мира, 50', price: 4100000, area: 24, metro: 'Проспект Мира', kadastr_status: 'no', renovation: false, furniture: true, district: 'СВАО', houseType: 'Панельный', ceilingHeight: 2.6, metroTime: 8, description: 'Светлая и уютная студия.' },
  { id: 6, title: 'Студия с ремонтом', address: 'ул. Новый Арбат, 8', price: 6200000, area: 30, metro: 'Арбатская', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.9, metroTime: 4, description: 'Студия с дизайнерским ремонтом.' },
  { id: 7, title: 'Студия с кадастром №1', address: 'ул. Покровка, 12', price: 5200000, area: 26, metro: 'Китай-город', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.8, metroTime: 6, description: 'Полностью оформленная студия с кадастром.' },
  { id: 8, title: 'Кадастровая студия люкс', address: 'ул. Остоженка, 5', price: 8900000, area: 38, metro: 'Парк культуры', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.1, metroTime: 5, description: 'Премиальная студия на Остоженке.' },
  { id: 9, title: 'Студия с видом на Кремль', address: 'ул. Волхонка, 3', price: 12500000, area: 45, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.3, metroTime: 2, description: 'Элитная студия с видом на Кремль.' },
  { id: 10, title: 'Компактная кадастровая', address: 'ул. Мясницкая, 20', price: 3800000, area: 20, metro: 'Лубянка', kadastr_status: 'yes', renovation: false, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.7, metroTime: 5, description: 'Компактная студия с кадастром.' },
  { id: 11, title: 'Студия в историческом центре', address: 'ул. Никольская, 8', price: 6100000, area: 29, metro: 'Площадь Революции', kadastr_status: 'yes', renovation: true, furniture: false, district: 'ЦАО', houseType: 'Старый фонд', ceilingHeight: 3.2, metroTime: 4, description: 'Студия в историческом здании.' },
  { id: 12, title: 'Премиальная студия', address: 'ул. Пречистенка, 15', price: 9500000, area: 40, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.0, metroTime: 6, description: 'Премиальная студия в центре.' },
];

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#00d4ff',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    marginBottom: '30px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '40px',
  },
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    borderRadius: '16px',
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '80px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: '#fff',
  },
  price: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '32px',
    fontWeight: 700,
    color: '#66fcf1',
  },
  description: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    color: '#b0b8c5',
    lineHeight: '1.7',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '30px',
  },
  specItem: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(0,212,255,0.1)',
  },
  specLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  specValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  button: {
    padding: '14px 28px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.3)',
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  buttonPrimary: {
    padding: '14px 28px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  notFound: {
    textAlign: 'center',
    color: '#b0b8c5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    padding: '60px 20px',
  },
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function StudioDetailPage() {
  const params = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const studio = mockStudios.find((s) => s.id === Number(params.id));

  useEffect(() => {
    if (studio) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavorite(favorites.includes(studio.id));
    }
  }, [studio]);

  if (!studio) {
    return (
      <main style={styles.main}>
        <div style={styles.notFound}>
          <p>Студия не найдена</p>
          <Link href="/" style={{ ...styles.backLink, marginTop: '20px', display: 'inline-block' }}>Вернуться на главную</Link>
        </div>
      </main>
    );
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    if (favorites.includes(studio.id)) {
      newFavorites = favorites.filter((id) => id !== studio.id);
    } else {
      newFavorites = [...favorites, studio.id];
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <main style={styles.main}>
      <Link href="/search" style={styles.backLink}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Назад к поиску
      </Link>

      <div style={styles.header}>
        <div style={styles.imagePlaceholder}>🏠</div>
        <div style={styles.info}>
          <h1 style={styles.title}>{studio.title}</h1>
          <div style={styles.price}>{formatPrice(studio.price)}</div>
          <p style={styles.description}>{studio.description}</p>

          <div style={styles.specsGrid}>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Площадь</div>
              <div style={styles.specValue}>{studio.area} м²</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Метро</div>
              <div style={styles.specValue}>{studio.metro}</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>До метро</div>
              <div style={styles.specValue}>{studio.metroTime} мин</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Район</div>
              <div style={styles.specValue}>{studio.district}</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Тип дома</div>
              <div style={styles.specValue}>{studio.houseType}</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Высота потолков</div>
              <div style={styles.specValue}>{studio.ceilingHeight} м</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Ремонт</div>
              <div style={styles.specValue}>{studio.renovation ? 'Есть' : 'Нет'}</div>
            </div>
            <div style={styles.specItem}>
              <div style={styles.specLabel}>Мебель</div>
              <div style={styles.specValue}>{studio.furniture ? 'Есть' : 'Нет'}</div>
            </div>
          </div>

          <div style={styles.actions}>
            <button
              style={styles.buttonPrimary}
              onClick={toggleFavorite}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {isFavorite ? '✓ В избранном' : 'В избранное'}
            </button>
            <Link
              href={`/calculator?price=${studio.price}&area=${studio.area}`}
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'rgba(18,20,28,0.7)';
              }}
            >
              Рассчитать доходность
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}