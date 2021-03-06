import React from 'react'
import Header from './components/Header/Header'
import PlanetTable_Container from './components/PlanetTable/PlanetTable_Container'
import Footer from './components/Footer/Footer'
import Planet_Container from './components/Planet/Planet_Container'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='bc'>
      <Header/>

      <div className='mainWrapper'>
          <Switch>
              <Route exact path='/page/:idPage?' component={PlanetTable_Container}/>
              <Route exact path='/planet/:id?' component={Planet_Container}/>
              <Route exact path='/' render={() => <Redirect to={'/page/1'} />}/>
              <Route path='*' component={ErrorPage}/>
          </Switch>
      </div>

      <div className='footerWrapper'>
          <Footer/>
      </div>
    </div>
  );
};

export default App;
