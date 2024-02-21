'use client';
import NavBar from '../components/NavBar';
import MainPage from '../components/MainPage';
import { useState } from 'react';
import Popup from '@/components/Popup';

export default function Home() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    console.log('handlePopUpOpen');
    setIsPopUpOpen(true);
  };

  const handlePopUpClose = () => {
    setIsPopUpOpen(false);
  };

  return (
    <main className='min-h-screen flex'>
      {isPopUpOpen && <Popup handlePopUpClose={handlePopUpClose} />}
      <NavBar />
      <MainPage handlePopUpOpen={handlePopUpOpen} />
    </main>
  );
}
