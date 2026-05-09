'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AccountPage() {
  const [favorites, setFavorites] = useState([]);
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
    if (favs.length > 0) {
      fetch(`https://altstudiya.ru/wp-json/wp/v2/studio?per_page=100`)
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(s => favs.includes(s.id));
          setStudios(filtered);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <main style={{ paddingTop: '120px', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #fff, #66fcf1, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '20px' }}>
        Личный кабинет
      </h1>
      <p style={{ color: '#b0b8c5', textAlign: 'center', fontSize: '1.2rem', fontFamily: "'Inter', sans-serif", marginBottom: '40px' }}>
        Управляйте своими избранными объектами
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(18,20,28,0.7)', backdropFilter: 'blur(8px)', borderRadius: '16px', padding: '30px', border: '1px solid rgba(0,212,255,0.1)' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
            Избранное ({favorites.length})
          </h2>
          {studios.length === 0 ? (
            <p style={{ color: '#6a7280', fontFamily: "'Inter', sans-serif" }}>
              У вас пока нет избранных объектов.{' '}
              <Link href="/search" style={{ color: '#00d4ff', textDecoration: 'none' }}>Перейти к поиску</Link>
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {studios.map(s => (
                <Link key={s.id} href={`/studio/${s.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(10,10,15,0.5)', borderRadius: '8px', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,15,0.5)'; }}
                  >
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', fontWeight: 600 }}>{s.title?.rendered || 'Без названия'}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#b0b8c5' }}>{s.acf?.address || ''}</div>
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#66fcf1', fontWeight: 700 }}>{s.acf?.price?.toLocaleString('ru-RU')} ₽</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
