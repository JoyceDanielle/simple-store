import BottomBar from "../../components/BottomBar";
import CategoryNavigation from "../../components/CategoryNavigation";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { AreaSection, Container, Section, ShowProducts, Title } from "./style";
import Data from '../../data.json';
import { useState } from "react";

export default function Home(){
    const [active, setActive] = useState<string>('Eletrônico')
    return(
        <Container>
            <Header title="Joyzis Store"/>
            <Title>Descubra</Title>
            <CategoryNavigation active={active} handleActive={setActive}/>
            <Products data={Data}/>
            <AreaSection>
                <Section>Ofertas</Section>
                <ShowProducts>
                    Ver tudo
                </ShowProducts>
            </AreaSection>
            
            <Products data={Data}/>
            <BottomBar/>
        </Container>
    )
}