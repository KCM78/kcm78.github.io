import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className='m-2 overflow-hidden flex flex-col'>
          <Link href={`/post/${slug}`}>
            <Image
              width={frontmatter.imgWidth}
              height={frontmatter.imgHeight}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />              
          </Link>
        </div>
      ))}
    </div>
  );
}
