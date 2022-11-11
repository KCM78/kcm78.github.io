import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '../components/Page/PageWrapper';
import PageHeader from '../components/Page/PageHeader';

export default function About() {
  const pageTitle = "About"
  return (
    <>
      <PageHeader 
        title={pageTitle}
        description="About Kenny Mooney, York-based Scottish writer and software developer"
        tags="kenny mooney, glasgow, york, writer, software developer, the gift garden, desk clerk, in the vast and boundless deep"
      />
      <PageWrapper title={pageTitle}>
        <div className='relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 
          h-auto pt-8 lg:min-h-[40rem] lg:pb-12 lg:mb-64'>
          <div className='col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5'>
            <div className='flex flex-auto flex-col'>
              <p className='leading-tight text-3xl text-black'>I was born in Berlin in the late 1970s, when the Wall still cut 
                through the city. I grew up mainly in Scotland and England, with 
                some time spent in Cyprus during the mid-80s. I spent my teens in my family&apos;s hometown of Paisley, near Glasgow.
              </p>

              <p className='leading-tight text-3xl text-gray-600 mt-4'>
                Today I live in York, with my partner Francesca. I work as a software developer in the clinical healthcare sector.
              </p>
              <p className='leading-tight text-3xl text-gray-600 mt-4'>
                I have written two novels: <Link className='text-black font-medium hover:text-red-900' href='/books'>Desk Clerk</Link> (Flat Field Press, 2019), 
                and <Link className='text-black font-medium hover:text-red-900' href='/books'>In the Vast and Boundless Deep</Link> (Flat Field Press, 2020); as
                well as the short novella <Link className='text-black font-medium hover:text-red-900' href='/books'>The Gift Garden</Link> (2017). I also contributed a chapter to 
                the collaborative experimental novel project 
                <Link className='text-black font-medium hover:text-red-900' href='https://1111press.com/cvitef'> Collected Voices in the Expanded Field</Link>, published by 11:11 Press.
              </p>
            </div>         
          </div>
          <div className='col-span-full mb-12 lg:mb-0 px-10 lg:col-span-5 lg:col-start-7'>
            <Image className='mt-8' src='/images/kenny.jpeg' width='400' height='400' alt='kenny mooney' />
            <p className='mt-4'>
              <Link className='hover:text-red-900' href="https://orchidslantern.com/2020/04/05/writers-on-lockdown-kenny-mooney/">
                <span className='font-medium'>Writers on Lockdown:</span> Interview with Orchid&apos;s Lantern
              </Link>
            </p>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}