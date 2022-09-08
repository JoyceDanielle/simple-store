import { Container, Text } from "./style";

interface ButtonTertiaryProps{
    text: string
}

export default function ButtonTertiary({text}: ButtonTertiaryProps){
    return(
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}