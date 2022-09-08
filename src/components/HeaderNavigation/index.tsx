import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productFavorite } from '../../redux/slice/productSlice';
import { ArrowIcon, HeartIcon } from "../../assets/icons";
import { Button, Container, Title } from "./style";

interface HeaderNavigationProps{
    back?: string,
    title: string,
    visible?: boolean,
    isFavorite?: boolean
}

export default function HeaderNavigation({back, title, visible, isFavorite}: HeaderNavigationProps){
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    
    const routeBack = (back?: string ) =>{
        if(back){
            navigate(back);
        }else{
            navigate(-1)
        }
        
    }
   
    return(
        <Container>
            <Button onClick={()=> routeBack(back)}><ArrowIcon/></Button>
            <Title>{title}</Title>  
            <Button isFavorite={isFavorite} 
                visible={window.location.pathname==="/cart" ? true : false}
                onClick={()=> dispatch(productFavorite(null))}
                ><HeartIcon/></Button>
        </Container>
    )
}