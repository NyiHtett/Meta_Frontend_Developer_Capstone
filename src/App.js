import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
    </>
  );
}

export default App;
