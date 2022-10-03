import styled from 'styled-components';
import Link from 'next/link'

const Header = () =>{
    const headerHeight = '76px';

    return(<>
            <Container height={headerHeight}>
                <Link href='/'>
                    <a><img src='/images/logo.svg'/></a>
                </Link>
            </Container>
            <ContainerClear height={headerHeight}/>
        </>
    )
}

export default Header;

const Container = styled.div`
    width: 100%;
    height:  ${props => props.height};
    padding: 24px 20px;
    background-color: #ffffff;
    border: solid 1px #c0c0c02e;
    @media only screen and (min-width: 768px){
        position: fixed;
        top: 0;
        z-index: 100;
        box-shadow: 0px 0px 11px rgba(96, 96, 96, 0.1);
    }
`
const ContainerClear = styled.div`
    width: 100%;
    height: 0px;
    background-color: #ffffff;
    @media only screen and (min-width: 768px){
        height: ${props => props.height};
    }
`