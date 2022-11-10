import Book from '../components/Book/Book';
import { BookData } from '../lib/BookData';
import PageWrapper from '../components/Page/PageWrapper';
import PageHeader from '../components/Page/PageHeader';

export default function Books() {
  const pageTitle="Books";
  return (
    <>
      <PageHeader
        title={pageTitle}
        description="Books by Kenny Mooney, York-based Scottish writer and software developer"
        tags="kenny mooney, glasgow, york, writer, software developer, the gift garden, desk clerk, in the vast and boundless deep"
      />
      <PageWrapper title={pageTitle}>
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
      </PageWrapper>
    </>
  )
}