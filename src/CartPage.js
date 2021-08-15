import React from 'react';
import Item from './Item';

const CartPage = ({ items, onPageChange }) => {
    const summarizer = (runningTotal, listItem) => {
        // [1,1,2,2,2] Create one record and result for each 'id' in this array
        const existingItem = runningTotal.find(i => i.id === listItem.id)

        if(!existingItem) {
            runningTotal.push({
                ...listItem,
                count: 1
            })
        } else {
            existingItem.count ++;
        }

        return runningTotal;
    }
    const cart = items.reduce(summarizer, [])
    return (
        <div className="CartPage">
            <ul>
                {cart.map(item => (
                    <Item key={item.id} item={item}>
                        {item.count}
                    </Item>
                ))}
            </ul>
            <div className="total">
                    Total: ${cart.reduce((total, item) => {
                        return total + item.price * item.count
                    }, 0)}
            </div>
            <button onClick={() => onPageChange('checkout')}>
                Check Out Now
            </button>
        </div>
    )
}

export default CartPage;