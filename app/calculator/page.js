'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CalculatorPage() {
  const searchParams = useSearchParams();
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [price, setPrice] = useState(Number(searchParams.get('price')) || 5000000);
  const [area, setArea] = useState(Number(searchParams.get('area')) || 25);
  const [rentType, setRentType] = useState('long');
  const [growthRate, setGrowthRate] = useState(8);
  const [rentGrowth, setRentGrowth] = useState(5);
  const [years, setYears] = useState(10);
  const [favorites, setFavorites] = useState([]);
  const [selectedFav, setSelectedFav] = useState('');

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  const monthlyRent = rentType === 'long' ? price * 0.005 : price * 0.007;
  const annualRent = monthlyRent * 12;

  const generateData = () => {
    const data = [];
    let currentPrice = price;
    let currentRent = annualRent;
    let totalIncome = 0;
    for (let y = 0; y <= years; y++) {
      if (y === 0) {
        data.push({ year: 0, price: currentPrice, rentIncome: 0, totalIncome: 0, value: currentPrice });
      } else {
        currentPrice = currentPrice * (1 + growthRate / 100);
        totalIncome += currentRent;
        data.push({
          year: y,
          price: Math.round(currentPrice),
          rentIncome: Math.round(currentRent),
          totalIncome: Math.round(totalIncome),
          value: Math.round(currentPrice + totalIncome),
        });
        currentRent = currentRent * (1 + rentGrowth / 100);
      }
    }
    return data;
  };

  const data = generateData();

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => {
        if (chartInstance) chartInstance.destroy();
        const ctx = chartRef.current.getContext('2d');
        const labels = data.map(d => `${d.year} г.`);
        const instance = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Стоимость студии',
                data: data.map(d => d.price),
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0,212,255,0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Общий доход',
                data: data.map(d => d.totalIncome),
                borderColor: '#66fcf1',
                backgroundColor: 'rgba(102,252,241,0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Итоговая стоимость',
                data: data.map(d => d.value),
                borderColor: '#fff',
                backgroundColor: 'rgba(255,255,255,0.05)',
                fill: true,
                tension: 0.4,
                borderDash: [5, 5],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: '#b0b8c5', font: { family: 'Inter' } },
              },
            },
            scales: {
              x: { ticks: { color: '#6a7280' }, grid: { color: 'rgba(255,255,255,0.05)' } },
              y: { ticks: { color: '#6a7280', callback: v => v.toLocaleString('ru-RU') + ' ₽' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            },
          },
        });
        setChartInstance(instance);
      };
      document.body.appendChild(script);
      return () => {
        if (chartInstance) chartInstance.destroy();
      };
    }
  }, [price, area, rentType, growthRate, rentGrowth, years]);

  const loadFavorite = async (id) => {
    try {
      const res = await fetch(`https://altstudiya.ru/wp-json/wp/v2/studio/${id}`);
      const data = await res.json();
      if (data.acf) {
        setPrice(data.acf.price || 0);
        setArea(data.acf.area || 0);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const mainStyle = {
    paddingTop: '120px',
    maxWidth: '1000px',
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
    marginBottom: '40px',
  };

  const cardStyle = {
    background: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '30px',
    marginBottom: '24px',
    border: '1px solid rgba(0,212,255,0.1)',
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#b0b8c5',
    marginBottom: '8px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    background: 'rgba(10,10,15,0.6)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '16px',
  };

  const sliderStyle = {
    width: '100%',
    marginBottom: '16px',
    accentColor: '#00d4ff',
  };

  const selectStyle = {
    ...inputStyle,
    color: '#b0b8c5',
  };

  const chartContainerStyle = {
    width: '100%',
    height: '400px',
    marginBottom: '30px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
  };

  const thStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid rgba(0,212,255,0.1)',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    color: '#b0b8c5',
  };

  const resultStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#66fcf1',
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Калькулятор доходности</h1>

      {favorites.length > 0 && (
        <div style={cardStyle}>
          <label style={labelStyle}>Загрузить из избранного:</label>
          <select
            style={selectStyle}
            value={selectedFav}
            onChange={e => { setSelectedFav(e.target.value); loadFavorite(e.target.value); }}
          >
            <option value="">Выберите студию</option>
            {favorites.map(id => (
              <option key={id} value={id}>Студия #{id}</option>
            ))}
          </select>
        </div>
      )}

      <div style={cardStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={labelStyle}>Цена студии (₽)</label>
            <input style={inputStyle} type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
          </div>
          <div>
            <label style={labelStyle}>Площадь (м²)</label>
            <input style={inputStyle} type="number" value={area} onChange={e => setArea(Number(e.target.value))} />
          </div>
        </div>
        <label style={labelStyle}>Тип аренды</label>
        <select style={selectStyle} value={rentType} onChange={e => setRentType(e.target.value)}>
          <option value="long">Долгосрочная (0.5% в месяц)</option>
          <option value="short">Краткосрочная (0.7% в месяц)</option>
        </select>
        <label style={labelStyle}>Рост стоимости недвижимости: {growthRate}% в год</label>
        <input style={sliderStyle} type="range" min="0" max="20" step="0.5" value={growthRate} onChange={e => setGrowthRate(Number(e.target.value))} />
        <label style={labelStyle}>Рост арендной ставки: {rentGrowth}% в год</label>
        <input style={sliderStyle} type="range" min="0" max="15" step="0.5" value={rentGrowth} onChange={e => setRentGrowth(Number(e.target.value))} />
        <label style={labelStyle}>Срок инвестиции: {years} лет</label>
        <input style={sliderStyle} type="range" min="1" max="30" step="1" value={years} onChange={e => setYears(Number(e.target.value))} />
      </div>

      <div style={cardStyle}>
        <div style={chartContainerStyle}>
          <canvas ref={chartRef} />
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '16px' }}>Прогноз по годам</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Год</th>
                <th style={thStyle}>Стоимость студии</th>
                <th style={thStyle}>Доход от аренды</th>
                <th style={thStyle}>Накопленный доход</th>
                <th style={thStyle}>Итого</th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => (
                <tr key={d.year}>
                  <td style={tdStyle}>{d.year === 0 ? 'Сегодня' : `${d.year} год`}</td>
                  <td style={tdStyle}>{d.price.toLocaleString('ru-RU')} ₽</td>
                  <td style={tdStyle}>{d.rentIncome.toLocaleString('ru-RU')} ₽</td>
                  <td style={tdStyle}>{d.totalIncome.toLocaleString('ru-RU')} ₽</td>
                  <td style={{ ...tdStyle, color: '#66fcf1', fontWeight: 700 }}>{d.value.toLocaleString('ru-RU')} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={resultStyle}>
          Через {years} лет: {data[data.length - 1]?.value?.toLocaleString('ru-RU')} ₽
        </div>
      </div>
    </main>
  );
}
