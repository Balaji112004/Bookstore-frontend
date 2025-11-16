import { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./context/UserContext";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const backendBaseUrl = "https://bookstorebackend-production-f262.up.railway.app";

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        console.log("🔍 Verifying payment for order:", orderId);

        const res = await axios.post(
          `${backendBaseUrl}/api/orders/verify/${orderId}`,
          {
            payment_id: "test_payment_id_123",
            signature: "test_signature_123",
          }
        );

        console.log("✅ Verification response:", res.data);

        if (res.data.success) {
          alert("✅ Payment successful! Order confirmed.");
          navigate("/order");
        } else {
          console.error("❌ Payment verification failed!", res.data.message);
          navigate("/cart");
        }
      } catch (err) {
        console.error("🚨 Payment verification error:", err);
        navigate("/cart");
      }
    };

    if (orderId && user?.id) {
      verifyPayment();
    }
  }, [orderId, user, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-semibold text-gray-700">
        Verifying your payment, please wait...
      </p>
    </div>
  );
}

export default PaymentSuccess;
