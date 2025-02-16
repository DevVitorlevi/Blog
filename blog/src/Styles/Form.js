import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    width: 100vw;
    height: 90vh;
    border: 1px
    solid blue;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Form = styled.div`
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    input{
        width:20rem;
        padding: 10px;
    }
`