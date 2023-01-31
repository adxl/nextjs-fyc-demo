import React from 'react';
import Link from 'next/link';

export default function ArticleItem({ article }) {
  return (
    <div className="flex flex-col max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{article.title}</h5>
      <p className="mb-3 font-normal text-gray-400">{article.body.substring(0, 200)}</p>
      <div className="mt-auto">
        <Link href={`/articles/${article.id}`} className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
}
