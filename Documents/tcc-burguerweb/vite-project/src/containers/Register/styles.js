import styled from "styled-components";
import BackgoundLogin from '../../assets/bg.jpg';
import Backgound from '../../assets/background2-login.png';

export const Container = styled.div`
    display: flex;
    height:100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgoundLogin}');
    background-size:cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display:flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Backgound}');
    background-color: #414141;

    p{
        color: #000;
        font-size: 18px;
        font-weight: 800;
        a{
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size:40px;
    color: #000;

    span{
        color: #9758a6;
        font-family: "Road Rage", sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label{
        font-size: 18px;
        font-weight: 600;
        color: #000;
    }

    p{
       font-size : 14px;
       line-height: 88%;
       color: #cf3057;
       font-weight: 600;
       height: 10px;
    }
`;
