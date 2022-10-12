import styled from 'styled-components';
import { Caption2 } from './styles/sharedStyle';

const Footer = () =>{
    return(
        <Container>
            <Slogan>
                <img src='/images/footer-logo.svg'/>
            </Slogan>
            <Copyright>
                <Caption2 style={{color:'#5C5C5C'}}>台灣大哥大版權所有</Caption2>
                <Caption2 style={{color:'#5C5C5C'}}>©2022 TaiwanMobile All Rights Reserved</Caption2>
            </Copyright>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 20px;
    margin-top: 40px;
    @media only screen and (min-width: 768px){
        max-width:1120px;
        margin: 0 auto;
        flex-direction: row;
        padding: 40px 20px;
        margin-top: 80px;
    }
`

const Slogan = styled.div`
    margin-bottom: 28px;
    @media only screen and (min-width: 768px){
        margin-bottom: 0px;
    }
`
const Copyright = styled.div`
    @media only screen and (min-width: 768px){
        display: flex;
    }
`