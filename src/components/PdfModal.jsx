import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';

const PdfModal = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="pdf-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#1e1e2e]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#16213e] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-white font-semibold text-sm line-clamp-1">{item.title}</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 transition-colors flex items-center justify-center text-white shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* PDF */}
          <iframe
            src={item.pdfUrl + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'}
            className="flex-grow w-full border-none"
            title={item.title}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PdfModal;
