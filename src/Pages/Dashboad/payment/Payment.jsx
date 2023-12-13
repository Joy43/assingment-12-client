import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutfrom";

// VITE_PAYMENT-GATEWAY_PK
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  <div className="bg-blue-100">
    <h1 className="text-white text-2xl">payment now </h1>
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  </div>;
};

export default Payment;
