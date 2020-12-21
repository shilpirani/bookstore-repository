import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;
`;

export const ProductTable = styled.table`
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    header {
        display:flex;
        justify-content: space-between;
        background: lightblue;
    }
    div {
        padding:10px;
        display:flex;
        justify-content: flex-start;
        img {
            padding-right: 20px;
        }
        strong{
            display:flex:
            flex-direction:column;
        }
    }
    img {
        height: 120px;
    }
    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        padding-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;
        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }
    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

