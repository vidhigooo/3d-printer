"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappContacts = [
  {
    label: "3D Printing Support and Consultation",
    phone: "919082020416",
    description: "Click here to chat with us",
  },
  {
    label: "3D Printing B2B",
    phone: "918655211644",
    description: "Click here to chat with us",
  },
  {
    label: "3D Printer Buying Suggestions",
    phone: "918369305601",
    description: "Click here to chat with us",
  },
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.46 0 .06 5.4.06 12.04c0 2.12.56 4.2 1.62 6.04L0 24l6.14-1.61a11.93 11.93 0 0 0 5.96 1.53h.01c6.64 0 12.04-5.4 12.04-12.03 0-3.22-1.26-6.24-3.63-8.41ZM12.11 21.7h-.01a9.94 9.94 0 0 1-5.08-1.4l-.36-.22-3.65.96.98-3.56-.24-.37a9.92 9.92 0 0 1-1.52-5.28c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.91 7.04c0 5.48-4.46 9.87-9.99 9.87Zm5.78-7.45c-.32-.16-1.89-.93-2.18-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.32-.02-.49.14-.65.15-.15.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.02-.56-.08-.16-.71-1.72-.97-2.35-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.1 1.07-1.1 2.61 0 1.53 1.13 3.01 1.29 3.22.16.21 2.19 3.35 5.3 4.7.74.32 1.31.51 1.76.66.74.24 1.42.21 1.96.13.6-.09 1.89-.77 2.15-1.52.26-.74.26-1.38.18-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-4 z-[100] w-[calc(100vw-2rem)] max-w-[21rem] overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#e8ddd3] shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:right-6 sm:w-[22rem]"
          >
            <div className="relative bg-[#0f8f79] px-5 py-4 text-foreground">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 rounded-full p-1.5 text-foreground/90 transition-colors hover:bg-slate-100 dark:bg-slate-900 hover:text-foreground"
                aria-label="Close WhatsApp panel"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-2 pr-8">
                <p className="text-xl font-semibold leading-tight">Hello Customer 👋</p>
                <p className="text-sm leading-6 text-foreground/90">
                  We are happy to help, please choose from below option or email us at
                  <a href="mailto:sales@vektor3ds.com" className="ml-1 font-semibold underline decoration-white/50 underline-offset-2">
                    sales@vektor3ds.com.
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3 px-3 py-4 sm:px-4">
              {whatsappContacts.map((contact) => (
                <motion.a
                  key={contact.phone}
                  href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(`Hello, I would like to know more about ${contact.label.toLowerCase()}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-left shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-neutral-500">{contact.label}</p>
                    <p className="truncate text-base font-medium text-neutral-800">Vektor3D Systems LLP</p>
                    <p className="text-sm text-neutral-500">{contact.description}</p>
                  </div>

                  <ArrowRight className="h-6 w-6 shrink-0 text-neutral-500" />
                </motion.a>
              ))}
            </div>

            <div className="border-t border-black/10 bg-white/70 px-4 py-3 text-center text-xs text-neutral-600 backdrop-blur-sm">
              Feel free to reach out to us anytime!
            </div>

            <div ref={messagesEndRef} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open WhatsApp chat options"
            className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-foreground shadow-[0_14px_28px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#1ebe5d]"
          >
            <WhatsAppIcon className="h-8 w-8" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
