import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import PlanetCards_Container from './components/PlanetCards/PlanetCards_Container'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <PlanetCards_Container/>
      <Footer/>
    </div>
  );
}

export default App;
