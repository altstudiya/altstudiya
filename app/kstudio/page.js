'use client';

import { useState, useEffect } from 'react';
import StudioCard from '@/components/StudioCard';

export default function KstudioPage() {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://altstudiya.ru/wp-json/wp/v2/studio?per_page=100');
        const data = await res.json();
        const filtered = data.filter(s => s.acf?.kadastr_status === 'yes');
        setStudios(filtered);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const mainStyle = {
    paddingTop: '120px',
    maxWidth: '1400px',
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  };

  const loadingStyle = {
    textAlign: 'center',
    color: '#b0b8c5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.2rem',
    padding: '60px 0',
  };

  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Студии с кадастром</h1>
      <p style={descStyle}>Студии с оформленным кадастровым учётом — полная юридическая прозрачность</p>
      {loading ? (
        <div style={loadingStyle}>Загрузка...</div>
      ) : (
        <div style={gridStyle}>
          {studios.map(studio => (
            <StudioCard key={studio.id} studio={{
              id: studio.id,
              title: studio.title?.rendered || 'Без названия',
              address: studio.acf?.address || '',
              price: studio.acf?.price || 0,
              area: studio.acf?.area || 0,
              metro: studio.acf?.metro || '',
              photo: studio.acf?.photo || '',
              kadastr_status: studio.acf?.kadastr_status || 'no',
              renovation: studio.acf?.renovation || 'no',
              furniture: studio.acf?.furniture || 'no',
            }} />
          ))}
        </div>
      )}
    </main>
  );
}
