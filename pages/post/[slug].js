import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDesc} />
        <meta name="keywords" content={frontmatter?.tags} />
        <meta content={frontmatter.metaTitle} property="og:title" />
        <meta content={frontmatter.metaDesc} property="og:description" />
        <meta content={`https://kcm78.github.io/${frontmatter.socialImage}`} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@kinee78" name="twitter:creator" />
        <meta content="@kinee78" name="twitter:site" />
        <meta content={frontmatter.metaTitle} name="twitter:title" />
        <meta content={frontmatter.metaDesc} name="twitter:description" />
        <meta content={`https://kcm78.github.io/${frontmatter.socialImage}`} name="twitter:image" />
      </Head>
      <div className='prose mx-auto mt-12'>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  )
}