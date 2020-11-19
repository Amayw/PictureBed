import React from 'react';
import './App.css';
import About from './views/About';
import Home from './views/Home';
import History from './views/History';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div>
          <Header/>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>

          <Footer/>
        </div>
    </div>
  );
}

export default App;
