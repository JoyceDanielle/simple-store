import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    padding: 0 20px;
    background-color: ${Colors.Gray[100].value};
    margin-bottom: 53px;
`
export const Title = styled.span`
    font-size: 1.25em;
    font-weight: 600;
    color: ${Colors.Dark[500].value};
`

export const AreaSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 12px;
    padding: 10px;
`

export const Section = styled.span`
    font-size: 0.625em;
    font-weight: 600;
    color: ${Colors.Dark[500].value};
    
`

export const ShowProducts = styled.a`
    font-size: 0.625em;
    font-weight: 600;
    color: ${Colors.Gray[800].value};
`
