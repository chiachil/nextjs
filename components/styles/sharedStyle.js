import styled from "styled-components";
import { Teritary5 } from '../../global/styles/constants/colors';

// fonts
export const H1 = styled.p`
    font-weight: 500;
    font-size: 28px;
    color: ${Teritary5};
`
export const H2 = styled.p`
    font-weight: 500;
    font-size: 24px;
    color: ${Teritary5};
`
export const Caption1 = styled.p`
    font-weight: 400;
    font-size: 13px;
`
export const Caption2 = styled.p`
    font-weight: 400;
    font-size: 12px;
`

// layout
export const Main = styled.main`
    width: 100%;
    margin-top: 12px;
    @media only screen and (min-width: 768px){
        margin-top: 48px;
    }
`