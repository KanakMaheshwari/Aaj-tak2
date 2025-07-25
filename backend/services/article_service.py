
import json
from typing import List, Dict, Any

ARTICLES_FILE = "/Users/pratap/code/Aaj-takk/backend/data/generator_stores/processed_articles.json"

def get_all_articles() -> List[Dict[str, Any]]:
    """
    Reads and returns all articles from the processed_articles.json file.
    """
    with open(ARTICLES_FILE, 'r') as f:
        return json.load(f)

def get_articles_by_author(author: str) -> List[Dict[str, Any]]:
    """
    Filters articles by author.
    """
    articles = get_all_articles()
    return [article for article in articles if author in article.get('author', [])]

def get_articles_by_category(category: str) -> List[Dict[str, Any]]:
    """
    Filters articles by category.
    """
    articles = get_all_articles()
    return [article for article in articles if category.lower() in article.get('ai_output', {}).get('Category', '').lower()]

def search_articles(query: str) -> List[Dict[str, Any]]:
    """
    Searches articles by title or content.
    """
    articles = get_all_articles()
    query = query.lower()
    return [
        article for article in articles
        if query in article.get('title', '').lower() or query in article.get('article', '').lower()
    ]

def get_article_by_highlight(highlight: str) -> List[Dict[str, Any]]:
    """
    Filters articles by highlight.
    """
    articles = get_all_articles()
    return [article for article in articles if highlight.lower() in article.get('ai_output', {}).get('Highlight', '').lower()]
