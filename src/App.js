import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Details from "./components/Details/Details";

import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Search from "./components/Search/Search";
export const userContext=createContext();
function App() {
  const [loggedInuser,setLoggedInUser]=useState({})
  return (
    <userContext.Provider value={[loggedInuser,setLoggedInUser]}>
      <Router>
        <Home/>
    <Switch>
      <Route exact path="/">
        <Details/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <PrivateRoute path="/search/:placeId">
        <Search/>
      </PrivateRoute>
      <Route path="/booking/:id">
        <Booking/>
      </Route>
      <Route path="*">
        <NoMatch></NoMatch>
      </Route>
    </Switch>
    </Router>
  </userContext.Provider>
);
}

export default App;
