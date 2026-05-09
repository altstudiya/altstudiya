'use client';

import { useState } from 'react';
import StudioCard from '@/components/StudioCard';

const mockStudios = [
  { id: 1, title: 'Уютная студия в центре', address: 'ул. Тверская, 15', price: 4500000, area: 22, metro: 'Тверская', kadastr_status: 'no', renovation: true, furniture: false, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.7, metroTime: 5 },
  { id: 2, title: 'Студия с панорамным видом', address: 'ул. Москва-Сити, 1', price: 7800000, area: 35, metro: 'Деловой центр', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.2, metroTime: 3 },
  { id: 3, title: 'Компактная студия', address: 'ул. Арбат, 25', price: 3200000, area: 18, metro: 'Смоленская', kadastr_status: 'no', renovation: false, furniture: false, district: 'ЦАО', houseType: 'Старый фонд', ceilingHeight: 3.0, metroTime: 7 },
  { id: 4, title: 'Студия в новостройке', address: 'ул. Ленинская, 10', price: 5500000, area: 28, metro: 'Парк культуры', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 2.8, metroTime: 10 },
  { id: 5, title: 'Светлая студия', address: 'пр. Мира, 50', price: 4100000, area: 24, metro: 'Проспект Мира', kadastr_status: 'no', renovation: false, furniture: true, district: 'СВАО', houseType: 'Панельный', ceilingHeight: 2.6, metroTime: 8 },
  { id: 6, title: 'Студия с ремонтом', address: 'ул. Новый Арбат, 8', price: 6200000, area: 30, metro: 'Арбатская', kadastr_status: 'no', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.9, metroTime: 4 },
  { id: 7, title: 'Студия с кадастром №1', address: 'ул. Покровка, 12', price: 5200000, area: 26, metro: 'Китай-город', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.8, metroTime: 6 },
  { id: 8, title: 'Кадастровая студия люкс', address: 'ул. Остоженка, 5', price: 8900000, area: 38, metro: 'Парк культуры', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.1, metroTime: 5 },
  { id: 9, title: 'Студия с видом на Кремль', address: 'ул. Волхонка, 3', price: 12500000, area: 45, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.3, metroTime: 2 },
  { id: 10, title: 'Компактная кадастровая', address: 'ул. Мясницкая, 20', price: 3800000, area: 20, metro: 'Лубянка', kadastr_status: 'yes', renovation: false, furniture: true, district: 'ЦАО', houseType: 'Кирпичный', ceilingHeight: 2.7, metroTime: 5 },
  { id: 11, title: 'Студия в историческом центре', address: 'ул. Никольская, 8', price: 6100000, area: 29, metro: 'Площадь Революции', kadastr_status: 'yes', renovation: true, furniture: false, district: 'ЦАО', houseType: 'Старый фонд', ceilingHeight: 3.2, metroTime: 4 },
  { id: 12, title: 'Премиальная студия', address: 'ул. Пречистенка, 15', price: 9500000, area: 40, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true, district: 'ЦАО', houseType: 'Монолитный', ceilingHeight: 3.0, metroTime: 6 },
];

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '1400px',
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
  filtersContainer: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid rgba(0,212,255,0.1)',
    marginBottom: '30px',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  filterLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    color: '#b0b8c5',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  filterInput: {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(10,10,15,0.5)',
    color: '#fff',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  filterSelect: {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(10,10,15,0.5)',
    color: '#fff',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
    cursor: 'pointer',
  },
  searchButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    alignSelf: 'flex-end',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
  },
  mapContainer: {
    width: '100%',
    height: '400px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(0,212,255,0.1)',
    marginBottom: '30px',
    backgroundColor: 'rgba(18,20,28,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapPlaceholder: {
    textAlign: 'center',
    color: '#b0b8c5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
  },
  resultCount: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    marginBottom: '20px',
  },
};

