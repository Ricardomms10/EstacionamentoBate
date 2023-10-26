import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
padding:10px;

h1{
    font-size: 20px;
    font-weight: 400;
    color: #000;
    margin-bottom: 10px;
}

input{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
}

`
export const BntSearch = styled.button`
    width: 90px;
    height: 30px;
    margin-left: 10px;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
    background-color:#d6d63a;
    color: #000;
    cursor: pointer;
`