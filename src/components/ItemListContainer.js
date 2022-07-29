//import {React, useState } from "react";
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

//import { FontAwesome } from '@fortawesome/react-fontawesome';

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (data => {
      console.log(data)
      setItems(data)
    })
  },[])


  return ( 
  

  <div>
  <h3> {greeting}</h3>
  <ItemList items = {items}/>

</div>
);
};

export default ItemListContainer;

