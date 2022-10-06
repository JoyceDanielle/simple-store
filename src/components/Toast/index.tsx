import { CheckIcon, CloseIcon, UncheckIcon } from "../../assets/icons";
import { typeToast } from "../../interface";
import { Container, Title } from "./style";

interface ToastProps{
    type: typeToast,
    title: string,
    visible: boolean,
    animation: string,
}

export default function Toast({type, title, visible, animation}: ToastProps){
    return(
        <>
            {visible && (
                <Container type={type} visible={visible} animation={animation}>
            
                {
                    type === "success" ?
                    <CheckIcon width="24px" height="24px" />
                    : 
                    <UncheckIcon width="24px" height="24px"/>
                }
    
                <Title>{title}</Title>
    
                <CloseIcon width="16px" height="16px"/>
    
            </Container>
            )}
        </>
    )
}