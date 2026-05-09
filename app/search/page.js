'use client';

import { useState, useEffect } from 'react';
import StudioCard from '@/components/StudioCard';

export default function SearchPage() {
  const [studios, setStudios] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [filters, setFilters] = useState({
    priceMin: '', priceMax: '', areaMin: '', areaMax: '',
    address: '', district: '', metro: '', metroTime: '',
    renovation: '', furniture: '', houseType: '', ceilingHeight: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://altstudiya.ru/wp-json/wp/v2/studio?per_page=100');
        const data = await res.json();
        setStudios(data);
        setFiltered(data);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...studios];
    const f = filters;
    if (f.priceMin) result = result.filter(s => (s.acf?.price || 0) >= Number(f.priceMin));
    if (f.priceMax) result = result.filter(s => (s.acf?.price || 0) <= Number(f.priceMax));
    if (f.areaMin) result = result.filter(s => (s.acf?.area || 0) >= Number(f.areaMin));
    if (f.areaMax) result = result.filter(s => (s.acf?.area || 0) <= Number(f.areaMax));
    if (f.address) result = result.filter(s => (s.acf?.address || '').toLowerCase().includes(f.address.toLowerCase()));
    if (f.district) result = result.filter(s => (s.acf?.district || '').toLowerCase().includes(f.district.toLowerCase()));
    if (f.metro) result = result.filter(s => (s.acf?.metro || '').toLowerCase().includes(f.metro.toLowerCase()));
    if (f.metroTime) result = result.filter(s => (s.acf?.metro_time || 0) <= Number(f.metroTime));
    if (f.renovation) result = result.filter(s => s.acf?.renovation === f.renovation);
    if (f.furniture) result = result.filter(s => s.acf?.furniture === f.furniture);
    if (f.houseType) result = result.filter(s => (s.acf?.house_type || '').toLowerCase().includes(f.houseType.toLowerCase()));
    if (f.ceilingHeight) result = result.filter(s => (s.acf?.ceiling_height || 0) >= Number(f.ceilingHeight));
    setFiltered(result);
  }, [filters, studios]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapLoaded) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
        setMapLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, [mapLoaded]);

  useEffect(() => {
    if (mapLoaded && filtered.length > 0 && typeof L !== 'undefined') {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;
      const map = L.map('map').setView([55.7558, 37.6173], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
      }).addTo(map);
      filtered.forEach(s => {
        if (s.acf?.lat && s.acf?.lng) {
          const marker = L.circleMarker([s.acf.lat, s.acf.lng], {
            radius: 8,
            fillColor: '#00d4ff',
            color: '#66fcf1',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7,
          }).addTo(map);
          marker.bindPopup(`<b>${s.title?.rendered || ''}</b><br/>${s.acf?.price?.toLocaleString('ru-RU')} ₽`);
        }
      });
      return () => { map.remove(); };
    }
  }, [mapLoaded, filtered]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

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

  const filterPanelStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '12px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(10,10,15,0.6)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '6px',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    ...inputStyle,
    color: '#b0b8c5',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  };

  const mapStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px',
    marginBottom: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
    zIndex: 1,
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
      <h1 style={titleStyle}>Поиск студий</h1>
      <div style={filterPanelStyle}>
        <input style={inputStyle} placeholder="Цена от" value={filters.priceMin} onChange={e => handleFilterChange('priceMin', e.target.value)} />
        <input style={inputStyle} placeholder="Цена до" value={filters.priceMax} onChange={e => handleFilterChange('priceMax', e.target.value)} />
        <input style={inputStyle} placeholder="Площадь от" value={filters.areaMin} onChange={e => handleFilterChange('areaMin', e.target.value)} />
        <input style={inputStyle} placeholder="Площадь до" value={filters.areaMax} onChange={e => handleFilterChange('areaMax', e.target.value)} />
        <input style={inputStyle} placeholder="Адрес" value={filters.address} onChange={e => handleFilterChange('address', e.target.value)} />
        <input style={inputStyle} placeholder="Район" value={filters.district} onChange={e => handleFilterChange('district', e.target.value)} />
        <input style={inputStyle} placeholder="Метро" value={filters.metro} onChange={e => handleFilterChange('metro', e.target.value)} />
        <input style={inputStyle} placeholder="Время до метро (мин)" value={filters.metroTime} onChange={e => handleFilterChange('metroTime', e.target.value)} />
        <select style={selectStyle} value={filters.renovation} onChange={e => handleFilterChange('renovation', e.target.value)}>
          <option value="">Ремонт: любой</option>
          <option value="yes">С ремонтом</option>
          <option value="no">Без ремонта</option>
        </select>
        <select style={selectStyle} value={filters.furniture} onChange={e => handleFilterChange('furniture', e.target.value)}>
          <option value="">Мебель: любая</option>
          <option value="yes">С мебелью</option>
          <option value="no">Без мебели</option>
        </select>
        <input style={inputStyle} placeholder="Тип дома" value={filters.houseType} onChange={e => handleFilterChange('houseType', e.target.value)} />
        <input style={inputStyle} placeholder="Высота потолков от (м)" value={filters.ceilingHeight} onChange={e => handleFilterChange('ceilingHeight', e.target.value)} />
      </div>
      <div id="map" style={mapStyle} />
      {loading ? (
        <div style={loadingStyle}>Загрузка...</div>
      ) : (
        <>
          <p style={{ color: '#b0b8c5', fontFamily: "'Inter', sans-serif", marginBottom: '20px' }}>
            Найдено: {filtered.length} студий
          </p>
          <div style={gridStyle}>
            {filtered.map(studio => (
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
        </>
      )}
    </main>
  );
}
