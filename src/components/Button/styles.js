import styled, { css } from 'styled-components';

const button = css`
    border: 3px solid #fff;
    border-radius: 30px;
    padding: 10px 20px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;

     &&:hover {
        background: #fff;
        color: #ff0000;
        transition: all 0.5s ease-in-out;
        transform: scale(1.1);
        box-shadow: 0 0 10px #fff;
        font-weight: 500;
    }
`;

export const ButtonWhite = styled.button`
    ${button}
`;

export const ButtonRed = styled.button`
    ${button}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 10px #ff0000;

    &&:hover {
        background: #ff0000;
        color: #fff;
        border: 4px solid #ff0000;
        box-shadow: 0px 0px 20px #ff0000;
    }
`;