import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.button<{color?: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color || Colors.Primary[500].value};
    color: ${Colors.Gray[100].value};
    gap: 8px;
    svg path{
        fill: ${Colors.Gray[100].value};
    } ;
    svg{
        width: 18px;
        height: 18px;
    }
    padding: 12px 0;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`

export const AreaIcon = styled.span`
    color: ${Colors.Gray[100].value};
`
export const Text = styled.span`
    font-size: 0.75;
    color: ${Colors.Gray[100].value};
    font-weight: 500;
`