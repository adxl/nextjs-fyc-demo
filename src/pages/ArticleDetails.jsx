import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ArticleDetails() {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});

  async function getArticle() {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await response.json();

    console.log(post);
    return post;
  }

  useEffect(() => {
    getArticle().then((data) => setArticleDetails(data));
  }, []);

  return (
    <div className="flex justify-center items-center">
      <button type="button" className="block max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <div className="text-white text-left mb-6">
          <Link to="/articles">
            <span>Back</span>
          </Link>
        </div>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{articleDetails.title}</h5>
        <p className="font-normal text-gray-400 mb-6">{articleDetails.body}</p>

        <div className="flex items-center">
          <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Rating star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
          <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {articleDetails.reactions}
&nbsp;reviews
          </span>
        </div>
      </button>
    </div>
  );
}
