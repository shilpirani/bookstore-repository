import React, { useState, useEffect } from 'react';
import ReturnType from 'typescript';
import { Container, ProductTable } from './styles';
import { formatPrice } from '../../util/format';
import { IOrder } from '../../types';
import axios from 'axios';


function MyOrders() {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect( () => {
        
        axios.get<IOrder[]>('http://localhost:3001/orders')
        .then(res => {
            const response = res.data;
            setOrders(response);
        })

    }, []);

    return (
        <Container>
            {orders.map(order => (
                <ProductTable>
                    <header>
                        <span>Order Placed: {order.orderDate}</span>
                        <span>Status: {order.status}</span>
                    </header>
                    <div>
                        <img src={order.bookImage} alt="Book" />
                        <strong>
                            <h1>{order.bookTitle}</h1>
                            <span>Author: {order.bookAuthor}</span>
                            <span>Price: {order.bookPrice}</span>
                        </strong>
                    </div>                     
                </ProductTable>
            ))}
            
        </Container>
    );
}
export default MyOrders;
