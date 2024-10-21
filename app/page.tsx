"use client";

import React, { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Book from './components/Book';
import { bookContent } from './constants/bookContent';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const bookRef = useRef(null);

  const handleChapterSelect = (chapter: number) => {
    setCurrentChapter(chapter);
    if (bookRef.current) {
      (bookRef.current as any).pageFlip().flip((chapter - 1) * 2);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-1/4 p-4 border-r border-border">
        <Navigation chapters={bookContent} onChapterSelect={handleChapterSelect} />
      </div>
      <div className="w-3/4 p-4 flex justify-center items-center">
        <Book content={bookContent} ref={bookRef} />
      </div>
    </div>
  );
}