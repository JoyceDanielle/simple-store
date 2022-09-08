import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div<{type: boolean}>`
    display: ${props => props.type ? "grid" : "none"};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Colors.Gray[300].value};
    opacity: .3;
`

export const Main = styled.div`
    border-radius: 4px;
    padding: 16px;
    background-color: #FFF;

    z-index: 1;
`

export const Title = styled.span`
    font-size: 0.75em;
    line-height: 18px;
    color: ${Colors.Dark[500].value};
    font-weight: 500;
`

export const AreaButton = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
`