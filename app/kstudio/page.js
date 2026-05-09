'use client';

import { useState } from 'react';
import StudioCard from '@/components/StudioCard';

const mockStudios = [
  { id: 7, title: 'Студия с кадастром №1', address: 'ул. Покровка, 12', price: 5200000, area: 26, metro: 'Китай-город', kadastr_status: 'yes', renovation: true, furniture: true },
  { id: 8, title: 'Кадастровая студия люкс', address: 'ул. Остоженка, 5', price: 8900000, area: 38, metro: 'Парк культуры', kadastr_status: 'yes', renovation: true, furniture: true },
  { id: 9, title: 'Студия с видом на Кремль', address: 'ул. Волхонка, 3', price: 12500000, area: 45, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true },
  { id: 10, title: 'Компактная кадастровая', address: 'ул. Мясницкая, 20', price: 3800000, area: 20, metro: 'Лубянка', kadastr_status: 'yes', renovation: false, furniture: true },
  { id: 11, title: 'Студия в историческом центре', address: 'ул. Никольская, 8', price: 6100000, area: 29, metro: 'Площадь Революции', kadastr_status: 'yes', renovation: true, furniture: false },
  { id: 12, title: 'Премиальная студия', address: 'ул. Пречистенка, 15', price: 9500000, area: 40, metro: 'Кропоткинская', kadastr_status: 'yes', renovation: true, furniture: true },
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

export default function KStudioPage() {
  const studios = mockStudios.filter((s) => s.kadastr_status === 'yes');

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Студии с кадастром</h1>
      <p style={styles.description}>
        Полностью оформленные студии с готовым кадастровым учётом. Быстрый вход в сделку и полная юридическая прозрачность.
      </p>
      {studios.length > 0 ? (
        <div style={styles.grid}>
          {studios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      ) : (
        <div style={styles.empty}>
          <p>В данный момент нет доступных студий с кадастром.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>Следите за обновлениями.</p>
        </div>
      )}
    </main>
  );
}