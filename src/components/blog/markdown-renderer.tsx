'use client';

import React, { useEffect, useState } from 'react';
import streamdown from 'streamdown';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    // streamdown is a lightweight parser. 
    // Depending on its API, it might be synchronous or asynchronous.
    // Based on research, it's often used for streaming but can be used for strings.
    try {
      const result = streamdown(content);
      setHtml(result);
    } catch (error) {
      console.error('Error rendering markdown:', error);
      setHtml('<p>Error rendering content.</p>');
    }
  }, [content]);

  return (
    <div 
      className="prose prose-invert max-w-none 
                 prose-headings:text-white prose-p:text-zinc-400 
                 prose-strong:text-white prose-code:text-zinc-300
                 prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-800"
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
};
