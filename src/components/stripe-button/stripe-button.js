import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I7NloBTOdMNkU2ccoRdnzGbOZsi60rONpgGQytNXNrmnEjIaIMqMMRkKL9PmQWwTfoVT4OUKfkzHYoaumsH77Mf00tV3T4KTE'

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay now"
            name="Clothing Ltd."
            billingAddress 
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;