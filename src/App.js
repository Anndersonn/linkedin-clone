import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login/Login';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="app__wrapper">
          <Sidebar />
          <Feed />
        </div>
       )} 
    </div>
  );
}

export default App;
