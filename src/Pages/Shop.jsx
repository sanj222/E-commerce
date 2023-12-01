import React from 'react';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/Item/Item';
import './Shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      {all_product.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          MRP={item.MRP}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Shop;
