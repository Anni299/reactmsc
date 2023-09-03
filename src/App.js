
import React from 'react';
import './App.css';
import FAQs from './FAQs';
import Header from './Header';
import Review from './Review';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <FAQs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
