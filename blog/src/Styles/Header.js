import styled from 'styled-components';

export const Headerdiv = styled.header`
    background-color: black;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        list-style: none;
        display: flex;
        gap: 30px;
    }
    li a{
        text-decoration: none;
        font-size: 30px;
        color: white;
    }
    h1 a{
        text-decoration: none;
        color: white;
    }
`