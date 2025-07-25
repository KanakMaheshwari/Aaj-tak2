import React, { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { ArticleList } from './ArticleList';
import { articles } from '../data/articles';
export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredArticles = selectedCategory ? articles.filter(article => article.category === selectedCategory) : articles;
  return <div className="space-y-6">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ArticleList articles={filteredArticles} />
    </div>;
};