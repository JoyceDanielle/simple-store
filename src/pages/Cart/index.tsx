import { useSelector } from "react-redux";
import BottomBar from "../../components/BottomBar";
import Button from "../../components/Button";
import CartProduct from "../../components/CartProduct";
import HeaderNavigation from "../../components/HeaderNavigation";
import Modal from "../../components/Modal";
import { Product } from "../../interface";
import { selectLoader } from "../../redux/slice/loaderSlice";
import { AreaPrice, AreaSubtotal, AreaText, Container, Subtotal, Text } from "./style";

interface CartProps{
    products: Product[]
}

export default function Cart({products}: CartProps){
    const product = localStorage.getItem('product');
    const loader = useSelector(selectLoader)

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

    return (
        <Container>
            <HeaderNavigation title="Carrinho" back="/"/>
            <>
            {
                products.map(item=>{
                    return(<CartProduct product={item}/>)
                })
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
                <Subtotal>R$ {subtotalProducts(products)}</Subtotal>
            </AreaSubtotal>
            <Button onClick={()=>{}} text="Finalizar" loader={loader}></Button>
            <BottomBar/>
            <Modal/>
        </Container>
    )
}