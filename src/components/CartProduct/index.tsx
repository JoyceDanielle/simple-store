import { useDispatch } from "react-redux";
import { isVisible } from "../../redux/slice/modalSlice";
import { DeleteIcon } from "../../assets/icons";
import { Product } from "../../interface";
import { AreaInfo, AreaPrice, Button, Container, Image, Price, Subtitle, TextBtn, Title } from "./style";
import http from "../../axios";

interface CartProductProps{
    product: Product,
    onDelete: ()=> void
}

export default function CartProduct(props: CartProductProps){

    const {id, image, name, subtitle, price} = props.product;
    const dispatch = useDispatch();

    

    return(
        <Container>
            <Image src={`http://localhost:3000/uploads/${image}`} />
            <AreaInfo>
                <Title>{name}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <AreaPrice>
                    <Price>{price}</Price>
                    <Button onClick={()=>props.onDelete()}>
                        <DeleteIcon/>
                        <TextBtn>Remover</TextBtn>
                    </Button>
                </AreaPrice>
            </AreaInfo>
        </Container>
    )
}