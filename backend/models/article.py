from sqlalchemy import Column, Integer, String, DateTime, Text
from backend.database.connection import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    url = Column(String, unique=True, index=True)
    source = Column(String)
    published_at = Column(DateTime)
    content = Column(Text)
    summary = Column(Text)
    category = Column(String)
