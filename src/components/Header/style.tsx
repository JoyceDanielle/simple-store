import styled, { keyframes } from 'styled-components';
import Colors from '../../colors.json';
import { device, size } from '../../Constants';

export const Container = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
    background-color:${Colors.Gray[100].value};
    @media ${device.laptop}{
        grid-template-columns: 1fr fit-content(100%) 1fr;
    }
    @media screen and(max-width: 375px){
        grid-template-columns: fit-content(100%) fit-content(100%);
    }
 
`

export const NavigationArea = styled.div`

    @media (max-width: ${size.mobileL}){
        display: none;
    }

`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

export const Title = styled.span`
    font-weight: 700;
    size: 1em;
    line-height: 20px;
    color: ${Colors.Dark[500].value};
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`