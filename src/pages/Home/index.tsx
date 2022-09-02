import BottomBar from "../../components/BottomBar";
import CategoryNavigation from "../../components/CategoryNavigation";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { AreaSection, Container, Section, ShowProducts, Title } from "./style";
import Data from '../../data.json';

export default function Home(){
    return(
        <Container>
            <Header title="Joyzis Store"/>
            <Title>Descubra</Title>
            <CategoryNavigation/>
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