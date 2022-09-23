
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderNavigation from "../../components/HeaderNavigation";
import ItemDetail from "../../components/ItemDetail";
import { selectProduct, productDetail } from "../../redux/slice/productSlice";
import { Container } from "./style";
import http from "../../axios";

export default function DetailProduct(){

    const product = useSelector(selectProduct)
    const favorite = product.isFavorite

    const dispatch = useDispatch()
    const storeId = localStorage.getItem('product');
    console.log('storeid', storeId)

    useEffect(()=>{
        if(storeId){
            http.get(`/products/${storeId}`)
        .then(res => dispatch(productDetail(res.data)))
        }
    }, [storeId])
    
    return(
        <Container>
            <HeaderNavigation isFavorite={favorite} title="Detalhe do produto" back="/"/>
            <ItemDetail data={product}/>
        </ Container>
    )
}