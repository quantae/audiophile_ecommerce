/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// library imports
import React from "react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";

// component imports
import RootLayout from "../../layouts/RootLayout";
import styles from "./checkout_page.module.css";
import Button from "../../components/button/Button";
import { TextInput, RadioInput } from "../../components/input/Input";
import CartPage from "../cart/CartPage";
import Thankyou from "../thankyou/Thankyou";

// variable/methods/redux imports
import { selectCartItems } from "../../feature/navigation_bar/cart/cartSlice";

const CheckoutPage = ({ children }) => {
  // set thankyou modal
  const [isThankyouModalOpen, setIsThankyouModalOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  // ThankYou modal toggle handler
  const toggleThankyouModal = () => {
    setIsThankyouModalOpen(true);
  };
  return (
    <RootLayout>
      <div className={styles.container}>
        <Button
          label="Go back"
          variant="borderless"
          className={styles.go_back_button}
        />
        <div className={styles.form_container}>
          <h2>CHECKOUT</h2>
          <h4 className={styles.billing_details}>BILLING DETAILS</h4>
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <TextInput
                label="Name"
                name="name"
                id="name"
                type="text"
                placeholder="Name"
              />
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="First Name"
              />
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                type="phone"
                placeholder="+1202-55-0136"
              />
              <h4 className={styles.billing_details}>SHIPPING INFO</h4>
              <TextInput
                label="Your Address"
                name="address"
                id="address"
                type="text"
                placeholder="1137 Williams Avenue"
              />
              <TextInput
                label="Zip Code"
                name="zipCode"
                type="text"
                placeholder="10001"
              />
              <TextInput
                label="City"
                name="city"
                type="text"
                placeholder="New York"
              />
              <TextInput
                label="Country"
                name="country"
                type="text"
                placeholder="United States"
              />

              <h4
                className={styles.billing_details}
                role="group"
                aria-label="payment-radio-groud"
              >
                PAYMENT DETAILS
              </h4>
              <RadioInput
                label="e-Money"
                id="e-Money"
                name="payment"
                type="radio"
                value="e-Money"
                checked
              />
              <RadioInput
                label="cash on Delivery"
                id="paymentOnDelivery"
                name="payment"
                type="radio"
                value="paymentOnDelivery"
              />

              <TextInput
                label="e-Money Number"
                name="e-MoneyNumber"
                type="number"
                placeholder="238521993"
              />
              <TextInput
                label="e-Money PIN"
                name="e-MoneyPin"
                type="number"
                placeholder="6891"
              />
            </Form>
          </Formik>
        </div>

        <div>
          
          <CartPage
            variant="B"
            onClick={() => {
              if (cartItems.length < 1) {
                setIsCartEmpty(true);
                setTimeout(() => {
                  setIsCartEmpty(false);
                }, 5000);
              } else {
                toggleThankyouModal();
              }
            }}
          />
          {isCartEmpty && (
            <p className={styles.empty_cart_warning}>
              No item in cart to pay for. Add some products to your cart.
            </p>
          )}
        </div>

        {isThankyouModalOpen && (
          <div className={styles.modal_outer}>
            <Thankyou />
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default CheckoutPage;
