import { Product } from "../../interface";
import { AreaChip, AreaImage, AreaInfo, Chip, Conatiner, Image, LinkFormPayment, Point, Price, SubPrice, Subtitle, Title } from "./style";
import Colors from '../../colors.json';
import Button from "../Button";
import { BuyIcon } from "../../assets/icons";
import BottomBar from "../BottomBar";

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
                <Chip type={Colors["Golden Banner"][500].value} word="#000">
                    Ofertas
                </Chip>
                <Chip type={Colors.Primary[500].value} word="#FFF">
                    Frete grátis
                </Chip>
            </AreaChip> 
            <AreaInfo>
                <Title>{name}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Price>R$ {price}</Price>
                <SubPrice>12x de R$ {dividedPrice(12, price)} sem juros</SubPrice>
                <LinkFormPayment>Ver todas as formas de pagamento</LinkFormPayment>
                <Button text="Adicionar ao carrinho" icon={<BuyIcon/>}/>
                <BottomBar />
            </AreaInfo>   
        </Conatiner>
    )
}