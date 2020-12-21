import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { connect, DispatchProp } from 'react-redux';
import ReturnType from 'typescript';
import { Container, ProductTable, Total, Address, OuterContainer } from './styles';
import { RootState } from '../../store/modules/rootReducer';
import * as CartActions from '../../store/modules/cart/actions';
import { IProduct } from '../../types';
import { formatPrice } from '../../util/format';

const mapStateToProps = (state: RootState) => ({
    products: state.cart.products.map(product => ({
        ...product,
        subtotal: formatPrice(product.amount * product.price),
    })),
    total: formatPrice(
        state.cart.products.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps & DispatchProp;

function Cart(props: Props) {
    const { products, dispatch, total } = props;

    function incrementProduct(product: IProduct) {
        dispatch(
            CartActions.updateProductAmount(product.id, product.amount + 1)
        );
    }

    function decrementProduct(product: IProduct) {
        dispatch(
            CartActions.updateProductAmount(product.id, product.amount - 1)
        );
    }

    return (
        <OuterContainer>
        <Address>
                <h1>Shipping Address</h1>
                <p>Address Line 1:</p>
                <input
                    type="text"
                />
                <p>Address Line 2:</p>
                <input
                    type="text"
                />
                <p>City</p>
                <select>
                    <option value=""></option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
                <p>State</p>
                <select>
                    <option value=""></option>
                    <option value="Telangana">Telangana</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
                <p>Country</p>
                <select>
                    <option value=""></option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                </select>
                <div>
                    <button><span>Save Address</span></button>
                    <button><span>Edit Address</span></button>
                </div>
            </Address>
            
        <Container>
            {products.map(product => (
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={product.image} alt="Book" />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>

                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            decrementProduct(product)
                                        }
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c2"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            incrementProduct(product)
                                        }
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c2"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            CartActions.removeToCart(product.id)
                                        )
                                    }
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </ProductTable>
            ))}
            <footer>
                <div>
                    <button type="button">Checkout</button>
                    <button type="button">Cancel</button>
                </div>
                <Total>
                    <span>Total</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
        </OuterContainer>
    );
}
export default connect(mapStateToProps)(Cart);
