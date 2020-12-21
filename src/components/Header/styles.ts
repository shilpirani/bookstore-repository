import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px;
`;
export const RightMenu = styled.div`   
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 20px;
    }
`;

export const LinkItems = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 10px;
        flex-direction:column;
        strong {
            display: block;
            color: #fff;
        }

        span {
            font-size: 12px;
            color: #999;
        }
    }
`;
