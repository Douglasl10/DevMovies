import styled, {keyframes} from "styled-components";

const Scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    max-width: 1500px;
`;
export const Info = styled.div`

    z-index: 2;
    width: 50%;     
    padding: 20px;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
    }

`;
export const Poster = styled.div`

    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

     img {
        width: 350px;
        border-radius: 30px;
        z-index: 3;
        box-shadow: 0px 0px 100px 10px #000;
        animation: ${Scale} 0.5s linear;
     }

   `;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`;

