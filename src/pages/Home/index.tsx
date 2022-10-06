import BottomBar from "../../components/BottomBar";
import CategoryNavigation from "../../components/CategoryNavigation";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { AreaSection, BottomArea, Container, NavigationArea, Section, ShowProducts, Title } from "./style";
import { useState, useEffect } from "react";
import http from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { products, selectProducts } from "../../redux/slice/productsSlice";
import { Product } from "../../interface";
import { selectUser } from "../../redux/slice/userSlice";
import Toast from "../../components/Toast";

export default function Home(){
    const [active, setActive] = useState<string>('Eletrônico')
    const [search, setSearch] = useState<string>('')
    const [toast, setToast] = useState<boolean>(true)
    const dispatch = useDispatch()
    const auth = useSelector(selectUser)
    function getProducts(payload: Product[]){
        dispatch(products(payload))
    }
    console.log('auth', auth)
    const data = useSelector(selectProducts)

    useEffect(()=>{
        if(search){
            setActive('Todos')
        }
    }, [search])

    useEffect(()=>{
        const category = !active || active === 'Todos' ?  '' : `/category/${active}` 
        
            http.get(`/products${category}`)
        .then(res => {
            getProducts(res.data)
        })
        
    }, [active])
    return(
        <Container>
            <Header title="Joyzis Store" handleSearch={setSearch} search={search} isLoged={auth.user ? true : false}/>
            <Title>Descubra</Title>
            <NavigationArea>
                <CategoryNavigation active={active} handleActive={setActive}/>
            </NavigationArea>
            <Products payload={data} search={search}/>
            <AreaSection>
                <Section>Ofertas</Section>
                <ShowProducts>
                    Ver tudo
                </ShowProducts>
            </AreaSection>
            
            <Products payload={data} search={search}/>
            
            <BottomArea>
                <BottomBar/>
            </BottomArea>
            
        </Container>
    )
}