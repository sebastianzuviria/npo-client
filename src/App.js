import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import './App.css';
import { useDispatch } from 'react-redux';
import { isLogged } from './slices/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogged());
  });
  return (
    <div className="animate__animated animate__fadeIn">
      <AppRouter />
    </div>
  );
}

export default App;
