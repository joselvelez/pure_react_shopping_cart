import React from 'react';
import ReactDOM from 'react-dom';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import NavBar from './NavBar';
import './index.css';

const products = [
    { id: 1, name: 'Phone', price: 299 },
    { id: 2, name: 'Laptop', price: 999 },
    { id: 3, name: 'Headphones', price: 99 },
    { id: 4, name: 'Camera', price: 799 }
];

class App extends React.Component {
    state = {
        cart: [],
        activePage: 'store'
    }

    handleAdd = item => {
        console.log(item);
        this.setState(prev => ({
            cart: [...prev.cart, item]
        }));
    };

    handlePageChange = page => {
        this.setState({ activePage: page });
    }

    render() {
        const { cart, activePage } = this.state;
        return (
            <div className="App">
                <NavBar cartCount={cart.length} onPageChange={this.handlePageChange} />
                <main>
                    {activePage === 'store' ? 
                    <ItemPage
                        onAddToCart={this.handleAdd}
                        items={products}
                    />
                    : <CartPage />
                    }
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);