import React, {useState} from "react";
import { LoaderIcon } from "../../assets/icons";
import { AreaIcon, Container, Text } from "./style";

interface ButtonProps{
    icon?: React.ReactNode,
    text: string,
    onClick: ()=> void,
    loader?: boolean
}

export default function Button(props: ButtonProps){
 
    return(
        <Container onClick={()=> props.onClick()}>
            {props.icon && !props.loader &&(
                <AreaIcon>
                    {props.icon}
                </AreaIcon>
            )}
            {
                props.loader ? 
                <LoaderIcon/> : 
                <Text>{props.text}</Text>
            }
            
        </Container>
    )
}