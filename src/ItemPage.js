import React from 'react';

const ItemPage = ({ items, onAddToCart }) => (
    <div className="ItemPage">
        <h2>Items for sale</h2>
        {items.map(item => (
            <Item key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
    </div>
 );

    // We dont want addOnToCart assigned to the button to call
    // the handler directly. We want to pass in the item.

 const Item = ({ item, onAddToCart }) => (
     <li className="Item">
         {item.name}
         <span className="price">${item.price}</span>
         <button className="add" onClick={() => onAddToCart(item)}>Add to Cart</button>
     </li>
 );

 export default ItemPage;