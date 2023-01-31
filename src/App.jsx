import React from 'react';
import './App.css';
import Routing from './Routing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="p-16">
        <Routing />
      </main>
    </div>
  );
}

export default App;
