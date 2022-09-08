
import { useSelector } from "react-redux";
import HeaderNavigation from "../../components/HeaderNavigation";
import ItemDetail from "../../components/ItemDetail";
import { selectProduct } from "../../redux/slice/productSlice";
import { Container } from "./style";

export default function DetailProduct(){

    const product = useSelector(selectProduct)
    const favorite = product.isFavorite
    
    return(
        <Container>
            <HeaderNavigation isFavorite={favorite} title="Detalhe do produto" back="/"/>
            <ItemDetail data={product}/>
        </ Container>
    )
}