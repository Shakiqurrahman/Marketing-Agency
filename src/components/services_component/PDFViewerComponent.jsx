import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewerComponent = ({ pdfUrl }) => {
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  );
};

export default PDFViewerComponent;