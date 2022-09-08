import React from "react";
import { AreaIcon, Container, Text } from "./style";

interface ButtonProps{
    icon?: React.ReactNode,
    text: string,
    onClick: ()=> void
}

export default function Button(props: ButtonProps){
    return(
        <Container onClick={()=> props.onClick()}>
            {props.icon && (
                <AreaIcon>
                    {props.icon}
                </AreaIcon>
            )}
            <Text>{props.text}</Text>
        </Container>
    )
}