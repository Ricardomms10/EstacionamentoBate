import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
place-items: center;
padding: 10px;  
margin-top: 20px;
background-color: #fff;
border-top-left-radius: 40px;
border-top-right-radius: 40px;

h2{
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
}

table{
    width: 50%;
    margin-bottom: 20px;

}



th, td{
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
    text-align: center;
    

}

a{
    border: none;
    background-color: #000;
    color: #FFF;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin:10px;

    &:hover{
        background-color: #d14e45;
        color: #FFF;
    }
}

th{
    background-color: #c2c0ba;
    font-weight: 600;
}
`
export const BntTrash = styled.button`
border: none;
background-color: #000;
color: #FFF;
padding: 10px;
border-radius: 5px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
margin-top: 10px;
margin-bottom: 10px;

&:hover{
    background-color: #d14e45;
    color: #FFF;

`