// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./checkoutfrom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);
const Payment = () => {
  <div>
    <h1>payment system</h1>
    {/* <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements> */}
  </div>;
};

export default Payment;
