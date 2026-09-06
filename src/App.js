import React from 'react';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Random from './components/Random';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="container">
        <div id="counter">
          <Counter />
        </div>
        <div id="random">
          <Random />
        </div>
      </main>
      <Footer />
    </div>
  );
}