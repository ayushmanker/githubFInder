import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/pages/about';
import Userinfo from './components/Users/Userinfo';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
 
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () =>{
  
      return(
       <GithubState>
         <AlertState>
         <Router>
          <div className='App'>
            <Navbar/>
            <div className="container">
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login'
                component={Userinfo}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
        </AlertState>
       </GithubState> 
      )
  }
  export default App;