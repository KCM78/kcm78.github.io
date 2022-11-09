import Link from 'next/link';
import Image from 'next/image';

export default function Post({ slug, frontmatter }) {
  return (
    <div key={slug} className='relative m-2 overflow-hidden flex flex-col'>
      <Link href={`/post/${slug}`}>
        <Image
          width={frontmatter.imgWidth}
          height={frontmatter.imgHeight}
          alt={frontmatter.title}
          src={`/${frontmatter.socialImage}`}
        />              
      </Link>
    <div className='absolute bottom-0 left-0 bg-white bg-opacity-75 w-full px-4 text-sm opacity-0 hover:opacity-100 duration-500'>
      {frontmatter.title}
    </div>
  </div>
  )
}