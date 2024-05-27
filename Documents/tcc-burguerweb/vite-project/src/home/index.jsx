import React from "react";
import Homelogo from '../assets/fundo_home.jpg'


import { Container, HomeImg, Title, CenterContainer, TitleOferta} from "./styles";
import CategoryCarousel from "../components/CategoryCarousel";

export default function Home() {
    return (
        <Container>
            <HomeImg src={Homelogo} alt="Logo da home" />
            <CenterContainer>
            <Title> Categorias </Title>
            <CategoryCarousel/>
            <TitleOferta> Ofertas </TitleOferta>
            </CenterContainer>
        </Container>
    );
}


