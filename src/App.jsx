import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import SelectedCards from "./components/SelectedCards/SelectedCards";

function App() {
   const [select, setSelect]=useState([]);


   const handleAddButton =(title,price,credit)=>{
    const newArray = [...select,  title,price,credit];
    setSelect(newArray);
    console.log(select)
   }



  return (
    <div className="max-w-[1080px] mx-auto ">
      <h1 className="text-2xl text-slate-900 font-bold mt-5 text-center">
        Course Registration
      </h1>
      <div className="md:flex justify-between gap-5 mt-10">
        <div className="md:w-2/3 ">
          <Cards handleAddButton={handleAddButton}></Cards>
        </div>
        <div className="md:w-1/3">
          <SelectedCards select={select}></SelectedCards>
        </div>
      </div>
    </div>
  );
}

export default App;
