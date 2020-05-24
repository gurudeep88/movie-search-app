import React from 'react';
import Navbar from './components/layout/Navbar';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import { store } from './store/store';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
        <Navbar />
        
        <Route exact path='/' component={Landing} />
        <Route path='/movie/:id' component={Movie} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
