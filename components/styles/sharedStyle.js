import styled from "styled-components";
import { Gradient } from '../../global/constants/colors';

// fonts
export const Caption2 = styled.p`
    font-family: Roboto,'Noto Sans TC', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`

// layout
export const Main = styled.main`
    width: 100%;
    margin-top: 12px;
    @media only screen and (min-width: 768px){
        margin-top: 48px;
    }
`
export const QuotaCard = styled.div`
    width: 100%;
    max-width: 572px;
    height: 108px;
    background-image: ${Gradient};
    border-radius: 10px;
    box-shadow: 0px 1px 16px rgba(148, 148, 148, 0.25);
`