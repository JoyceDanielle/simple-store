import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`

export const Text = styled.span`
    font-size: 0.75;
    color: ${Colors.Dark[500].value};
    font-weight: 500;
`