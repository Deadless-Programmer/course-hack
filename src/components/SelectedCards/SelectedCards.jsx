import React, { useEffect, useState } from "react";

const SelectedCards = ({ selectData, showCredit,setShowCredit }) => {
  console.log(selectData);
  // const [showCredit, setShowCredit] = useState(0);
  const [prices, setPrices] = useState(0);
  const [creditHour, setCreditHour] = useState(20);

  useEffect(() => {
    let totalPrice = 0;
    let totalCredit = 0;

    for (const data of selectData) {
      // console.log(data);
      const { price, credit } = data;

      totalPrice += price;

      if (totalCredit <= 20) {
        const newCredit = totalCredit + credit;
        if (newCredit <= 20) {
          totalCredit = newCredit;
        }
      }
    }

    setPrices(totalPrice);
    console.log(totalCredit);
    if (totalCredit <= 20) {
      setShowCredit(totalCredit);
    }
  }, [selectData]);

  return (
    <div className="bg-slate-100 rounded-lg text-center ">
      <h3 className="p-3">Credit Hour Remaining {creditHour -showCredit } hr</h3>
      <hr></hr>
      <div className="h-full">
        <h2 className="font-semibold py-5">
          Course Name & Total Course {selectData.length}{" "}
        </h2>
        {selectData.map((courseHeading, idx) => (
          <li className="p-2" key={idx}>
            {courseHeading.title}
          </li>
        ))}
      </div>
      <hr></hr>
      <p className="p-5">Total Credit Hour Expense : {showCredit} hr</p>
      {/* <p className="p-5">Total Credit Hour : { totalCredit < 20 ? totalCredit : ''} hr</p> */}
      <hr></hr>
      <p className="p-5">Total Price : {prices.toFixed(2)} USD</p>
    </div>
  );
};

export default SelectedCards;
