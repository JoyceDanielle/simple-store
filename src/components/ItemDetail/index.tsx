import { Product } from "../../interface";
import { AreaChip, AreaImage, AreaInfo, Conatiner, Image, LinkFormPayment, Point, Price, SubPrice, Subtitle, Title } from "./style";
import Colors from '../../colors.json';
import Button from "../Button";
import { BuyIcon } from "../../assets/icons";
import BottomBar from "../BottomBar";
import Chip from "../Chip";

interface ItemDetailProps{
    data: Product
}

const dividedPrice = (divide: number ,price: string) => {
    const noPoint = price.replace('.', '');
    const newPrice = noPoint.replace(',', '.');
    const value = parseFloat(newPrice) / divide;
    return value.toFixed(2);
}

export default function ItemDetail(props: ItemDetailProps){
    const {image, name, subtitle, price} = props.data;
    return(
        <Conatiner>
            <AreaImage>
                <Image src={image}/>
                <Point/>
            </AreaImage>
            <AreaChip>
                <Chip background={Colors["Golden Banner"][500].value} color="#000" title="Oferta"/>
                <Chip background={Colors.Primary[500].value} color="#FFF" title="Frete grátis"/>
            </AreaChip> 
            <AreaInfo>
                <Title>{name}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Price>R$ {price}</Price>
                <SubPrice>12x de R$ {dividedPrice(12, price)} sem juros</SubPrice>
                <LinkFormPayment>Ver todas as formas de pagamento</LinkFormPayment>
                <Button onClick={()=>{}} text="Adicionar ao carrinho" icon={<BuyIcon/>}/>
                <BottomBar />
            </AreaInfo>   
        </Conatiner>
    )
}