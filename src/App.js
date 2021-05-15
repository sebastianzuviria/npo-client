import React from 'react';
import AppRouter from './routes/AppRouter';
//import Footer from './components/Footer/Footer';
import Footer from './components/Footerdinamic/Footer';
import Header from './components/Header/Header';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isLogged } from './slices/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLogged());
  }, []);

  return (
    <div>
      <div>Welcome to Ong</div>
      <Header />
      <div className="animate__animated animate__fadeIn">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
