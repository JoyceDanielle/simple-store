import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { productDetail } from "../../redux/slice/productSlice";

import { Product } from "../../interface";
import { AreaText, Container, Image, Price, Main, SubTitle, Title } from "./style";

interface ProductsProps{
    data: Product[]
}


export default function Products(props: ProductsProps){
    const navigate = useNavigate();
    const dispatch = useDispatch();

  function productSelected(item: Product){
    dispatch(productDetail(item))
    console.log(item)
    navigate('/product')
  }

    return(
        <Container>
            {
                props.data.map(item =>{
                    return(
                        <Main key={item.id} onClick={()=> productSelected(item)}>
                            <Image src={item.image}/>
                            <AreaText>
                                <Title>{item.name}</Title>
                                <SubTitle>{item.subtitle}</SubTitle>
                                <Price>R$ {item.price}</Price>
                            </AreaText>
                        </Main>

                    )
                })
            }
           
            
        </Container>
    )
}