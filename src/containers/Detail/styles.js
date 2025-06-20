import styled, {keyframes} from 'styled-components';


const Scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: -100px;
`;

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

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

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99;

    img {
        width: 380px;
        border-radius: 30px;
        box-shadow: rgba(75, 75, 75, 0.7) 0px 30px 90px;
        animation: ${Scale} 0.5s linear;
    }
`;


export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2{
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #fff;
    }

    p{
        font-size: 20px;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 400;
    }
`;

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 20px 0;
    }

    h4{
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe{
      border: none;
      border-radius: 8px;
    }
`;
