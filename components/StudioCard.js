'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const styles = {
  card: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(0,212,255,0.1)',
    transition: 'all 0.3s',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: "'Space Grotesk', sans-serif",
    zIndex: 2,
  },
  favoriteButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    zIndex: 2,
  },
  content: {
    padding: '20px',
  },
  title: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '8px',
  },
  address: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    color: '#b0b8c5',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '16px',
  },
  detailItem: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    color: '#b0b8c5',
  },
  detailLabel: {
    color: '#666',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  detailValue: {
    color: '#fff',
    fontWeight: 500,
  },
  tags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  tag: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontFamily: "'Inter', sans-serif",
    backgroundColor: 'rgba(0,212,255,0.1)',
    color: '#00d4ff',
    border: '1px solid rgba(0,212,255,0.2)',
  },
  price: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '22px',
    fontWeight: 700,
    color: '#66fcf1',
    marginBottom: '16px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.3)',
    backgroundColor: 'transparent',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.3s',
  },
};

const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b0b8c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconStarFilled = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconStarEmpty = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b0b8c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function StudioCard({ studio }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(studio.id));
  }, [studio.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={styles.imageContainer}>
        {studio.kadastr_status === 'yes' && (
          <span style={{ ...styles.badge, backgroundColor: 'rgba(0,212,255,0.9)', color: '#0a0a0f' }}>
            Кадастр
          </span>
        )}
        {studio.kadastr_status !== 'yes' && (
          <span style={{ ...styles.badge, backgroundColor: 'rgba(102,252,241,0.9)', color: '#0a0a0f' }}>
            Долевая
          </span>
        )}
        <button
          style={styles.favoriteButton}
          onClick={toggleFavorite}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
          }}
        >
          {isFavorite ? <IconStarFilled /> : <IconStarEmpty />}
        </button>
        <div style={{
          ...styles.image,
          background: `linear-gradient(135deg, #1a1a2e, #16213e)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333',
          fontSize: '48px',
        }}>
          🏠
        </div>
      </div>

      <div style={styles.content}>
        <h3 style={styles.title}>{studio.title || 'Студия'}</h3>
        <div style={styles.address}>
          <IconLocation />
          <span>{studio.address || 'Адрес не указан'}</span>
        </div>

        <div style={styles.details}>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Площадь</div>
            <div style={styles.detailValue}>{studio.area || '—'} м²</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Метро</div>
            <div style={styles.detailValue}>{studio.metro || '—'}</div>
          </div>
        </div>

        {(studio.renovation || studio.furniture) && (
          <div style={styles.tags}>
            {studio.renovation && <span style={styles.tag}>Ремонт</span>}
            {studio.furniture && <span style={styles.tag}>Мебель</span>}
          </div>
        )}

        <div style={styles.price}>
          {studio.price ? formatPrice(studio.price) : 'Цена по запросу'}
        </div>

        <Link
          href={`/studio/${studio.id}`}
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,212,255,0.1)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0,212,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}