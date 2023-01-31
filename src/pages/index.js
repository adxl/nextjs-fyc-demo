import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="./react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React FYC</h1>
      <Link href="/articles">Voir les articles</Link>
    </div>
  );
}
