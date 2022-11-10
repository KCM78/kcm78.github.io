import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kenny Mooney</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
};