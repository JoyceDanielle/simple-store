import { useDispatch, useSelector } from "react-redux";
import { isVisible } from "../../redux/slice/modalSlice";
import { selectModal } from '../../redux/slice/modalSlice';
import Button from "../Button";
import ButtonTertiary from "../ButtonTertiary";
import { AreaButton, Background, Container, Main, Title } from "./style";

export default function Modal(){

    const visible = useSelector(selectModal)
    const dispatch = useDispatch()

    return(
        <Container type={visible.visible}>
        <Background onClick={()=> dispatch(isVisible(null))}/>
        <Main>
            <Title>
                Deseja remover este item do carrinho ?
            </Title>
            <AreaButton>
                <ButtonTertiary text="Cancelar"/>
                <Button onClick={()=>{}} text="Remover"/>
            </AreaButton>
        </Main>
    </Container>
    )
}