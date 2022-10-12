import styled from 'styled-components';
import { H2, Caption1 } from './styles/sharedStyle';
import { Gradient, Teritary5 } from '../global/styles/constants/colors';
import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

const QuotaCard = () =>{
    const dataSet = [{
        title: '可用餘額',
        amount: '$25,000'
    },{
        title: '本期帳單',
        amount: '$55,000'
    }]
    
    return(
        <Container>
        {dataSet.map((data) => {
            const { index, title, amount } = data;
            return(<>
                <Box key={index}>
                            <Title>
                                <Caption1 style={{color: Teritary5}}>{title}</Caption1>
                                <Line />
                            </Title>
                            <Link href='/quotaInfo'>
                                <Quota>
                                    <H2 style={{lineHeight: '31px'}}>{amount}</H2>
                                    <BsChevronRight style={{color: Teritary5, marginLeft: '8px'}}/>
                                </Quota>
                            </Link>
                </Box>
                { index !== dataSet.length-1 && <VerticalLine/> }
            </>
            )
        })}
        </Container>
    )
}

export default QuotaCard;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 572px;
    height: 108px;
    background-image: ${Gradient};
    border-radius: 10px;
    box-shadow: 0px 1px 16px rgba(148, 148, 148, 0.25);
`
const Box = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Quota = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Line = styled.hr`
    width: 13px;
    height: 1px;
    background-color: ${Teritary5};
`
const VerticalLine = styled.hr`
    width: 0.5px;
    height: 26px;
    background-color: ${Teritary5};
`