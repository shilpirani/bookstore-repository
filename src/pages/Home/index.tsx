import React, { useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useAsyncEffect } from 'use-async-effect';
import { connect, DispatchProp } from 'react-redux';
import ReturnType from 'typescript';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { IProduct } from '../../types';

import { RootState } from '../../store/modules/rootReducer';
import * as CartActions from '../../store/modules/cart/actions';
import { useHistory } from 'react-router-dom';

type amountProduct = { [key: number]: any };
const amountObject: amountProduct = {};
const mapStateToProps = (state: RootState) => ({
    cart: state.cart.products,
    amount: state.cart.products.reduce((amount, currentValue) => {
        // eslint-disable-next-line no-param-reassign
        amount[currentValue.id] = currentValue.amount;
        return amount;
    }, amountObject),
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps & DispatchProp;

function Home(props: Props) {
    const [products, setProducts] = useState<IProduct[]>([]);

    useAsyncEffect(async () => {
        const response = await api.get('http://localhost:3001/products');

        const productsData = response.data.map((product: IProduct) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        setProducts(productsData);
    }, []);
    var history = useHistory();
    function buyProduct(product: IProduct) {
        const { dispatch } = props;
        dispatch(
            CartActions.addProductToCart({
                ...product,
                priceFormatted: formatPrice(product.price),
            })
        );
        history.push('/cart');
    }
    
    const handleClickBook =  (product : IProduct) => {
        history.push(`/productDetails/${product.id}`);
    //    history.push({
    //     pathname: '/productDetails',
    //     search: `?id=${product.id}`,
    //     state: { product: product }
    //   })
    }
    

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <a onClick={()=> handleClickBook(product)} href="">
                  
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <div >{product.description}</div>
                   
                    </a>
                    <button
                        type="button"
                        onClick={() => buyProduct(product)}
                    >
                        {/* <div>
                            <MdAddShoppingCart size={16} color="#fff" />
                            {props.amount[product.id] || 0}
                        </div> */}
                        <span>Buy Now</span>
                    </button>
                </li>
            ))}
            )
        </ProductList>
    );
}

export default connect(mapStateToProps)(Home);
