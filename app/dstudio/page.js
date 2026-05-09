'use client';

import { useState } from 'react';
import StudioCard from '@/components/StudioCard';

const mockStudios = [
  { id: 1, title: 'Уютная студия в центре', address: 'ул. Тверская, 15', price: 4500000, area: 22, metro: 'Тверская', kadastr_status: 'no', renovation: true, furniture: false },
  { id: 2, title: 'Студия с панорамным видом', address: 'ул. Москва-Сити, 1', price: 7800000, area: 35, metro: 'Деловой центр', kadastr_status: 'no', renovation: true, furniture: true },
  { id: 3, title: 'Компактная студия', address: 'ул. Арбат, 25', price: 3200000, area: 18, metro: 'Смоленская', kadastr_status: 'no', renovation: false, furniture: false },
  { id: 4, title: 'Студия в новостройке', address: 'ул. Ленинская, 10', price: 5500000, area: 28, metro: 'Парк культуры', kadastr_status: 'no', renovation: true, furniture: true },
  { id: 5, title: 'Светлая студия', address: 'пр. Мира, 50', price: 4100000, area: 24, metro: 'Проспект Мира', kadastr_status: 'no', renovation: false, furniture: true },
  { id: 6, title: 'Студия с ремонтом', address: 'ул. Новый Арбат, 8', price: 6200000, area: 30, metro: 'Арбатская', kadastr_status: 'no', renovation: true, furniture: true },
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
  },
  empty: {
    textAlign: 'center',
    color: '#b0b8c5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    padding: '60px 20px',
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    border: '1px solid rgba(0,212,255,0.1)',
  },
};

export default function DStudioPage() {
  const studios = mockStudios.filter((s) => s.kadastr_status !== 'yes');

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Долевые студии</h1>
      <p style={styles.description}>
        Инвестируйте в недвижимость без переплат. Долевые студии — ваш вход в мир доходной недвижимости.
      </p>
      {studios.length > 0 ? (
        <div style={styles.grid}>
          {studios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      ) : (
        <div style={styles.empty}>
          <p>В данный момент нет доступных долевых студий.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>Подпишитесь на уведомления о новых поступлениях.</p>
        </div>
      )}
    </main>
  );
}