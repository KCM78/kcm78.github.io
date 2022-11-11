import BookContent from './BookContent';
import BookCover from './BookCover';
import BookLinks from './BookLinks';

export default function Book({ bookData }) {
  return (
      <div className='relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-6 h-auto pt-8 lg:min-h-[40rem] lg:pb-12 lg:mb-6'>
        <BookContent 
          title={bookData.title} 
          content={bookData.content}
        />
        
        <div className='col-span-full mb-12 lg:mb-0 px-10 pt-6 lg:col-span-5 lg:col-start-7'>
          <BookCover 
            image={bookData.image} 
            imgWidth={bookData.imgWidth} 
            imgHeight={bookData.imgHeight} 
            title={bookData.title} 
          />
          <BookLinks purchaseLinks={bookData.purchaseLinks} />
        </div>
      </div>
  )
}