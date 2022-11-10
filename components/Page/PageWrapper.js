export default function PageWrapper({ children, title }) {
  return (
    <div className='w-3/4 container mx-auto mt-12'>
      <h1 className='leading-tight text-3xl text-black font-medium'>{title}</h1>
      {children}
    </div>
  )
}