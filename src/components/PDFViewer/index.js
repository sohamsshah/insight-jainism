import React from 'react';
import styles from './styles.module.css';

export default function PDFViewer({ 
  file, 
  title = 'PDF Document',
  height = '80vh',
  showDownload = true 
}) {
  // Handle both absolute URLs and relative paths from static folder
  const pdfUrl = file.startsWith('http') ? file : `/pdfs/${file}`;
  
  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdfHeader}>
        <span className={styles.pdfTitle}>{title}</span>
        {showDownload && (
          <a 
            href={pdfUrl} 
            download 
            className={styles.downloadButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        )}
      </div>
      <iframe
        src={pdfUrl}
        title={title}
        className={styles.pdfFrame}
        style={{ height }}
      />
      <div className={styles.fallback}>
        <p>
          Unable to display PDF? {' '}
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Click here to open
          </a>
        </p>
      </div>
    </div>
  );
}
