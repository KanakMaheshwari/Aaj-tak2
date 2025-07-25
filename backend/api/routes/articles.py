
from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from backend.services import article_service

router = APIRouter()

@router.get("/", response_model=List[Dict[str, Any]])
def get_all_articles():
    return article_service.get_all_articles()

@router.get("/author/{author}", response_model=List[Dict[str, Any]])
def get_articles_by_author(author: str):
    return article_service.get_articles_by_author(author)

@router.get("/category/{category}", response_model=List[Dict[str, Any]])
def get_articles_by_category(category: str):
    return article_service.get_articles_by_category(category)

@router.get("/search/{query}", response_model=List[Dict[str, Any]])
def search_articles(query: str):
    return article_service.search_articles(query)

@router.get("/highlight/{highlight}", response_model=List[Dict[str, Any]])
def get_article_by_highlight(highlight: str):
    return article_service.get_article_by_highlight(highlight)
