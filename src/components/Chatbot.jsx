import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: input.trim() },
      { role: 'bot', text: "Thanks! I'm a demo assistant. A full AI chat can be wired to your backend later." }
    ]);
    setInput('');
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-80 sm:w-96 rounded-xl shadow-xl bg-white border border-green-100 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="font-semibold">Farm Fusion Assistant</div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-green-50/40">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'bot' ? 'bg-white border-green-100' : 'bg-green-100 border-green-200 ml-auto'} max-w-[85%] border rounded-lg px-3 py-2 text-sm text-green-900 shadow-sm`}> 
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={handleSend} className="flex gap-2 p-3 border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about crops, disease, sustainability..."
              className="flex-1 rounded-lg border border-green-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300"
            />
            <button type="submit" className="inline-flex items-center gap-1 rounded-lg bg-green-600 text-white px-3 py-2 text-sm hover:bg-green-700">
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 h-14 w-14 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 focus:ring-4 focus:ring-green-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </>
  );
};

export default Chatbot;