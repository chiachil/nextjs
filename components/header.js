import styled from 'styled-components';
import Link from 'next/link';

const Header = () =>{

    return(<>
            <Container>
                <Logo>
                    <Link href='/'>
                        <a><img src='/images/logo.svg'/></a>
                    </Link>
                </Logo>
            </Container>
            <ContainerClear/>
        </>
    )
}

export default Header;

const Container = styled.div`
    width: 100%;
    height:  68px;
    padding: 20px 20px 24px;
    background-color: #ffffff;
    @media only screen and (min-width: 768px){
        height:  78px;
        position: fixed;
        top: 0;
        z-index: 100;
        border: solid 1px #c0c0c02e;
        box-shadow: 0px 0px 11px rgba(96, 96, 96, 0.1);
        padding: 24px 20px;
    }
`
const Logo = styled.div`
    width: 100%;
    @media only screen and (min-width: 768px){
        max-width:1120px;
        margin: 0 auto;
    }
`
const ContainerClear = styled.div`
    width: 100%;
    background-color: #ffffff;
    @media only screen and (min-width: 768px){
        height: 78px;
    }
`