import { useDispatch } from "react-redux";
import { isVisible } from "../../redux/slice/modalSlice";
import { DeleteIcon } from "../../assets/icons";
import { Product } from "../../interface";
import { AreaInfo, AreaPrice, Button, Container, Image, Price, Subtitle, TextBtn, Title } from "./style";

interface CartProductProps{
    product: Product 
}

export default function CartProduct(props: CartProductProps){

    const dispatch = useDispatch();

    const {image, name, subtitle, price} = props.product;

    return(
        <Container>
            <Image src={image} />
            <AreaInfo>
                <Title>{name}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <AreaPrice>
                    <Price>{price}</Price>
                    <Button onClick={()=>{dispatch(isVisible(null)); console.log('cliquei')}}>
                        <DeleteIcon/>
                        <TextBtn>Remover</TextBtn>
                    </Button>
                </AreaPrice>
            </AreaInfo>
        </Container>
    )
}