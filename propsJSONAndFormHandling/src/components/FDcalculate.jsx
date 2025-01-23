import React from 'react';

export default function FDcalculate() {
    const FDCal = (e)=>{
        const amount = e.target.amount.value;
        const time = e.target.time.value;
        
        alert(`The amount is ${amount} and the time is ${time}`);
        alert(`The interest is ${(amount*time*0.1)/100}`);
    };
  return (
    <form onSubmit={FDCal}>
        <input type="number" placeholder='Enter the amount' name='amount'></input>
        <input type="number" placeholder='Enter the time' name='time'></input>
        <button>Calculate</button>
    </form>
  );
}
