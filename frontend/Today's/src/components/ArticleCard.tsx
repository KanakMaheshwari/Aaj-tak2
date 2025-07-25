import React from 'react';
import { Article } from '../data/articles';
import { ClockIcon } from 'lucide-react';

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  console.log(article);
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-36">
        <img
          src={article.img_link}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs font-medium capitalize">
          {article.category}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 line-clamp-2">
          {article.title}
        </h2>

        <p className="text-gray-700 text-sm mb-3 line-clamp-4">
          {article.summary}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.author}</span>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
