import styled from 'styled-components';

export const Container = styled.div`
    z-index: 99;
    min-height: 80px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 2px 70px;
    align-items: center;
    background-color: ${props => props.changeColor ? '#000' : 'transparent'};
    transition: background-color 0.6s ease-in-out;

    img{
        width: 20%;
    }
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 50px;
`;

export const Li = styled.li`
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        width: ${ props => props.isActive ? '100%' : '0'};
        height: 2px;
        background-color: #189b20;
        transition: width 0.3s ease-in-out;
        transform: translateX(-50%);
    }
    &:hover::after{
        width: 100%;
    }
   
`;