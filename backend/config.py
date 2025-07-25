import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///../data/database/news.db")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")
