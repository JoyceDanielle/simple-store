import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import http from '../../axios';
import BottomBar from "../../components/BottomBar";
import Button from "../../components/Button";
import CartProduct from "../../components/CartProduct";
import HeaderNavigation from "../../components/HeaderNavigation";
import Modal from "../../components/Modal";
import { Product } from "../../interface";
import { selectUser } from '../../redux/slice/userSlice';
import { AreaPrice, AreaSubtotal, AreaText, Container, Subtotal, Text } from "./style";


export default function Cart(){
    const user = useSelector(selectUser)
    const [products, setProducts] = useState<Product[]>([])
    const [loader, setLoader] = useState<boolean>(false)

    const totalProducts = (products: Product[]) =>{
        let sum = 0
            products.forEach((element: Product) => {
                const noPoint = element.price.replace('.', '');
                const newPrice = noPoint.replace(',', '.');
                sum = sum + parseFloat(newPrice)
            });

        return sum.toFixed(2);
    }

    const subtotalProducts = (products: Product[], shipping = 0, discount = 0) =>{
        const total = totalProducts(products)
        const calc = parseFloat(total) + shipping + discount
        return calc.toFixed(2);
    }

    useEffect(()=>{
        if(user.id){
            http.get(`/cart/${user.id}`)
            .then(res=> {
                setProducts(res.data)
                console.log(res.data)
            })
            
        }
    },[user])

    const deleteItem = (id: string) => {
        console.log('id', id)
        http.delete(`/cart/${id}`)
        .then(res=> {
            let index = products.findIndex((item)=>item.id === id)
            setProducts([
                ...products.slice(0, index),
                ...products.slice(index+1)
            ])
        })
    }

    const buy = () =>{
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        }, 500)
    }

    return (
        <Container>
            <HeaderNavigation title="Carrinho" back="/"/>
            <>
            {
                products.length > 0 ?
                products.map((item: Product, index)=>{
                    return(<CartProduct onDelete={()=> deleteItem(item.id)} key={index} product={item}/>)
                }) : 
                <p>Não possui produtos</p>
            }
            </>
            <AreaPrice>
                <AreaText>
                    <Text>Total:</Text>
                    <Text>Frete:</Text>
                    <Text>Desconto:</Text>
                </AreaText>
                <AreaText align>
                    <Text>R$ {totalProducts(products)}</Text>
                    <Text>R$ 0</Text>
                    <Text>R$ 0</Text>
                </AreaText>
            </AreaPrice>
            <AreaSubtotal>
                <Subtotal>Subtotal</Subtotal>
                <Subtotal>R$ {products? subtotalProducts(products): ''}</Subtotal>
            </AreaSubtotal>
            <Button onClick={()=> buy} text="Finalizar" loader={loader}></Button>
            <BottomBar/>
            <Modal/>
        </Container>
    )
}