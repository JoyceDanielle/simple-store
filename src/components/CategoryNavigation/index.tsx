import { Container, Option } from "./style";

const category = [
    {id: 1, name: 'Eletrônico'},
    {id: 2, name: 'Livro'},
    {id: 3, name: 'Casa'},
    {id: 4, name: 'Móveis'},
    {id: 5, name: 'Eletrodoméstico'},
    {id: 6, name: 'Música'},
]

interface CategoryNavigationProps{
    active: string,
    handleActive: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryNavigation({active, handleActive}: CategoryNavigationProps){
    return(
        <Container>
            {
                category.map(item =>{
                    return(
                        <Option active={active === item.name ? true : false}
                            onClick={()=> handleActive(item.name)}
                            >{item.name}</Option>
                    )
                })
            }
        </Container>
    )
}