import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

import { productDetail } from "../../redux/slice/productSlice";

import { Product } from "../../interface";
import { AreaText, Container, Image, Price, Main, SubTitle, Title } from "./style";

interface ProductsProps{
    payload: {payload: Product[]}
}

export default function Products({payload}: ProductsProps){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const newData = payload.payload

  function productSelected(item: Product){
    dispatch(productDetail(item))
    navigate('/product')
  }

    return(
        <Container>
            {
                !newData ? <p>Não possui dados</p> :
                newData.map(item =>{
                    return(
                        <Main key={item.id} onClick={()=> productSelected(item)}>
                            <Image src={`http://localhost:3000/uploads/${item.image}`}/>
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