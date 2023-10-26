import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5); /* Fundo opaco */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 999; 
`

export const PopUp = styled.div`
background-color: #fff;
border: 3px solid #000;
max-width: 500px;
width: 95%;
height: 270px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

    h3{
        font-size: 30px;
        margin-top: 20px;
    }

ul{
    text-align: center;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 10px 30px;
    margin-top: 20px;
    list-style-type: none;

    li{
        font-size: 20px;
        color: #1a72ed;
        strong {
        color:#000;
        font-size:21px;
        }  
    }
}
`

export const BoxBtn = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;
margin-bottom: 20px;
`

export const BtnExit = styled.button`
margin-right: 10px;
background-color: #000;
color: #fff;
border: 0;
border-radius: 5px;
padding: 10px;
font-size: 15px;
cursor: pointer;
`

export const BtnTrash = styled.button`
margin-right: 10px;
background-color: red;
color: #fff;
border: 0;
border-radius: 5px;
padding: 10px;
font-size: 15px;
cursor: pointer;
`

export const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
font-size: 20px;
cursor: pointer;
`