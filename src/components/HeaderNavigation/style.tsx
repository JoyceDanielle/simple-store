import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);
    padding: 21px 0;
`

export const Title = styled.span`
    font-size: 0.875em;
    color: ${Colors.Dark[500].value};
    font-weight: 400;
    text-align: center;
`

export const Button = styled.button<{visible?: boolean, isFavorite?: boolean}>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    opacity: ${props=> props.visible ? '0' : '1'};
    &:nth-child(3){
        svg path{
            fill: ${props=> props.isFavorite ? '#E74C3C' : 'transparent' } ;
            stroke: ${props=> props.isFavorite ? 'transparent' : Colors.Dark[500].value };
        }
    }
        
    
`