import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/main.css';
import Home from './containers/Home';
import About from './containers/About';
import Instructions from './containers/Instruction';
import Process from './containers/Process';
import Search from './containers/Search';
import Donate from './containers/Donate';
import DontDonate from './containers/DontDonate';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  // This controls the direction of the page for RTL languages
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      App.js
    </div>
    );
}

export default App;
