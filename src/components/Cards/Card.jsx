import React, { useState } from "react";
import { FaDollarSign, FaRegCreditCard } from "react-icons/fa6";

const Card = ({ data, handleAddButton, showCredit }) => {
  const { id, img, title, paragraph, price, credit } = data;

  // const [isSelected, setIsSelected] = useState(false);
  const [buttonOff, setButtonOff] = useState(true);
  const handleSelect = () => {
    setButtonOff(false);
    console.log("button off" , buttonOff);
  };

  console.log(buttonOff);
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 h-full bg-slate-100 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Leroy Jenkins
            </a>
            <span className="text-xs dark:text-gray-400">4 hours ago</span>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt=""
            className="object-cover w-full mb-4  dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm h-24 overflow-y-scroll dark:text-gray-400">
            {paragraph}
          </p>
        </div>
        <div className="flex  justify-between">
          <p className="flex justify-items-center text-sm items-center">
            <FaDollarSign></FaDollarSign> {price}
          </p>
          <p className="flex justify-items-center text-sm items-center">
            <FaRegCreditCard></FaRegCreditCard>
            {credit}
          </p>
        </div>
        {buttonOff ? (
          <div onClick={handleSelect}>
            <button
            onClick={() => 
              handleAddButton(data)
              
            }
            className="bg-orange-600 text-white p-1 rounded-sm font-semibold hover:bg-lime-600"
          >
            Select
          </button>
          </div>
        ) : (
          <button
            className="bg-gray-300 text-gray-500 px-4 py-2 rounded "
            disabled
          >
            Credit limit exceeded
          </button>
        )}

        {/* {showCredit <21  ? (
        <button
        onClick={()=>{handleAddButton(data);handleSelect }}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isSelected ? "bg-blue-600" : ""
          }`}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      ) : (
        <button
          className="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed"
          disabled
        >
          Credit limit exceeded
        </button>
      )} */}
      </div>
    </div>
  );
};

export default Card;
