import React, { useEffect, useState } from 'react';

import ArticleItem from '../components/ArticleItem';

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  async function getArticles() {
    const response = await fetch('https://dummyjson.com/posts');
    const { posts } = await response.json();

    return posts;
  }

  useEffect(() => {
    getArticles().then((data) => setArticlesList(data));
  }, []);

  return (
    <main>
      <h1 className="text-3xl mb-5">Articles</h1>
      <div className="grid grid-cols-4 gap-2">
        {articlesList.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
