import React, { useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfViewer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  if (!state?.pdfUrl) {
    navigate(-1);
    return null;
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#16213e] border-b border-white/10 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-brand-purple" />
          <span className="text-white font-semibold text-sm line-clamp-1 max-w-xs">{state.title}</span>
        </div>
        {numPages && (
          <span className="text-slate-400 text-sm">Page {pageNumber} of {numPages}</span>
        )}
      </div>

      {/* PDF Page */}
      <div className="flex-grow flex items-center justify-center py-8 px-4 w-full">
        {loading && (
          <div className="text-slate-400 text-sm animate-pulse">Loading book...</div>
        )}
        <Document
          file={state.pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading=""
          className="shadow-2xl"
        >
          <Page
            pageNumber={pageNumber}
            width={Math.min(window.innerWidth - 120, 800)}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="rounded-lg overflow-hidden"
          />
        </Document>
      </div>

      {/* Navigation */}
      {numPages && (
        <div className="sticky bottom-0 w-full bg-[#16213e] border-t border-white/10 px-6 py-3 flex items-center justify-center gap-6">
          <button
            onClick={() => setPageNumber(p => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-brand-purple transition-colors text-sm font-semibold"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={e => {
                const val = Number(e.target.value);
                if (val >= 1 && val <= numPages) setPageNumber(val);
              }}
              className="w-14 text-center bg-white/10 text-white rounded-lg py-1.5 text-sm border border-white/20 focus:outline-none focus:border-brand-purple"
            />
            <span className="text-slate-400 text-sm">/ {numPages}</span>
          </div>

          <button
            onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-brand-purple transition-colors text-sm font-semibold"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
