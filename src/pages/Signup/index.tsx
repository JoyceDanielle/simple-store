import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonArea, Container, GrayArea, InputArea, Link, Logo, SignupArea, TextLink, Title } from "./style";
import Input from '../../components/Input';
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { register, selectUser } from "../../redux/slice/userSlice";
import http from "../../axios";
import { LoaderIcon } from '../../assets/icons';
import { notificate, selectToast } from '../../redux/slice/toastSlice';
import Toast from '../../components/Toast';


export default function Signup(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const toast = useSelector(selectToast)

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [loader, setLoader] = useState<boolean>(false)

    function save(){
        setLoader(true)
        http.post('/user', {
            user: user,
            password: password,
            name: name
        })
        .then(res => {
            if(!res.data.success){
                notification('failure', res.data.message)
                setLoader(false)
            }else{
                notification('success', 'Cadastro realizado com sucesso')
                setLoader(false)
                navigate('/login')
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
            <Logo className='logo' onClick={()=> navigate('/')}>
                LOGO
            </Logo>
            <SignupArea>
                <InputArea>
                    <Title>
                        Cadastrar
                    </Title>
                    <Input title="Email" placeholder="Digite seu Email" value={user} onChange={value => setUser(value)}/>
                    <Input title="Senha" type='password' placeholder="Digite sua Senha" value={password} onChange={value => setPassword(value)}/>
                    <Input title="Nome" placeholder="Digite seu Nome" value={name} onChange={value => setName(value)}/>
                    <ButtonArea>
                        <Button text="Salvar" onClick={()=> save()} loader={loader}/>
                    </ButtonArea>
                    <TextLink>
                        Já possui cadastrado ? <Link onClick={()=> navigate('/login')}>Fazer login</Link>
                    </TextLink>
                </InputArea>
            </SignupArea>
            <GrayArea/>
            <Toast type={toast.type} title={toast.title} visible={toast.visible} animation={toast.animation}/>
        </Container>
    )
}