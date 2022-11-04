import Link from 'next/link';

export default function Header() {
  return (
    <>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/books">Books</Link>
        <Link href="/music">Music</Link>
      </nav>
    </header>
  </>
  )
}