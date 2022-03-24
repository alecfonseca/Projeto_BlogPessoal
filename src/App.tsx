import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navibar from './components/estaticos/navbar/Navibar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <div style={{ minHeight:'100vh'}}>
        <Route exact path='/'>
            <Login />
          </Route>

        <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
