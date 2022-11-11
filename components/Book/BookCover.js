import Image from 'next/image';

export default function BookCover({ image, imgWidth, imgHeight, title }) {
  return (
    <Image 
      className='mt-8' 
      src={image} 
      width={imgWidth} 
      height={imgHeight} 
      alt={title} 
    />
  )
}