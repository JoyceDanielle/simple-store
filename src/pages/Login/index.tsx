import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonArea, Container, GrayArea, InputArea, Link, LoginArea, Logo, TextLink, Title } from "./style";
import Input from '../../components/Input';
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import http from '../../axios';
import Toast from '../../components/Toast';
import { notificate, selectToast } from '../../redux/slice/toastSlice';


export default function Login(){
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const toast = useSelector(selectToast)

    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)

    console.log('visible', toast.visible)

    function login(){
        setLoader(true)
        http.post('/auth',{
            user: user,
            password: password
        })
        .then(res => {
            if(!res.data.success){
                notification('failure', res.data.message)
                setLoader(false)
            }else{
                setLoader(false)
                navigate('/')
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
        <Container>
            <LoginArea>
                <Logo className='logo' onClick={()=> navigate('/')}>
                    LOGO
                </Logo>  
                <InputArea>
                    <Title>
                        Login
                    </Title>
                    <Input title="Email" placeholder="Digite seu Email" value={user} onChange={value=> setUser(value)}/>
                    <Input title="Senha" type='password' placeholder="Digite sua Senha" value={password} onChange={value=> setPassword(value)}/>
                    <ButtonArea>
                        <Button text="Fazer Login" onClick={()=> login()} loader={loader}/>
                    </ButtonArea>
                    <TextLink>
                        Não possui cadastrado ? <Link onClick={()=> navigate('/signup')}>Cadastrar</Link>
                        
                    </TextLink>
                </InputArea>
                
            </LoginArea>
           <GrayArea/>
           <Toast type={toast.type} title={toast.title} visible={toast.visible} animation={toast.animation}/>
        </Container>
    )
}