import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { BuyIcon, UserIcon } from "../../assets/icons";
import http from '../../axios';
import { Product } from '../../interface';
import { products } from '../../redux/slice/productsSlice';
import CategoryNavigation from '../CategoryNavigation';
import InputSearch from '../InputSearch';
import { Button, ButtonsArea, Container, NavigationArea, Title, } from "./style";

interface HeaderProps{
    title: string,
    isLoged: boolean,
    handleSearch: React.Dispatch<React.SetStateAction<string>>,
    search: string
}

export default function Header({title, isLoged, handleSearch, search}: HeaderProps){
    const navigate = useNavigate()
    const [active, setActive] = useState<string>('Eletrônico')
    const dispatch = useDispatch()

    function getProducts(payload: Product[]){
        dispatch(products(payload))
    }

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

    const onSearch = (value: string) => {
        handleSearch(value)
        console.log('search', search)
    }

    return(
        <Container>
            <Title>{title}</Title>
            <NavigationArea>
                <CategoryNavigation active={active} handleActive={setActive}/>
            </NavigationArea>
            <ButtonsArea>
                <InputSearch onChange={(value)=> onSearch(value)} value={search}/>
                {
                    isLoged ?
                    <Button onClick={()=> navigate('/cart')}><BuyIcon/></Button> :
                    <Button onClick={()=> navigate('/login')}><UserIcon/></Button>
                }
                
            </ButtonsArea>
        </Container>
    )
}