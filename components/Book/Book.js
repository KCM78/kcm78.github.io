import Image from 'next/image';

export default function Book({ title, content, image, imgWidth, imgHeight }) {
  return (
    <>
      <div className='relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-6 h-auto pt-8 lg:min-h-[40rem] lg:pb-12 lg:mb-6'>
        <div className='col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5'>
          <div className='flex flex-auto flex-col'>
            <div>
              <h2 className='leading-tight text-3xl text-black font-medium'>{title}</h2>
              <p className='leading-tight text-3xl text-gray-600 mt-4'>{content}</p>
            </div>
          </div>
        </div>
        
        <div className='col-span-full mb-12 lg:mb-0 px-10 pt-6 lg:col-span-5 lg:col-start-7'>
          <Image className='mt-8' src={image} width={imgWidth} height={imgHeight} alt={title} />
        </div>
      </div>
    </>
  )
}