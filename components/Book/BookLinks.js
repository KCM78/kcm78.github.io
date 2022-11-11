import Link from 'next/link';

export default function BookLinks({ purchaseLinks }) {
  return (
    <>
      <h3 className='mt-4'>Available from:</h3>
      <ul>
        {purchaseLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='hover:text-red-900'
                key={index} 
                href={link.storeLink}>
                  {link.availableFrom}
              </Link>
            </li>
        ))}
      </ul>
    </>
  )
}