import { useDispatch, useSelector } from "react-redux";
import { selectNavigation, isActiveNav1, isActiveNav2, isActiveNav3 } from '../../redux/slice/navigationSlice';
import { useNavigate } from "react-router-dom";
import { BuyIcon, HomeIcon, SettingIcon } from "../../assets/icons";
import { Button, Container } from "./style";

export default function BottomBar(){

    const navigation = useSelector(selectNavigation)

    const dispatch = useDispatch()

    const navigationActive = (path: string) => {
        if(path === '/' && window.location.pathname === '/'){
            dispatch(isActiveNav1(true))
            dispatch(isActiveNav2(false))
            dispatch(isActiveNav3(false))
        }else if (path === '/cart' && window.location.pathname === '/cart'){
            dispatch(isActiveNav1(false))
            dispatch(isActiveNav2(true))
            dispatch(isActiveNav3(false))
        }
        navigate(path);
    }

    const navigate = useNavigate()
    return(
        <Container>
            <Button active={navigation.nav1} onClick={()=> navigationActive('/')}><HomeIcon/></Button>
            <Button active={navigation.nav2} onClick={()=> navigationActive('/cart')}><BuyIcon/></Button>
            <Button><SettingIcon/></Button>
        </Container>
    )
}