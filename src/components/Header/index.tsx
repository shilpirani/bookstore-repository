import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import ReturnType from 'typescript';
import { Container, LinkItems, RightMenu } from './styles';
import logo from '../../assets/images/logo.svg';
import { RootState } from '../../store/modules/rootReducer';

const mapStateToProps = (state: RootState) => ({
    cartAmount: state.cart.products.length,
});

function Header({ cartAmount }: ReturnType<typeof mapStateToProps>) {
    return (
        <Container>
            <div style={{color:"white"}}>
                <h1>Book Store</h1>
            </div>
            <RightMenu>
            <div>
            <LinkItems to="/">
                <div>
                    <strong>Home</strong>
                </div>
            </LinkItems>
            <LinkItems to="/myorders">
                <div>
                    <strong>My Orders</strong>
                </div>
            </LinkItems>
            <LinkItems to="/cart">
                <div>
                    <strong>Cart</strong>
                    <span> {cartAmount} items</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </LinkItems>
            </div>
            </RightMenu>
        </Container>
    );
}

export default connect(mapStateToProps)(Header);
