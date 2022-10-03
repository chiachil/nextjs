import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={()=>
                console.log("123")}
        />
        
        <h1>First Post</h1>
        <Image src="/images/sample.jpeg" width="700" height="500" />
        <h2>
            <Link href="/">Back to Frontpage</Link>
        </h2>
    </Layout>
    );
}