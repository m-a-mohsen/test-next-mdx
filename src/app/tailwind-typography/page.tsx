import RemoteMdxPage from '../mdx-remote/page.mdx';
function page() {
    return (
      <article className='prose prose-img:rounded-xl prose-headings:text-blue-600 prose-a:text-blue-600 prose-headings:m-0 '>
        <RemoteMdxPage />;
      </article>
    );
}

export default page