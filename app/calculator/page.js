'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Chart from 'chart.js/auto';

const styles = {
  main: {
    paddingTop: '120px',
    maxWidth: '1200px',
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
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },
  card: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
  },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    color: '#b0b8c5',
    fontSize: '13px',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(10,10,15,0.5)',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(10,10,15,0.5)',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  sliderContainer: {
    marginBottom: '16px',
  },
  slider: {
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    background: 'linear-gradient(90deg, #00d4ff, #66fcf1)',
    outline: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  },
  sliderValue: {
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    marginTop: '4px',
  },
  chartContainer: {
    width: '100%',
    height: '300px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
  },
  th: {
    padding: '10px 12px',
    textAlign: 'left',
    color: '#00d4ff',
    borderBottom: '1px solid rgba(0,212,255,0.2)',
    fontWeight: 600,
  },
  td: {
    padding: '10px 12px',
    color: '#b0b8c5',
    borderBottom: '1px solid rgba(0,212,255,0.05)',
  },
  resultValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '28px',
    fontWeight: 700,
    color: '#66fcf1',
    textAlign: 'center',
    padding: '20px',
  },
};

export default function CalculatorPage() {
  const searchParams = useSearchParams();
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [price, setPrice] = useState(Number(searchParams.get('price')) || 5000000);
  const [area, setArea] = useState(Number(searchParams.get('area')) || 25);
  const [rentType, setRentType] = useState('long');
  const [priceGrowth, setPriceGrowth] = useState(8);
  const [rentGrowth, setRentGrowth] = useState(5);
  const [years, setYears] = useState(5);
  const [favorites, setFavorites] = useState([]);
  const [selectedFavorite, setSelectedFavorite] = useState('');

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const monthlyRent = rentType === 'long'
      ? area * 1200
      : area * 1800;

    const yearlyData = [];
    const labels = [];
    let cumulativeIncome = 0;
    let currentPrice = price;
    let currentRent = monthlyRent;

    for (let i = 1; i <= years; i++) {
      currentPrice = currentPrice * (1 + priceGrowth / 100);
      currentRent = currentRent * (1 + rentGrowth / 100);
      cumulativeIncome += currentRent * 12;
      yearlyData.push({
        year: i,
        price: Math.round(currentPrice),
        rent: Math.round(currentRent * 12),
        cumulativeIncome: Math.round(cumulativeIncome),
        totalReturn: Math.round(currentPrice + cumulativeIncome),
      });
      labels.push(`Год ${i}`);
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Стоимость студии',
            data: yearlyData.map((d) => d.price),
            borderColor: '#00d4ff',
            backgroundColor: 'rgba(0,212,255,0.1)',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Накопленный доход',
            data: yearlyData.map((d) => d.cumulativeIncome),
            borderColor: '#66fcf1',
            backgroundColor: 'rgba(102,252,241,0.1)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#b0b8c5',
              font: { family: "'Inter', sans-serif" },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#b0b8c5' },
            grid: { color: 'rgba(255,255,255,0.05)' },
          },
          y: {
            ticks: { color: '#b0b8c5' },
            grid: { color: 'rgba(255,255,255,0.05)' },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [price, area, rentType, priceGrowth, rentGrowth, years]);

  const monthlyRent = rentType === 'long' ? area * 1200 : area * 1800;
  const yearlyRent = monthlyRent * 12;
  const yieldPercent = ((yearlyRent / price) * 100).toFixed(2);

  const yearlyData = [];
  let cumulativeIncome = 0;
  let currentPrice = price;
  let currentRent = monthlyRent;

  for (let i = 1; i <= years; i++) {
    currentPrice = currentPrice * (1 + priceGrowth / 100);
    currentRent = currentRent * (1 + rentGrowth / 100);
    cumulativeIncome += currentRent * 12;
    yearlyData.push({
      year: i,
      price: Math.round(currentPrice),
      rent: Math.round(currentRent * 12),
      cumulativeIncome: Math.round(cumulativeIncome),
      totalReturn: Math.round(currentPrice + cumulativeIncome),
    });
  }

  const formatPrice = (val) => {
    return new Intl.NumberFormat('ru-RU').format(val) + ' ₽';
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Калькулятор доходности</h1>
      <p style={styles.description}>
        Рассчитайте потенциальную доходность от инвестиций в студию
      </p>

      <div style={styles.grid}>
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Параметры</h2>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Стоимость студии (₽)</label>
              <input
                style={styles.input}
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Площадь (м²)</label>
              <input
                style={styles.input}
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Тип аренды</label>
              <select
                style={styles.select}
                value={rentType}
                onChange={(e) => setRentType(e.target.value)}
                onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
              >
                <option value="long">Долгосрочная</option>
                <option value="short">Краткосрочная</option>
              </select>
            </div>

            <div style={styles.sliderContainer}>
              <label style={styles.label}>Рост стоимости в год: {priceGrowth}%</label>
              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={priceGrowth}
                onChange={(e) => setPriceGrowth(Number(e.target.value))}
                style={styles.slider}
              />
            </div>

            <div style={styles.sliderContainer}>
              <label style={styles.label}>Рост аренды в год: {rentGrowth}%</label>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={rentGrowth}
                onChange={(e) => setRentGrowth(Number(e.target.value))}
                style={styles.slider}
              />
            </div>

            <div style={styles.sliderContainer}>
              <label style={styles.label}>Период: {years} лет</label>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                style={styles.slider}
              />
            </div>

            {favorites.length > 0 && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Избранное</label>
                <select
                  style={styles.select}
                  value={selectedFavorite}
                  onChange={(e) => {
                    setSelectedFavorite(e.target.value);
                    if (e.target.value) {
                      const studio = JSON.parse(e.target.value);
                      setPrice(studio.price);
                      setArea(studio.area);
                    }
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#00d4ff'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'}
                >
                  <option value="">Выберите из избранного</option>
                  {favorites.map((id) => (
                    <option key={id} value={JSON.stringify({ price: 5000000, area: 25 })}>
                      Студия #{id}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Результаты</h2>
            <div style={styles.resultValue}>
              Доходность: {yieldPercent}%
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(0,212,255,0.05)', borderRadius: '8px' }}>
                <div style={{ color: '#b0b8c5', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>Аренда/мес</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>{formatPrice(monthlyRent)}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(0,212,255,0.05)', borderRadius: '8px' }}>
                <div style={{ color: '#b0b8c5', fontSize: '12px', fontFamily: "'Inter', sans-serif" }}>Аренда/год</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>{formatPrice(yearlyRent)}</div>
              </div>
            </div>

            <div style={styles.chartContainer}>
              <canvas ref={chartRef} />
            </div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Год</th>
                  <th style={styles.th}>Стоимость</th>
                  <th style={styles.th}>Аренда/год</th>
                  <th style={styles.th}>Доход всего</th>
                </tr>
              </thead>
              <tbody>
                {yearlyData.map((d) => (
                  <tr key={d.year}>
                    <td style={styles.td}>{d.year}</td>
                    <td style={styles.td}>{formatPrice(d.price)}</td>
                    <td style={styles.td}>{formatPrice(d.rent)}</td>
                    <td style={styles.td}>{formatPrice(d.totalReturn)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}