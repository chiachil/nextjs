import Head from 'next/head'
import styled from 'styled-components';
import QuotaCard from '../components/quotaCard';

export const Test = styled.h1`
  color: red;
`
export default function Home() {
  return (<>
    <Head>
      <title>大哥付</title>
    </Head>
    <QuotaBox>
      <QuotaCard>
      </QuotaCard>
    </QuotaBox>
    </>
  )
}

const QuotaBox = styled.div`
  padding: 0px 20px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px){
    display: flex;
    justify-content: center;
  }
`