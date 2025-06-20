import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 30px;

    div{
        display: flex;
        flex-direction: column;
    }

    p{
        font-size: 14px;
        color: #fff;
        margin-top: 10px;
    }

    img{
        height: 200px;
    }
`;

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
`;