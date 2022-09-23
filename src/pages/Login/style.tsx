import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    padding: 24px;
    background-color: '#FFF';
` 

export const Logo = styled.span`
    font-size: 1.25em;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 66px;
`

export const Title = styled.span`
    font-size: 1.25em;
    font-weight: 600;
    margin-bottom: 24px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ButtonArea = styled.div`
    display: grid;
    margin: 24px 0 8px 0;
`
export const TextLink = styled.span`
    font-size: 0.75em;
    font-weight: 500;
    color: ${Colors.Dark[500].value};
    text-align: center;
`

export const Link = styled.a`
    font-size: 0.75em;
    font-weight: 500;
    color: ${Colors.Primary[500].value};
`