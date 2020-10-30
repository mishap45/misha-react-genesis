import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import PlanetCards_Container from './components/PlanetCards/PlanetCards_Container'
import Footer from './components/Footer/Footer'
import Planet_Container from './components/Planet/Planet_Container'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={PlanetCards_Container}/>
          <Route exact path='/planet/:id?' component={Planet_Container}/>
          <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
