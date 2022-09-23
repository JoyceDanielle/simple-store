import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonArea, Container, InputArea, Link, Logo, TextLink, Title } from "./style";
import Input from '../../components/Input';
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { isVisible } from "../../redux/slice/loaderSlice";
import { selectLoader } from "../../redux/slice/loaderSlice";
import http from '../../axios';


export default function Login(){
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const loader = useSelector(selectLoader)

    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function login(){
        dispatch(isVisible(true))
        http.post('/auth',{
            user: user,
            password: password
        })
        .then(res => console.log('login', res))
        .then(res => dispatch(isVisible(false)))
        .then(res=> navigate('/'))
    }
    return(
        <Container>
            <Logo onClick={()=> navigate('/')}>
                LOGO
            </Logo>
            <Title>
                Login
            </Title>
            <InputArea>
                <Input title="Email" placeholder="Digite seu Email" value={user} onChange={value=> setUser(value)}/>
                <Input title="Senha" type='password' placeholder="Digite sua Senha" value={password} onChange={value=> setPassword(value)}/>
            </InputArea>
            <ButtonArea>
                <Button text="Fazer Login" onClick={()=> login()} loader={loader}/>
            </ButtonArea>
            <TextLink>
                Não possui cadastrado ? <Link onClick={()=> navigate('/signup')}>Cadastrar</Link>
                
            </TextLink>
        </Container>
    )
}