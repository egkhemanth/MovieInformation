import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Landing from './Components/Landing';
import Movie from './Components/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;