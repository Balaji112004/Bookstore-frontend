import React, { useContext } from "react";
import axios from "axios"; // you missed importing axios
import { UserContext } from "./context/UserContext";

function BookDesign({ trend }) {
  const { user } = useContext(UserContext);

  const cartSubmit = async () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      const res = await axios.post(
        `https://bookstorebackend-production-f262.up.railway.app/api/cartAdd/${trend.id}`,
        { userId: user.id }
      );
      console.log(res.data);
      alert("Added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart!");
    }
  };

  return (
    <div className="lg:w-[210px] w-[150px] h-[360px] lg:h-[420px] gap-6 bg-white rounded-xl shadow p-2 lg:p-4 flex-row items-center justify-center">
      <div className="">
        <center>
          <img
            src={trend.coverImage}
            className="lg:h-[250px] w-[140px] h-[200px] lg:w-[170px] rounded-xl cursor-pointer shadow-2xl"
            alt={trend.title}
          />
        </center>
      </div>
      <div>
        <center>
          <span className="font-semibold text-md lg:text-xl mb-2 block mt-4">{trend.title}</span>
        </center>
      </div>
      <div className="mt-4 lg:mt-2">
        <center>
          <span className="text-lg lg:text-xl m-2 font-bold text-green-600">
            ₹{trend.newPrice}
          </span>
          <del className="mr-3 text-gray-500 text-md">
            ₹{trend.oldPrice}
          </del>
        </center>
      </div>
      <center>
        <button
          onClick={cartSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add to Cart
        </button>
      </center>
    </div>
  );
}

export default BookDesign;
