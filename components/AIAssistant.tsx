
import React, { useState, useEffect, useRef } from 'react';
import { getGeminiChat } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hi! I'm ${PERSONAL_INFO.name.split(' ')[0]}'s AI assistant. Ask me anything about her work, skills, or projects!` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = getGeminiChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatRef.current) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to my brain. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-zinc-800 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <i className="fas fa-robot text-xs text-white"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold">Portfolio Guide</h4>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-zinc-800 text-zinc-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-800">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask about ${PERSONAL_INFO.name.split(' ')[0]}...`}
                className="w-full bg-zinc-800 border-none rounded-full px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-indigo-600 outline-none"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/30 flex items-center justify-center text-white hover:bg-indigo-500 hover:scale-110 transition-all active:scale-95 group"
        >
          <i className="fas fa-comment-dots text-xl group-hover:hidden"></i>
          <i className="fas fa-robot text-xl hidden group-hover:block animate-bounce"></i>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
