import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IICvjEt0YN3abvaMo3RnyhRBtpWTPHpbXiB2Zhg4pXCOUGTVpy7Ln5kTPA375pTsqL4Ac7Ce90TwSgTQImSlBfj00S605FUKQ';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      currency = "EUR"
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButtonComponent;