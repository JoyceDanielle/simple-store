import { BuyIcon, HomeIcon, SettingIcon } from "../../assets/icons";
import { Button, Container } from "./style";

export default function BottomBar(){
    return(
        <Container>
            <Button><HomeIcon/></Button>
            <Button><BuyIcon/></Button>
            <Button><SettingIcon/></Button>
        </Container>
    )
}