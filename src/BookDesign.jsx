import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function BookDesign({ trend }) {
  const { user } = useContext(UserContext);

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
          <span className="font-semibold text-md lg:text-xl mb-2 block mt-4">
            {trend.title}
          </span>
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
    </div>
  );
}

export default BookDesign;

