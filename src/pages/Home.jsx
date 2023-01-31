import React from 'react';
import { Link } from 'react-router-dom';

import reactLogo from '../assets/react.svg';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React FYC</h1>
      <Link to="/articles">Voir les articles</Link>
    </div>
  );
}
