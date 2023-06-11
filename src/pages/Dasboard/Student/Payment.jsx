import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../hooks/useSelectedClass";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { id } = useParams();
  const [selectedClass, refetch] = useSelectedClass();
  const classItem = selectedClass.find((cls) => cls._id === id);
  console.log(classItem?.price);
  const price = parseFloat(classItem?.price);
  return (
    <div>
      <h3 className="text-3xl text-center">PAYMENT</h3>
      <div className="mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={price}
            refetch={refetch}
            selectedCls={classItem}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
