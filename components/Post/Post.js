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
      <Link href={`/post/${slug}`}>
        <div className='absolute bottom-0 left-0 bg-white w-full h-1/2 px-4 text-sm opacity-0 hover:opacity-80 duration-500'>
          <p className='mt-2 font-medium'>{frontmatter.title}</p>
          <p>{frontmatter.metaDesc}</p>
        </div>
      </Link>
    </div>
  )
}