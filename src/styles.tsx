import styled from "styled-components"
import fondo from './assets/fondorick.svg';

const Title = styled.p`
font-size: 2.6rem;
font-weight: 700;
color: #6e6e6e;
opacity: 0.7;

`

const HeaderHome = styled.div`
display: flex;
align-items: center;
padding: 3rem .5rem;
position: relative;
`

const LinkButton= styled.button`
background-color: #469be5;
border: none;
border-radius: .5rem;
padding: 1rem;
cursor: pointer;
color: #fff;
font-weight: 700;
margin: 0 .5rem;
`

const HeaderMenu = styled.header`
height: 32.7rem;
background-image: url(${fondo});
background-repeat: no-repeat;
background-size: cover;
opacity: 0.9;
`

const CardDisplay = styled.main`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media screen and (max-width: 425px) {
        grid-template-columns: repeat(2,1fr);
    }
`

const Formulario = styled.form`
display: grid;
grid-template-columns:1fr;
padding: 1rem;
width: 30%;
gap: 2rem;
margin: 0 auto;
`

const InfoText = styled.p`
font-size: 1.2rem;
color: #000;
opacity: 0.9;
font-weight: 700;
`



export {Title, HeaderHome,HeaderMenu, LinkButton, CardDisplay, Formulario, InfoText}