import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow: hidden;
`;

export const Content = styled.div`
     h1{
        font-weight: 400;
    }

    padding: 40px;

    
`;

export const DataContent = styled.div`
    display: flex;
    min-height: 200px;
`;

export const ResponseContent = styled.div`
    width: 100%;
    height: 300px;
    padding: 40px;

   

    h2{
        font-weight: 400;
        text-decoration: underline;
    }

    h3{
        font-weight: 400;
    }

    
`;

export const Image = styled.img`
   margin-left: auto;
   margin-right: auto;
    max-height: 400px;
    max-width: 700px;
    
`;

export const InputContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    align-self: center;
    margin-top: 10px;
`;

export const Input = styled.input`
    width: 70%;
    height: 40px;
    border-radius: 10px;
    font-size: large;
    text-align: center;
`;

export const Button = styled.button`
    height: 40px;
    width: 100px;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-size: large;
    border-color: transparent;
    background-color: darkorange;
    color: white;
    font-weight: 700;
`;

export const Error = styled.h3`
    font-weight: 400;
        color: red;
        text-align: center;
`;