import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 10px;

        img {
            align-self: center;
            max-width: 110px;
        }
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }
        a {
            display:flex;
            flex-direction:column;
            text-decoration:none;
        }
        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;
            align-self: center;
            padding:7px;
            &:hover {
                background: ${darken(0.3, '#7159c1')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.2);
                svg {
                    margin-right: 5px;
                }
            }
        }
    }
`;
