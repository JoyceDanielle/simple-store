import { useState } from 'react';
import { Product } from "../../interface";
import { AreaBottom, AreaChip, AreaImage, AreaInfo, Conatiner, Image, LinkFormPayment, Point, Price, SubPrice, Subtitle, Title } from "./style";
import Colors from '../../colors.json';
import Button from "../Button";
import { BuyIcon } from "../../assets/icons";
import BottomBar from "../BottomBar";
import Chip from "../Chip";
import http from "../../axios";

import { selectUser } from "../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { notificate, selectToast } from '../../redux/slice/toastSlice';
import Toast from '../Toast';

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

    const [loading, setLoading] = useState(false)

    const user = useSelector(selectUser)
    const toast = useSelector(selectToast)
    const dispatch = useDispatch()

    const addCart = (data: Product) =>{
        console.log('prod', data)
        setLoading(true)
        http.post('/cart', {
            userId: user.id,
            productId: data.id
        })
        .then(res => {
            if(res.data.success){
                notification('success', 'Adicionado no carrinho')
                setLoading(false)
            }else{
                notification('failure', res.data.message)
                setLoading(false)
            }
        })
    }

    function notification(type: string, title: string){
        dispatch(notificate({visible: true, type: type, title: title, animation: 'slideIn'}))
        setTimeout(()=>{
            dispatch(notificate({visible: false, animation: 'slideIn'}))
        }, 3000)
    }
    return(
        <Conatiner>
            <AreaImage>
                <Image src={`http://localhost:3000/uploads/${image}`}/>
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
                <Button onClick={()=>addCart(props.data)} loader={loading} text="Adicionar ao carrinho" icon={<BuyIcon/>}/>
                <AreaBottom>
                    <BottomBar />
                </AreaBottom>
            </AreaInfo>   
            <Toast type={toast.type} title={toast.title} visible={toast.visible} animation={toast.animation}/>
        </Conatiner>
    )
}