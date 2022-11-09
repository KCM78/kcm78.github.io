import Book from '../components/Book';
import { BookData } from '../lib/BookData';
import Head from 'next/head';

export default function Books() {
  return (
    <>
      <Head>
        <title>Kenny Mooney | Books</title>
        <meta name="description" content="Books by Kenny Mooney, York-based Scottish writer and software developer" />
        <meta name="keywords" content="kenny mooney, glasgow, york, writer, software developer, the gift garden, desk clerk, in the vast and boundless deep" />
      </Head>
      <div className='w-3/4 container mx-auto mt-12'>
        <h1 className='leading-tight text-3xl text-black font-medium'>Books</h1>
        {BookData.map((book) => (
          <Book 
            key={book.title} 
            title={book.title} 
            content={book.content} 
            image={book.image} 
            imgWidth={book.imgWidth}
            imgHeight={book.imgHeight}
          />
        ))}
      </div>
    </>
  )
}