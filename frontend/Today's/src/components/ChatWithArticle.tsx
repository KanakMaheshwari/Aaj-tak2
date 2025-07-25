import React, { useState } from 'react';
import { Article } from '../data/articles';
import { SendIcon, XIcon } from 'lucide-react';
type ChatWithArticleProps = {
  article: Article;
};
type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};
export const ChatWithArticle = ({
  article
}: ChatWithArticleProps) => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    sender: 'ai',
    text: `Hi! I'm your AI assistant. Ask me any questions about "${article.title}".`
  }]);
  const [inputValue, setInputValue] = useState('');
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: generateResponse(inputValue, article)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  return <div className="mt-6 border rounded-lg shadow-sm">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-medium">Chat with this article</h3>
        <button className="p-1 hover:bg-blue-700 rounded">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map(message => <div key={message.id} className={`mb-4 max-w-3/4 ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
            <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border rounded-bl-none'}`}>
              {message.text}
            </div>
          </div>)}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask a question about this article..." className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
};
// Helper function to generate mock responses
function generateResponse(question: string, article: Article): string {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('about') || lowerQuestion.includes('what')) {
    return `This article is about ${article.title}. It covers ${article.summary}`;
  }
  if (lowerQuestion.includes('who') || lowerQuestion.includes('author')) {
    return `The article was written by ${article.author}.`;
  }
  if (lowerQuestion.includes('when') || lowerQuestion.includes('date')) {
    return `This article was published on ${article.date}.`;
  }
  return `That's an interesting question about "${article.title}". The article discusses ${article.category} topics and provides insights on current events. Is there something specific you'd like to know about the content?`;
}