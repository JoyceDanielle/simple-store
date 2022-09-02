
import { useSelector } from "react-redux";
import HeaderNavigation from "../../components/HeaderNavigation";
import ItemDetail from "../../components/ItemDetail";
import { selectProduct } from "../../redux/slice/productSlice";

export default function DetailProduct(){

    const product = useSelector(selectProduct)
    
    return(
        <>
        <HeaderNavigation back="/"/>
        <ItemDetail data={product}/>
        </>
    )
}