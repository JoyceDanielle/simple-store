import { ChangeEvent } from "react";
import { Container, Label, InputArea } from "./style";

interface InputProps{
    title: string,
    type?: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void 
}

export default function Input({title, type, placeholder, value, onChange}: InputProps){
    return(
        <Container>
            <Label>
                {title}
            </Label>
            <InputArea type={type||"text"} placeholder={placeholder||''} value={value} onChange={(e: ChangeEvent<HTMLInputElement>)=>onChange(e.target.value)}/>
        </Container>
        
    )
}