import styled, { keyframes } from "styled-components";
import Colors from '../../colors.json';
import { device } from "../../Constants";

export const animateToastIn = keyframes`
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0%);
    }
`
export const animateToastOut = keyframes`
    from{
        transform: translateX(0%);
    }
    to{
        transform: translateX(100%);
    }
`

export const Container = styled.div<{type: string, visible: boolean, animation: string}>`
    min-height: 48px;
    min-width: 200px;
    padding: 10px;
    display: grid;
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);
    column-gap: 10px;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    animation: ${props => props.animation === 'slideIn' ? animateToastIn : animateToastOut} 0.5s forwards;
     svg path{
        stroke: ${props=> props.type === "success" ?  Colors.Success[500].value : Colors.Danger[500].value};
    }
    @media screen and (max-width: 1024px){
        width: 100vw;
        left: 0;
        box-sizing: border-box;
        background-color: #FFF;
    }
    @media ${device.laptop}{
        left: none;
        right: 24px;
        width: 200px;
    }
`

export const Title = styled.span`
    font-size: 0.875em;
    font-weight: 800;
    color: ${Colors.Dark[500].value};
`