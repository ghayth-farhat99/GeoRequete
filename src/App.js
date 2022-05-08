import React, { createContext,useReducer } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import SignOut from './components/pages/SignOut';
import ZoomMap from './components/pages/ZommMap'
import { initialState,reducer } from './reducer/UseReducer';

export const UserContext = createContext();
const Routing = () => {
  return(
    <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/zoom' exact component={ZoomMap} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/Sign-Out' component={SignOut} />
          <Route path='/Sign-In' component={SignIn} />
          <Route path='/Sign-Up' component={SignUp} />
        </Switch>
  );
}
function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  
  return (
  
      <Router>
        <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Routing/>
        </UserContext.Provider>
      </Router>
    
  );
}

export default App;