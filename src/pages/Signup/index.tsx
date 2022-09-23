import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonArea, Container, InputArea, Link, Logo, TextLink, Title } from "./style";
import Input from '../../components/Input';
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { register, selectUser } from "../../redux/slice/userSlice";
import http from "../../axios";
import { isVisible, selectLoader } from '../../redux/slice/loaderSlice';
import { LoaderIcon } from '../../assets/icons';


export default function Signup(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(selectUser)
    const loader = useSelector(selectLoader)

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    function save(){
        dispatch(isVisible(true))
        http.post('/user', {
            user: user,
            password: password,
            name: name
        })
        .then(res => res.data)
        .then(res => dispatch(isVisible(false)))
        .then(res => navigate('/login'))
    }
  
    return(
        <Container>
            <Logo onClick={()=> navigate('/')}>
                LOGO
            </Logo>
            <Title>
                Cadastrar
            </Title>
            <InputArea>
                <Input title="Email" placeholder="Digite seu Email" value={user} onChange={value => setUser(value)}/>
                <Input title="Senha" type='password' placeholder="Digite sua Senha" value={password} onChange={value => setPassword(value)}/>
                <Input title="Nome" placeholder="Digite seu Nome" value={name} onChange={value => setName(value)}/>
            </InputArea>
            <ButtonArea>
                <Button text="Salvar" onClick={()=> save()} loader={loader}/>

            </ButtonArea>
            <TextLink>
                Já possui cadastrado ? <Link onClick={()=> navigate('/login')}>Fazer login</Link>
                
            </TextLink>
        </Container>
    )
}