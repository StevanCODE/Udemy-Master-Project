import React from 'react';
import { connect } from "react-redux"
import CartItemComponent from '../CartItemComponent/CartItemComponent';
import CustomButton from '../CustomButtonComponent/CustomButtonComponent';
import './CartDropdownComponentStyle.scss';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../Redux/cart/cart-selectors';
import { toggleCartHidden } from '../../Redux/cart/cart-actions.js';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItemComponent key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden());}}> 
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
