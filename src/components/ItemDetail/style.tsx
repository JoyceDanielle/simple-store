import styled from "styled-components";
import Colors from '../../colors.json';

export const Conatiner = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: hidden;
`
export const AreaImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    background-color: '#FFF';
    width: 100px;
    height: 80px;

`
export const Point = styled.div`
    background-color: ${Colors.Primary[500].value};
    border-radius: 10px;
    width: 20px;
    height: 10px;
    margin-top: 16px;
`

export const AreaChip = styled.div`
    display: flex;
    margin: 20px 18px 0 12px;
    margin-top: 18px;
    gap: 8px;
`

export const AreaInfo = styled.div`
    display: grid;
    background-color: #fff;
    margin: 12px 20px;
`

export const Title = styled.span`
    font-size: 0.875em;
    font-weight: 600;
    color: ${Colors.Dark[500].value};
`

export const Subtitle = styled.span`
    margin-top: 6px;
    font-size: 0.625em;
    color: ${Colors.Gray[800].value};
`

export const Price = styled.span`
    margin-top: 16px;
    font-size: 0.875em;
    font-weight: 600;
    color: ${Colors.Primary[500].value};
`

export const SubPrice = styled.span`
    font-size: 0.625em;
    font-weight: 400;
    color: ${Colors.Dark[500].value};
`
export const LinkFormPayment = styled.a`
     font-size: 0.625em;
     font-weight: 400;
     color: ${Colors.Primary[500].value};
     margin-bottom: 32px;
`
export const AreaBottom = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`