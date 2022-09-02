import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    gap: 67.5px;
    grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
    padding: 21px;
`

export const Title = styled.span`
    font-size: 0.875em;
    color: ${Colors.Dark[500].value};
    font-weight: 400;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`