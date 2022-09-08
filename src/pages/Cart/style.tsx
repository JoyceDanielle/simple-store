import styled from "styled-components";
import Colors from '../../colors.json';

export const Container = styled.div`
    display: grid;
    margin: 0 20px 53px 20px;
`

export const AreaPrice = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 0.5px dashed ${Colors.Gray[700].value};
    border-bottom: 0.5px dashed ${Colors.Gray[700].value};
`
export const AreaText = styled.div<{align?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: ${props=> props.align ? 'flex-end' : 'flex-start'};
    margin: 16px 0;
    gap: 8px;
`

export const Text = styled.span`
    font-size: 0.75em;
    font-weight: 400;
    line-height: 12px;
    color: ${Colors.Dark[500].value};
`

export const AreaSubtotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
`

export const Subtotal = styled.span`
    font-size: 0.75em;
    font-weight: 600;
    line-height: 12px;
    color: ${Colors.Dark[500].value};
`