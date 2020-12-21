import React, { useState, useEffect } from 'react';
import ReturnType from 'typescript';
import { Container, ProductDesc, Desc} from './styles';
import { formatPrice } from '../../util/format';
import { IProduct } from '../../types';
import axios from 'axios';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { RootState } from '../../store/modules/rootReducer';
import { connect, DispatchProp } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

type TParams = { id: string };

type amountProduct = { [key: number]: any };
const amountObject: amountProduct = {};
const mapStateToProps = (state: RootState) => ({
    cart: state.cart.products,
    amount: state.cart.products.reduce((amount, currentValue) => {  
        amount[currentValue.id] = currentValue.amount;
        return amount;
    }, amountObject),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type match = RouteComponentProps<TParams>;
type Props = StateProps & DispatchProp & match;
function ProductDetails(props:Props) {
    const initProduct = {image: "",
        id: 0,
        title: "string",
        priceFormatted: "",
        price: 0,
        amount: 0,
        description: "",
        author:"",
        pageCount:0,
        ISBN:"",
        bookDescription:""}

    const [products, setProducts] = useState<IProduct>(initProduct);

    useEffect( () => { 
        const { match } = props;
        axios.get<IProduct>(`http://localhost:3001/products/${match.params.id}`)
        .then(res => {
            const response = res.data;
            setProducts(response);
        })

    }, []);
    function handleAddProduct(products: IProduct) {
        const { dispatch } = props;
        dispatch(
            CartActions.addProductToCart({
                ...products,
                priceFormatted: formatPrice(products.price),
            })
        );
    }
    var history = useHistory();
    function handleBuyProduct(products: IProduct) {
       
        const { dispatch } = props;
        dispatch(
            CartActions.addProductToCart({
                ...products,
                priceFormatted: formatPrice(products.price),
            })
        );
        
        history.push('/cart');
    }
    
    return (
        <Container>
                <ProductDesc>
                <img src={products.image} alt={products.title} />
                <div>
                    <h1>{products.title}</h1>
                    <span>Price: {products.price}</span>
                    <span>Author: {products.author}</span>
                    <span>PageCount: {products.pageCount}</span>
                    <span>ISBN:{products.ISBN}</span>
                    <span>
                        <button type="button" onClick={() => handleAddProduct(products)}>
                        <span>Add to Cart</span>
                        </button>
                        <button type="button" onClick={()=> handleBuyProduct(products)} >
                        <span>Buy Now</span>
                        </button>
                    </span>
                </div>
                
                </ProductDesc>
                <Desc>
                    {products.bookDescription}
                </Desc>
        </Container>
    );
}
export default connect(mapStateToProps)(ProductDetails);
