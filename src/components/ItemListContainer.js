//import {React, useState } from "react";
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

//import { FontAwesome } from '@fortawesome/react-fontawesome';

const ItemListContainer = ({lista}) => {

  const [items, setItems] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (data => 
      setItems(data)
      )
  },[])


  return ( 
  

  <div>
  <h3>contenido prop: {lista}</h3>
  <ItemList Items = {items}/>
</div>
);
};

export default ItemListContainer;

