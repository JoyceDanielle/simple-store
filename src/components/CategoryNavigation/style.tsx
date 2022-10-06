import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: flex;
    gap: 1em;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar { 
    display: none; 
}
`

export const Option = styled.span<{active: boolean}>`
    font-size: 0.75em;
    color: ${Colors.Gray[600].value};
    padding: 6px 10px;
    cursor: pointer;
    background-color: ${props => props.active ? Colors.Primary[500].value : Colors.Gray[100].value};
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.5s;
`