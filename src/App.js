import React from 'react';
import AppRouter from './routes/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <div>Welcome to Ong</div>
      <Header />
      { /* This should be the main container.  */ }
      <div className='animate__animated animate__fadeIn animate__delay-1s'>
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
