import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Events from './components/Events';
import Profile from './components/Profile';
import BottomNav from './components/BottomNav';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // ! 위에거 나중에 백엔드로 옮겨서 인증 처리 방식 바꿔야 할듯
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container">
          <Routes>
            <Route exact path="/"  element={
              isAuthenticated ? <Navigate to="/home" /> : <Navigate to ="/login" />
          } />
          {/* exact 안하면 /home, /benefits 뭐 이런거 할때 / <- 이게 겹칠수도 있어서 기본 / 에 대해선 exact 해야됨. */}
            <Route path="/home" element={<Home/>} />
            <Route path="/benefits" element={<Benefits/>} />
            <Route path="/events" element={<Events></Events>}/>
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        {isAuthenticated && <BottomNav />}
      </div>
    </Router>
  );
}

export default App;
