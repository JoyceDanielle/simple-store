import { useState } from 'react'
import { ChangeEvent } from "react";
import { SearchIcon } from "../../assets/icons";
import Styled, { keyframes } from "styled-components"

interface InputProps{
    placeholder?: string,
    value: string,
    onChange: (value: string) => void 
}

export default function InputSearch({placeholder, value, onChange}: InputProps){
    const [toogle, setToogle] = useState<boolean>(false)
    return(
        <Container>
            <Button toogle={toogle} onClick={() => setToogle(!toogle)}><SearchIcon /></Button>
            <InputText toogle={toogle} value={value}  onChange={(e: ChangeEvent<HTMLInputElement>)=>onChange(e.target.value)}/>
        </Container>
    )
}

const Container = Styled.div`
    display:grid;
    position: relative;
    align-items:center;
    grid-template-columns: fit-content(100%) 1fr;

    button svg{
        width: 20px;
        height: 20px;
    }
`



const Button = Styled.button<{toogle: boolean}>`
    padding: 0px;
    border:none;
    background-color: transparent;
    cursor: pointer;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    background-color: ${props => props.toogle ? "#fff" : "transparent"};
`

const showIn = keyframes`
    from{
        width: 0px
    }
    to{
        width: 100%;
    }
`



const showOut = keyframes`
    from{

    }
    to{

    }
`

const InputText = Styled.input<{toogle: boolean}>`
    height: 40px;
    background-color: ${props => props.toogle ? "#fff" : "transparent"};
    border: none;
    box-sizing: border-box;
    width: ${props => props.toogle ? "100%" : "24px"};
    animation: ${props => props.toogle ? showIn : showOut} 0.5s forwards;
    &:focus{
        outline: none;
    }
`