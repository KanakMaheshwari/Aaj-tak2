
from fastapi import APIRouter
from backend.services import chat_service

router = APIRouter()

@router.post("/", response_model=str)
def chat_with_rag(query: str):
    return chat_service.get_chat_response(query)
