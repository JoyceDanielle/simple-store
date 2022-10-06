import styled from "styled-components";
import Colors from '../../colors.json';
import { device } from "../../Constants";

export const Container = styled.div`
    display: grid;
    @media screen and (min-width: 375px){
        padding: 24px;
    }
    @media ${device.laptop}{
        padding: 0;
        height: 100vh;
        box-sizing: border-box;
       grid-template-columns: fit-content(100%) 1fr;
       align-items: center;
       .logo{
        position: absolute;
        top: 24px;
        left: 60px;
       }
    }
` 

export const LoginArea = styled.div`
    display: grid;
    align-items: center;
    @media ${device.laptop}{
        width: 20vw;
        padding: 0 60px;
    }
`

export const GrayArea = styled.div<{display?: string}>`
    background-color: ${Colors.Gray[300].value};
    width: 100%;
    height: 100%;
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
    @media ${device.laptop}{
        font-size: 1em;
    }
`

export const Link = styled.a`
    font-size: 0.75em;
    font-weight: 500;
    color: ${Colors.Primary[500].value};
    cursor: pointer;
    @media ${device.laptop}{
        font-size: 1em;
    }
`