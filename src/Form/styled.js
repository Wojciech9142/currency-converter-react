import styled from 'styled-components';

export const FormElement = styled.form`
    margin:200px auto;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0 0 2px 3px hsl(180, 100%, 35%);
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    max-width: 100%;
    box-sizing: border-box;

    @media(max-width: 700px){
        width: 100%;
    }
`;

export const InputElement = styled.input`
    width: 50%;
    height: 30px;
    padding: 13px;
    font-size: 18px;
    border: none;
    box-shadow: 0 0 2px 2px #DDD;
`;

export const SelectElement = styled.select`
    width: 50%;
    padding: 13px;
    font-size: 15px;
    border: none;
    box-shadow: 0 0 2px 2px #DDD;
`;

export const ButtonElement = styled.button`
    width: 200px;
    padding: 20px;
    font-size: 17px;
    border-radius: 28px;
    border: none;
    background: hsl(180, 100%, 35%);
    color: white;

    &:hover{
        background: hsl(180, 100%, 45%);
        box-shadow: 0 0 10px 2px teal;
    }

    &:active{
        background: hsl(180, 100%, 25%);
    }
`;

export const Loading = styled.h1`
    text-align:center;
    transform: translateY(500%);
`;