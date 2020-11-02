import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
    </Router>
  );
}

export default App;
