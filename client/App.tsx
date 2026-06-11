import React from 'react';
import { CinematicNav } from './components/CinematicNav';
import { CinematicHero } from './components/CinematicHero';
import { Features3D } from './components/Feature3D';
import { CinematicShowcase } from './components/CinematicShowcase';
import { CinematicFooter } from './components/CinematicFooter';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CinematicNav />
      <main>
        <CinematicHero />
        <Features3D />
        <CinematicShowcase />
      </main>
      <CinematicFooter />
    </div>
  );
}

export default App;
