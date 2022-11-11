export default function BookContent({ title, content }) {
  return (
    <div className='col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5'>
      <div className='flex flex-auto flex-col'>
        <div>
          <h2 className='leading-tight text-3xl text-black font-medium'>{title}</h2>
          <p className='leading-tight text-3xl text-gray-600 mt-4'>{content}</p>
        </div>
      </div>
    </div>
  )
}