'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
  profileCard: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    padding: '30px',
    border: '1px solid rgba(0,212,255,0.1)',
    maxWidth: '600px',
    margin: '0 auto 40px',
    textAlign: 'center',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,212,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    margin: '0 auto 16px',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
  },
  userName: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '24px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '8px',
  },
  userEmail: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#b0b8c5',
    marginBottom: '20px',
  },
  favoritesSection: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '22px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '20px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    border: '1px solid rgba(0,212,255,0.1)',
  },
  emptyText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    color: '#b0b8c5',
    marginBottom: '16px',
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid rgba(0,212,255,0.3)',
    backgroundColor: 'transparent',
    color: '#00d4ff',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  favoriteItem: {
    backgroundColor: 'rgba(18,20,28,0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(0,212,255,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s',
  },
  favoriteTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    color: '#fff',
  },
  favoriteLink: {
    color: '#00d4ff',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    transition: 'color 0.3s',
  },
};

export default function AccountPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Личный кабинет</h1>
      <p style={styles.description}>
        Управляйте своим профилем и избранным
      </p>

      <div style={styles.profileCard}>
        <div style={styles.avatar}>👤</div>
        <h2 style={styles.userName}>Пользователь</h2>
        <p style={styles.userEmail}>user@example.com</p>
      </div>

      <div style={styles.favoritesSection}>
        <h2 style={styles.sectionTitle}>Избранное</h2>
        {favorites.length > 0 ? (
          <div style={styles.favoritesGrid}>
            {favorites.map((id) => (
              <div key={id} style={styles.favoriteItem}>
                <span style={styles.favoriteTitle}>Студия #{id}</span>
                <Link href={`/studio/${id}`} style={styles.favoriteLink}>Просмотр</Link>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.emptyState}>
            <p style={styles.emptyText}>У вас пока нет избранных студий</p>
            <Link href="/search" style={styles.link}>Перейти к поиску</Link>
          </div>
        )}
      </div>
    </main>
  );
}