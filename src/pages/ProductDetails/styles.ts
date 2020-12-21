import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;
`;
export const Desc = styled.div`
    padding: 30px;
    border-radius: 4px;
    padding-left: 200px;
    font-style: italic;
    font-size: x-large;
`;
export const ProductDesc = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 50px 0px;

    img {
        height: 200px;
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
        flex-direction:column;
        align-items: flex-start;
        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
        padding-left: 50px;
    }
    button {
        background: lightblue;
        border: 0;
        padding: 10px;
        margin: 10px;
        border-radius:5px;
        &:hover {
            background: ${darken(0.1, '#7159c1')};
        }
    }
`;

