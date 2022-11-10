import Head from 'next/head';

export default function PageHeader({ title, description, tags }) {
  return (
    <Head>
      <title>Kenny Mooney | {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags} />
    </Head>
  )
}