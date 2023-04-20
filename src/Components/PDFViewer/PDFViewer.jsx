import React, { useState, useEffect } from 'react';

function PDFViewer(props) {
  const [pdfUrls] = useState(props.pdfUrls);
  const [currentPDFUrl, setCurrentPDFUrl] = useState(pdfUrls[0]);
    
  const handleLinkClick = (event, pdfUrl) => {
    event.preventDefault();
    setCurrentPDFUrl(pdfUrl);
  };

  const getFileName = (pdfUrl) => {
    const decodedUrl = decodeURI(pdfUrl);
    const fileNameWithExt = decodedUrl.split('/').pop();
    const fileName = fileNameWithExt.slice(0, fileNameWithExt.indexOf('.pdf'));
    return fileName;
  };

  useEffect(() => {
    setCurrentPDFUrl(pdfUrls[0]);
  }, [pdfUrls]);

  const linkStyle = {
    display: 'block',
    marginBottom: '10px',
    padding: '5px',
    backgroundColor: '#0077cc',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s ease-in-out',
  };

  const activeLinkStyle = {
    backgroundColor: '#235891',
    color: '#fff',
  };

  return (
    <div className='pdfContainer'>
      <div className='buttonsPdf'>
        {pdfUrls.map((pdfUrl, index) => (
          <a
            key={index}
            href={pdfUrl}
            download={true}
            onClick={(event) => handleLinkClick(event, pdfUrl)}
            style={currentPDFUrl === pdfUrl ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
          >
            {getFileName(pdfUrl)}
          </a>
        ))}
      </div>
      <iframe className='pdfViewer' title='name' src={currentPDFUrl} width="100%" height="600px"></iframe>
    </div>
  );
}

export default PDFViewer;

