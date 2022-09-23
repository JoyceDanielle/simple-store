import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: flex;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar { 
        display: none; 
    }
`

export const Main = styled.button`
    display: grid;
    border: none;
    background-color: transparent;
    margin-top: 20px;
`   

export const Image = styled.img`
    background-color: '#FFF';
    margin-bottom: 8px;
    width: 100px;
    height: 80px;
`
export const AreaText = styled.div`
    display: grid;
    row-gap: 5px;
    background-color: ${Colors.Gray[100].value};
    align-items: start;
    text-align: start;
    max-width: 114px;

`
export const Title = styled.span`
    font-size: 0.75em;
    color: ${Colors.Dark[500].value};
    font-weight: 400;
`
export const SubTitle = styled.span`
    font-size: 0.625em;
    color: ${Colors.Gray[800].value};
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Price = styled.span`
    font-size: 0.75em;
    font-weight: 600;
`