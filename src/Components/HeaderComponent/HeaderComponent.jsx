import React from 'react';
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { auth } from "../../Firebase/firebase.utils"
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../Redux/cart/cart-selectors';
import { selectCurrentUser } from '../../Redux/user/user-selectors';
import './HeaderComponentStyles.scss';
import CartIconComponent from '../CartIconComponent/CartIconComponent';
import CartDropdownComponent from '../CartDropdownComponent/CartDropdownComponent';

const HeaderComponent = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? <div className = "option" onClick = {() => auth.signOut()}> SIGN OUT </div> : <Link to = "/sign-up" className = "option"> SIGN IN </Link>}
      <CartIconComponent/>
    </div>
    { hidden ? null : <CartDropdownComponent/> }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderComponent);