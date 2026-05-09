import '@/app/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Альтстудия',
  description: 'Продажа долевой собственности в квартирах',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0f', fontFamily: "'Inter', sans-serif", color: '#b0b8c5' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}