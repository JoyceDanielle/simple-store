import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.span<{background: string, color: string}>`
    background-color: ${props => props.background || Colors.Primary[500].value};
    color: ${props => props.color || '#000'};
    padding: 2px 8px;
    font-size: 0.625em;
    font-weight: 400;
    border-radius: 5px;
`