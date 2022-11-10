import Image from 'next/image';
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
        <div className='relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-8 lg:min-h-[40rem] lg:pb-12 lg:mb-64'>
          <div className='col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5'>
            <div className='flex flex-auto flex-col'>
              <p className='leading-tight text-3xl text-black'>I was born in Berlin in the late 1970s, when the Wall still cut through the city. I grew up mainly in Scotland and England, with 
                some time spent in Cyprus during the mid-80s. I spent my teens in my family&apos;s hometown of Paisley, near Glasgow.
              </p>

              <p className='leading-tight text-3xl text-gray-600 mt-4'>
                Today I live in York, with my partner Francesca. I work as a software developer in the clinical healthcare sector.
                I have written two novels: DESK CLERK (Flat Field Press, 2019), and In the Vast and Boundless Deep (Flat Field Press, 2020); as
                well as the short novella The Gift Garden (2017).
              </p>
            </div>         
          </div>
          <div className='col-span-full mb-12 lg:mb-0 px-10 lg:col-span-5 lg:col-start-7'>
            <Image className='mt-4' src='/images/kenny.jpeg' width='400' height='400' alt='kenny mooney' />
          </div>
        </div>
      </PageWrapper>
    </>
  )
}