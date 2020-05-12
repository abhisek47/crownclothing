import React from 'react';
import './App.css';
import Homapage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from "react-router-dom";

const Hatspage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homapage} />
        <Route  path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
