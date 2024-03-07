import React from 'react';

const SelectedCard = ({data}) => {

    console.log(data)
    return (
        <div>
               <hr></hr>
      <p className="p-5">Total Credit Hour : 13</p>
      <hr></hr>
      <p className="p-5">Total Price : 48000 USD</p>
        </div>
    );
};

export default SelectedCard;