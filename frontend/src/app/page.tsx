import Image from 'next/image';
import NavBar from '../components/NavBar';
import MainPage from '../components/MainPage';

export default function Home() {
  return (
    <main className='min-h-screen flex'>
      <NavBar />
      <MainPage />
    </main>
  );
}
