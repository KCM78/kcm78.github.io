import PageWrapper from '../components/Page/PageWrapper';
import PageHeader from '../components/Page/PageHeader';
import { FictionItems } from '../lib/FictionItems';
import Link from 'next/link';

export default function Fiction() {
  const pageTitle="Fiction";
  return (
    <>
      <PageHeader
        title={pageTitle}
        description="Works of short fiction by Kenny Mooney, York-based Scottish writer and software developer"
        tags="kenny mooney, glasgow, york, writer, software developer, the gift garden, desk clerk, in the vast and boundless deep"
      />
      <PageWrapper title={pageTitle}>
        <div className='mt-4'>
          <h2 className='leading-tight text-3xl text-black font-medium'>
            This is a list of some of my published short fiction from around the web. 
            A lot of stuff has since disappeared as journals have closed, so this is as up to date as it can be at the moment.
          </h2>
          <ul className='mt-4 text-2xl text-gray-600 font-medium'>
            {FictionItems.map((item) => (
              <li className='pt-2' key={item.title}>
                <Link className='hover:text-red-900' href={item.link}>{`${item.title} [${item.publication}]`}</Link>
              </li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    </>
  )
}