import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    grid-template-columns: fit-content(100%) 1fr;
    padding: 16px 20px;
`

export const Image = styled.img`
    width: 48px;
    height: 48px;
`

export const AreaInfo = styled.div`
    display: grid;
    align-items: flex-start;
    margin-left: 10px;
`

export const Title = styled.span`
    font-size: 0.5em;
    line-height: 12px;
    font-weight: 400;
    color: ${Colors.Dark[500].value};
`

export const Subtitle = styled.span`
    font-size: 0.375em;
    line-height: 8px;
    font-weight: 400;
    color: ${Colors.Gray[800].value};
`

export const AreaPrice = styled.div`
    display: grid;
    grid-template-columns: 1fr fit-content(100%);
`

export const Price = styled.span`
    font-size: 0.5em;
    line-height: 12px;
    font-weight: 600;
    color: ${Colors.Dark[500].value};
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 4px;
    svg path{
        stroke: #E74C3C;
    } ;
    svg{
        width: 12px;
        height: 12px;
    }
    cursor: pointer;
`

export const TextBtn = styled.span`
    font-size: 0.5em;
    font-weight: 600;
    color: #E74C3C;
    
`