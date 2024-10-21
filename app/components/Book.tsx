"use client";

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookContent } from '../types';
import Image from 'next/image';

interface BookProps {
  content: BookContent[];
}

const Book = forwardRef<any, BookProps>(({ content }, ref) => {
  const [page, setPage] = useState(0);
  const book = React.useRef<any>(null);

  useImperativeHandle(ref, () => ({
    pageFlip: () => book.current.pageFlip(),
  }));

  return (
    <div className="book-container">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={(e) => setPage(e.data)}
        className="demo-book"
        ref={book}
      >
        {content.map((chapter, index) => (
          <div key={index} className="page">
            <div className="page-content">
              <Image
                src={chapter.imageUrl}
                alt={`Chapter ${chapter.chapter}`}
                width={400}
                height={600}
                className="page-image"
              />
            </div>
            <div className="page-content">
              <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
              <p>{chapter.content}</p>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
});

Book.displayName = 'Book';

export default Book;