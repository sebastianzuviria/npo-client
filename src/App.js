import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <div>Welcome to Ong</div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
