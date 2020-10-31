import React from 'react'
import Header from './components/Header/Header'
import PlanetCards_Container from './components/PlanetCards/PlanetCards_Container'
import Footer from './components/Footer/Footer'
import Planet_Container from './components/Planet/Planet_Container'
import ErrorPage from './components/ErrorPage/ErrorPage'

import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/page/:idPage?' component={PlanetCards_Container}/>
          <Route exact path='/planet/:id?' component={Planet_Container}/>
          <Route exact path='/' render={() => <Redirect to={'/page/1'} />}/>
          <Route path='*' component={ErrorPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
