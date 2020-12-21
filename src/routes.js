import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import ProductDetails from './pages/ProductDetails';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/myorders" exact component={MyOrders} />
            <Route path="/productDetails/:id" exact component={ProductDetails} />
        </Switch>
    );
}
