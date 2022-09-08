import { Container } from './style'

interface ChipProps{
    background: string,
    color: string,
    title: string
}

export default function Chip(props: ChipProps){
    return(
        <Container background={props.background} color={props.color}>
            {props.title}
        </Container>
    )
}