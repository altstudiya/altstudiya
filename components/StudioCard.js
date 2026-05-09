'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StudioCard({ studio }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFav(favs.includes(studio.id));
  }, [studio.id]);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updated;
    if (favs.includes(studio.id)) {
      updated = favs.filter(id => id !== studio.id);
    } else {
      updated = [...favs, studio.id];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFav(!isFav);
  };

  const cardStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(0,212,255,0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
    background: '#1a1a2e',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    padding: '4px 10px',
    borderRadius: '6px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.5px',
  };

  const favBtnStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(10,10,15,0.7)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: isFav ? '#ffd700' : '#6a7280',
  };

  const bodyStyle = {
    padding: '20px',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '8px',
  };

  const infoStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#b0b8c5',
    marginBottom: '4px',
    lineHeight: 1.6,
  };

  const tagRowStyle = {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
    flexWrap: 'wrap',
  };

  const tagStyle = {
    padding: '4px 10px',
    borderRadius: '6px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 600,
    border: '1px solid rgba(0,212,255,0.2)',
    color: '#00d4ff',
  };

  const priceStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#66fcf1',
    marginTop: '12px',
  };

  const btnStyle = {
    display: 'block',
    textAlign: 'center',
    padding: '12px',
    marginTop: '16px',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    textDecoration: 'none',
    borderRadius: '8px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px',
  };

  return (
    <Link href={`/studio/${studio.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={cardStyle}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)'; }}
      >
        <div style={{ position: 'relative' }}>
          {studio.kadastr_status === 'yes' && (
            <span style={badgeStyle}>Кадастр</span>
          )}
          <button style={favBtnStyle} onClick={toggleFav} aria-label="Избранное">
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isFav ? '#ffd700' : 'none'} stroke={isFav ? '#ffd700' : 'currentColor'} strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
          <img
            src={studio.photo || '/images/placeholder.jpg'}
            alt={studio.title}
            style={imgStyle}
            onError={e => { e.currentTarget.src = '/images/placeholder.jpg'; }}
          />
        </div>
        <div style={bodyStyle}>
          <div style={titleStyle}>{studio.title}</div>
          <div style={infoStyle}>{studio.address}</div>
          {studio.metro && <div style={infoStyle}>🚇 {studio.metro}</div>}
          <div style={infoStyle}>{studio.area} м²</div>
          <div style={priceStyle}>{studio.price?.toLocaleString('ru-RU')} ₽</div>
          <div style={tagRowStyle}>
            {studio.renovation === 'yes' && <span style={tagStyle}>Ремонт</span>}
            {studio.furniture === 'yes' && <span style={tagStyle}>Мебель</span>}
          </div>
          <div
            style={btnStyle}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            Подробнее
          </div>
        </div>
      </div>
    </Link>
  );
}
