import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: flex;
    padding: 12px 0;
    background-color: ${Colors.Gray[100].value};
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  
`
export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`
