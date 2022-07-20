
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return ( <div className="cart-widget">
  
  <FontAwesomeIcon icon={faMotorcycle} size="2x" color="white" />
  <div className="qty-display">0</div>
</div>
);
};

export default CartWidget;

