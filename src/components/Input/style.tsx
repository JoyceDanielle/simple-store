import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    gap: 4px;
`

export const Label = styled.span`
    color: '#000';
    font-size: 0.875em;
    font-weight: 500;
`

export const InputArea = styled.input`
    background-color: ${Colors.Gray[100].value};
    border: none;
    border-radius: 5px;
    padding: 10px 16px;
    font-size: 0.75em;
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