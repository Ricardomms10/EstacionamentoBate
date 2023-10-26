import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #222222;
padding: 30px;
max-width: 100%;
height: 100%;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;

button{
    background-color: #d6d63a;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    width: 60%;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #222222;
    cursor: pointer;
    transition: background-color 0.2s;
}
    button:hover {
        background-color: #4ac24e;
}
`

export const BoxInput = styled.div`
display: flex;
flex-direction: row;
gap:20px;
padding: 20px;

div{
    h2{
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        margin-bottom: 10px;
        text-align: center;
    }

    input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #444444;
        outline: none;
        padding: 10px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
}
`