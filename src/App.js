import logo from './logo.svg';
import './App.css';

import Shop from './Components/Shop/Shop';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import QandA from './Components/QandA/QandA';

function App() {

  return (
    <div className="App">
        <Header></Header>
        <Shop></Shop>
        <QandA></QandA>
    </div>
  );
}

export default App;
