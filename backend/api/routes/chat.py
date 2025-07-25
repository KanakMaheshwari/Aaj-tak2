
from fastapi import APIRouter
from backend.rag.rag_pipeline_simple import chat_with_rag

router = APIRouter()

@router.post("/", response_model=str)
def chat_endpoint(query: str):
    return chat_with_rag(query)
