import React from "react";
import { AreaIcon, Container, Text } from "./style";

interface ButtonProps{
    icon?: React.ReactNode,
    text: string
}

export default function Button(props: ButtonProps){
    return(
        <Container>
            {props.icon && (
                <AreaIcon>
                    {props.icon}
                </AreaIcon>
            )}
            <Text>{props.text}</Text>
        </Container>
    )
}