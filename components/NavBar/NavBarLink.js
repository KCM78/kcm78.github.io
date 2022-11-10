import Link from 'next/link';

export default function NavBarLink({ linkName }) {
  const test = () => {
    console.log('hello');
  }
  return (
    <li className='px-5 py-2'>
      <Link className='text-white font-medium hover:underline block whitespace-nowrap text-lg'
        href={`/${linkName}`}>{linkName}</Link>
    </li>
  )
}