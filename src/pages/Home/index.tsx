import BottomBar from "../../components/BottomBar";
import CategoryNavigation from "../../components/CategoryNavigation";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { AreaSection, Container, Section, ShowProducts, Title } from "./style";
import { useState, useEffect } from "react";
import http from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { products, selectProducts } from "../../redux/slice/productsSlice";
import { Product } from "../../interface";
import { selectUser } from "../../redux/slice/userSlice";

export default function Home(){
    const [active, setActive] = useState<string>('Eletrônico')
    const dispatch = useDispatch()
    const auth = useSelector(selectUser)
    function getProducts(payload: Product[]){
        dispatch(products(payload))
    }
    console.log('auth', auth)
    const data = useSelector(selectProducts)
    useEffect(()=>{
        const category = !active || active === 'Todos' ?  '' : `/category/${active}` 
        
            http.get(`/products${category}`)
        .then(res => {
            getProducts(res.data)
        })
        
    }, [active])
    return(
        <Container>
            <Header title="Joyzis Store" isLoged={auth.user ? true : false}/>
            <Title>Descubra</Title>
            <CategoryNavigation active={active} handleActive={setActive}/>
            <Products payload={data}/>
            <AreaSection>
                <Section>Ofertas</Section>
                <ShowProducts>
                    Ver tudo
                </ShowProducts>
            </AreaSection>
            
            <Products payload={data}/>
            <BottomBar/>
        </Container>
    )
}