// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./checkoutfrom";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(stripePromise);
const Payment = () => {
  <div className="bg-base-200">
    <p className="text-xl text-green-400">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptatem
      nihil quasi inventore commodi mollitia aut eaque deserunt exercitationem!
      Assumenda facilis quibusdam laborum cumque laudantium numquam, unde
      accusamus distinctio odit.
    </p>
    <h1 className="bg-white">payment system</h1>
    {/* <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements> */}
  </div>;
};

export default Payment;
