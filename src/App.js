import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/Header.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
