import ArticleItem from '../../components/ArticleItem';

export default function Articles({ posts }) {
  return (
    <main>
      <h1 className="text-3xl mb-5">Articles</h1>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://dummyjson.com/posts');
  const posts = await response.json();

  return { props: posts };
}
