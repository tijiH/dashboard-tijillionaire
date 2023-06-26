import React from 'react';
import './style.css';
import FirefundValues from './FirefundValues';

export default function App() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', color: '#009879', textAlign: 'center', textTransform: 'uppercase', marginTop: '40px', marginBottom: '20px' }}>
    Dashboard TIJILLIONAIRE
  </h1>
      <FirefundValues />
    </div>
  );
}
