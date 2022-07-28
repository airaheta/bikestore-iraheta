import React from "react";

const ItemList = ({items}) =>  {
return (
<div>
    {items.map((item)=>(<Item item= {item}/>))}    
<div/>

);


}   
export default Itemlist 