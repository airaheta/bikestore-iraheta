import { React, useState } from 'react'
 
export default function ItemCount({stock, initial}) {
  const [counter, setCounter] = useState(initial);
 
  //increase counter
  const increase = () => {
    if (counter < stock) {    
    setCounter(counter =>  parseInt (counter) + 1);
    }
};
 
  //decrease counter
  const decrease = () => {
    
    if (counter > initial) {    
        setCounter(counter => parseInt (counter)  - 1);
        }
    
    
  };
 

 
  return (
    <div className="counter">
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
      </div>
    </div>
  );
}