export default function SearchPage() {
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
    address: '',
    district: '',
    metro: '',
    metroTime: '',
    renovation: '',
    furniture: '',
    houseType: '',
    ceilingHeight: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredStudios = mockStudios.filter((studio) => {
    if (filters.priceMin && studio.price < Number(filters.priceMin)) return false;
    if (filters.priceMax && studio.price > Number(filters.priceMax)) return false;
    if (filters.areaMin && studio.area < Number(filters.areaMin)) return false;
    if (filters.areaMax && studio.area > Number(filters.areaMax)) return false;
    if (filters.address && !studio.address.toLowerCase().includes(filters.address.toLowerCase())) return false;
    if (filters.district && studio.district !== filters.district) return false;
    if (filters.metro && !studio.metro.toLowerCase().includes(filters.metro.toLowerCase())) return false;
    if (filters.metroTime && studio.metroTime > Number(filters.metroTime)) return false;
    if (filters.renovation === 'yes' && !studio.renovation) return false;
    if (filters.renovation === 'no' && studio.renovation) return false;
    if (filters.furniture === 'yes' && !studio.furniture) return false;
    if (filters.furniture === 'no' && studio.furniture) return false;
    if (filters.houseType && studio.houseType !== filters.houseType) return false;
    if (filters.ceilingHeight && studio.ceilingHeight < Number(filters.ceilingHeight)) return false;
    return true;
  });

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Поиск студий</h1>
      <p style={styles.description}>
        Найдите идеальную студию с помощью удобных фильтров
      </p>

      <div style={styles.filtersContainer}>
        <div style={styles.filterGrid}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Цена от</label>
            <input
              style={styles.filterInput}
              type="number"
              placeholder="от ₽"
              value={filters.priceMin}
              onChange={(e) => handleFilterChange('priceMin', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Цена до</label>
            <input
              style={styles.filterInput}
              type="number"
              placeholder="до ₽"
              value={filters.priceMax}
              onChange={(e) => handleFilterChange('priceMax', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Площадь от</label>
            <input
              style={styles.filterInput}
              type="number"
              placeholder="от м²"
              value={filters.areaMin}
              onChange={(e) => handleFilterChange('areaMin', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Площадь до</label>
            <input
              style={styles.filterInput}
              type="number"
              placeholder="до м²"
              value={filters.areaMax}
              onChange={(e) => handleFilterChange('areaMax', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Адрес</label>
            <input
              style={styles.filterInput}
              type="text"
              placeholder="Улица, район..."
              value={filters.address}
              onChange={(e) => handleFilterChange('address', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Район</label>
            <select
              style={styles.filterSelect}
              value={filters.district}
              onChange={(e) => handleFilterChange('district', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            >
              <option value="">Все</option>
              <option value="ЦАО">ЦАО</option>
              <option value="СВАО">СВАО</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Метро</label>
            <input
              style={styles.filterInput}
              type="text"
              placeholder="Станция метро"
              value={filters.metro}
              onChange={(e) => handleFilterChange('metro', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Время до метро (мин)</label>
            <input
              style={styles.filterInput}
              type="number"
              placeholder="Не более..."
              value={filters.metroTime}
              onChange={(e) => handleFilterChange('metroTime', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Ремонт</label>
            <select
              style={styles.filterSelect}
              value={filters.renovation}
              onChange={(e) => handleFilterChange('renovation', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            >
              <option value="">Любой</option>
              <option value="yes">Есть</option>
              <option value="no">Нет</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Мебель</label>
            <select
              style={styles.filterSelect}
              value={filters.furniture}
              onChange={(e) => handleFilterChange('furniture', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            >
              <option value="">Любая</option>
              <option value="yes">Есть</option>
              <option value="no">Нет</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Тип дома</label>
            <select
              style={styles.filterSelect}
              value={filters.houseType}
              onChange={(e) => handleFilterChange('houseType', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            >
              <option value="">Любой</option>
              <option value="Кирпичный">Кирпичный</option>
              <option value="Монолитный">Монолитный</option>
              <option value="Панельный">Панельный</option>
              <option value="Старый фонд">Старый фонд</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Высота потолков (мин)</label>
            <input
              style={styles.filterInput}
              type="number"
              step="0.1"
              placeholder="м"
              value={filters.ceilingHeight}
              onChange={(e) => handleFilterChange('ceilingHeight', e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
            />
          </div>
        </div>
      </div>

      <div style={styles.mapContainer}>
        <div style={styles.mapPlaceholder}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>Интерактивная карта с космическими маркерами</p>
          <p style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>Leaflet карта будет загружена при подключении библиотеки</p>
        </div>
      </div>

      <div style={styles.resultCount}>
        Найдено студий: {filteredStudios.length}
      </div>

      <div style={styles.resultsGrid}>
        {filteredStudios.map((studio) => (
          <StudioCard key={studio.id} studio={studio} />
        ))}
      </div>
    </main>
  );
}