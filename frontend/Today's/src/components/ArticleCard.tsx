import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';
import { ClockIcon } from 'lucide-react';

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  console.log(article);
  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Reduced image height from h-48 to h-36 */}
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
          <h2 className="text-xl font-bold mb-2 line-clamp-2">
            {article.title}
          </h2>

          {/* More visible summary */}
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
      </div>
    </Link>
  );
};
