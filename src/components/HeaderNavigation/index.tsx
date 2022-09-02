import { useNavigate } from "react-router-dom";
import { ArrowIcon, HeartIcon } from "../../assets/icons";
import { Button, Container, Title } from "./style";

interface HeaderNavigationProps{
    back: string
}

export default function HeaderNavigation({back}: HeaderNavigationProps){
    const navigate = useNavigate();
    return(
        <Container>
            <Button onClick={()=> navigate(back)}><ArrowIcon/></Button>
            <Title>Detalhe do produto</Title>
            <Button><HeartIcon/></Button>
        </Container>
    )
}