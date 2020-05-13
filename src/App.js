import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/Header.component';
import Form from './pages/form/form.component';
import { auth , createUserProfileDocument } from './components/firebase/firebase.utility';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      this.setState({
        currentUser: userAuth
      })

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
      return (
      <div>
        <Header currentUser={this.state.currentUser}  />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route  path="/signin" component={Form} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
