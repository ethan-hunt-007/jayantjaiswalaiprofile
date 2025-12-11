import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { HallOfFame } from './components/HallOfFame';
import { Writing } from './components/Writing';
import { Travel } from './components/Travel';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center w-full px-4 md:px-8 py-8 md:py-12 gap-16 md:gap-24 relative z-0">
        <Hero />
        <Experience />
        <HallOfFame />
        <Writing />
        <Travel />
        <Hobbies />
        <Footer />
      </main>
      <ThemeSwitcher />
    </>
  );
};

export default App;