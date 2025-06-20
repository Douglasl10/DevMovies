import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 8px;

    img{
        border-radius: 30px;   
        width: 300px;
        height: 100%;
    }

    h3{
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-top: 15px;
    }

`;