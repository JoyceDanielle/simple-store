import { useNavigate } from "react-router-dom";
import { BuyIcon, SearchIcon, UserIcon } from "../../assets/icons";
import { Button, ButtonsArea, Container, Title } from "./style";

interface HeaderProps{
    title: string,
    isLoged: boolean
}

export default function Header({title, isLoged}: HeaderProps){
    const navigate = useNavigate()
    return(
        <Container>
            <Title>{title}</Title>
            <ButtonsArea>
                <Button><SearchIcon/></Button>
                {
                    isLoged ?
                    <Button onClick={()=> navigate('/cart')}><BuyIcon/></Button> :
                    <Button onClick={()=> navigate('/login')}><UserIcon/></Button>
                }
                
            </ButtonsArea>
        </Container>
    )
}