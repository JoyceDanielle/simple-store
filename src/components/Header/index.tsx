import { BuyIcon, SearchIcon } from "../../assets/icons";
import { Button, ButtonsArea, Container, Title } from "./style";

interface HeaderProps{
    title: string
}

export default function Header({title}: HeaderProps){
    return(
        <Container>
            <Title>{title}</Title>
            <ButtonsArea>
                <Button><SearchIcon/></Button>
                <Button><BuyIcon/></Button>
            </ButtonsArea>
        </Container>
    )
}