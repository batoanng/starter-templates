import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NextJS Template</title>
                <meta name="description" content="NextJS Template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="hello">Hello!</div>
        </div>
    );
}
