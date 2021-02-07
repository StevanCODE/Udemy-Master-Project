import './App.css';
import React, {useState,useEffect} from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from "./Redux/user/user-actions"
import { selectCurrentUser } from './Redux/user/user-selectors';
import HomePage  from './Pages/HomePage/HomePage';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ShopPage from './Pages/Shop/ShopPage';
import HeaderComponent from "../src/Components/HeaderComponent/HeaderComponent"
import SignInUpPage from './Pages/SignInUpPage/SignInUpPage';
import { auth, createUserProfileDocument } from "../src/Firebase/firebase.utils"
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import CollectionPage from './Pages/CollectionPage/CollectionPage';

function App({currentUser, setCurrentUser}) {

  // const [currentUser, setCurrentUser] = useState({
  //   currentUser: null
  // })


  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  },[])

   

 
  return (
    <>
    <Router>
      <HeaderComponent/>
      <Switch>
      <Route exact path = "/" exact component = {HomePage}/>
      <Route exact path = "/shop" exact component = {ShopPage}/>
      <Route path={`/shop/:collectionId`} component={CollectionPage} />
      <Route exact path='/sign-up' render={() => currentUser ? (<Redirect to='/' />) : (<SignInUpPage/>)}/>
      <Route exact path = "/checkout" exact component = {CheckoutPage}/>

      </Switch>
    </Router>
    </>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,  mapDispatchToProps)(App);