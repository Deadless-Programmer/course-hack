import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleAddButton, showCredit}) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("content.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {datas.map((data) => (
        <Card key={data.id} showCredit={showCredit} handleAddButton={handleAddButton} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
