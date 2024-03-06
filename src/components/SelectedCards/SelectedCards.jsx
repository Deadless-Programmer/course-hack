import React from "react";

const SelectedCards = ({select}) => {
    console.log(select)
  return (
    <div className="bg-slate-100 rounded-lg text-center ">
      <h3 className="p-3">Credit Hour Remaining 20 hr</h3>
      <hr></hr>
      <div className="h-64">
      <h2 className="font-semibold">Course Name </h2>
      </div>
      <hr></hr>
      <p className="p-5">Total Credit Hour : 13</p>
      <hr></hr>
      <p className="p-5">Total Price : 48000 USD</p>
    </div>
  );
};

export default SelectedCards;
