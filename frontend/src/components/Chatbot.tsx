"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can we help you with your 3D printing needs today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for reaching out! One of our experts will get back to you shortly. Meanwhile, feel free to browse our services.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 glass flex flex-col shadow-2xl rounded-2xl overflow-hidden z-[100] h-[500px] max-h-[calc(100vh-8rem)]"
          >
            {/* Header */}
            <div className="bg-muted/50 p-4 flex justify-between items-center border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-none">Support Chat</h3>
                  <p className="text-xs text-muted-foreground mt-1 text-left">We usually reply in a few minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-foreground/10 focus:outline-none"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex gap-2 max-w-[85%] ${msg.isUser ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm ${msg.isUser ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"}`}>
                    {msg.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-sm shadow-sm ${
                      msg.isUser
                        ? "bg-primary text-primary-foreground rounded-tr-sm px-4"
                        : "bg-card text-foreground rounded-tl-sm px-4 border border-border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-card/80 border-t border-border/50 backdrop-blur-sm">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted/80 border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-primary text-primary-foreground p-2 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground p-3 sm:px-5 sm:py-3 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-colors group"
          >
            <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 drop-shadow-sm group-hover:-rotate-12 transition-transform" />
            <span className="hidden sm:inline-block font-medium tracking-wide">Let's Chat!</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
