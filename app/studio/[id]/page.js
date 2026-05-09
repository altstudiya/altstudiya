'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function StudioDetailPage() {
  const { id } = useParams();
  const [studio, setStudio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    async function fetchStudio() {
      try {
        const res = await fetch(`https://altstudiya.ru/wp-json/wp/v2/studio/${id}`);
        const data = await res.json();
        setStudio(data);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchStudio();
  }, [id]);

  useEffect(() => {
    if (studio) {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFav(favs.includes(studio.id));
    }
  }, [studio]);

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updated;
    if (favs.includes(studio?.id)) {
      updated = favs.filter(fid => fid !== studio?.id);
    } else {
      updated = [...favs, studio?.id];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFav(!isFav);
  };

  const mainStyle = {
    paddingTop: '120px',
    maxWidth: '1000px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '120px 20px 60px',
  };

  const cardStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid rgba(0,212,255,0.1)',
  };

  const imgStyle = {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '30px',
    background: '#1a1a2e',
  };

  const titleStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '30px',
  };

  const infoItemStyle = {
    background: 'rgba(10,10,15,0.5)',
    borderRadius: '8px',
    padding: '16px',
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8rem',
    color: '#6a7280',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const valueStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#fff',
  };

  const priceStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#66fcf1',
    marginBottom: '30px',
  };

  const btnRowStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  };

  const btnPrimary = {
    padding: '14px 28px',
    background: 'linear-gradient(135deg, #00d4ff, #66fcf1)',
    color: '#0a0a0f',
    border: 'none',
    borderRadius: '8px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  };

  const btnSecondary = {
    padding: '14px 28px',
    background: 'transparent',
    color: '#00d4ff',
    border: '1px solid #00d4ff',
    borderRadius: '8px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  };

  const loadingStyle = {
    textAlign: 'center',
    color: '#b0b8c5',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.2rem',
    padding: '60px 0',
  };

  if (loading) return <main style={mainStyle}><div style={loadingStyle}>Загрузка...</div></main>;
  if (!studio) return <main style={mainStyle}><div style={loadingStyle}>Студия не найдена</div></main>;

  const acf = studio.acf || {};
  const price = acf.price || 0;
  const area = acf.area || 0;

  return (
    <main style={mainStyle}>
      <div style={cardStyle}>
        <img
          src={acf.photo || '/images/placeholder.jpg'}
          alt={studio.title?.rendered}
          style={imgStyle}
          onError={e => { e.currentTarget.src = '/images/placeholder.jpg'; }}
        />
        <h1 style={titleStyle}>{studio.title?.rendered}</h1>
        <div style={priceStyle}>{price.toLocaleString('ru-RU')} ₽</div>
        <div style={gridStyle}>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Площадь</div>
            <div style={valueStyle}>{area} м²</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Адрес</div>
            <div style={valueStyle}>{acf.address || '—'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Метро</div>
            <div style={valueStyle}>{acf.metro || '—'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Район</div>
            <div style={valueStyle}>{acf.district || '—'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Тип дома</div>
            <div style={valueStyle}>{acf.house_type || '—'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Высота потолков</div>
            <div style={valueStyle}>{acf.ceiling_height || '—'} м</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Ремонт</div>
            <div style={valueStyle}>{acf.renovation === 'yes' ? 'Да' : 'Нет'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Мебель</div>
            <div style={valueStyle}>{acf.furniture === 'yes' ? 'Да' : 'Нет'}</div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Кадастровый учёт</div>
            <div style={{ ...valueStyle, color: acf.kadastr_status === 'yes' ? '#66fcf1' : '#b0b8c5' }}>
              {acf.kadastr_status === 'yes' ? 'Да' : 'Нет'}
            </div>
          </div>
          <div style={infoItemStyle}>
            <div style={labelStyle}>Время до метро</div>
            <div style={valueStyle}>{acf.metro_time || '—'} мин</div>
          </div>
        </div>
        <div style={btnRowStyle}>
          <button
            style={btnPrimary}
            onClick={toggleFav}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isFav ? '#0a0a0f' : 'none'} stroke="#0a0a0f" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {isFav ? 'В избранном' : 'В избранное'}
          </button>
          <Link
            href={`/calculator?price=${price}&area=${area}`}
            style={btnSecondary}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.3)'; e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'transparent'; }}
          >
            Рассчитать доходность
          </Link>
        </div>
      </div>
    </main>
  );
}
