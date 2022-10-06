import styled, { keyframes } from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    align-items: center;
    position: relative;

    button{
        position: absolute;
        z-index: 15;
        left: 12px;
    }

    
`

export const animationInput = keyframes`
    from{
        width: 24px;
    }
    to{
        width: 150px;
    }
`

export const animationInputClose = keyframes`
    from{
        width: 100%;
    }
    to{
        width: 24px;
    }
`



export const InputArea = styled.input<{toggle?: boolean}>`
    animation: ${animationInput} 0.3s forwards;
    width: ${props => props.toggle ? "" : "24px"};
    animation: ${props => props.toggle ? animationInput : animationInputClose} 0.3s forwards;
    z-index: 14;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    padding: ${props => props.toggle ? "10px 40px" : "10px 10px"};
    font-size: 1em;
    font-weight: 400;
    color: ${Colors.Dark[500].value};
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${Colors.Gray[500].value};
        opacity: 1; 
}


`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 0px;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
`