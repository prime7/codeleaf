'use client';

import { Streamdown } from 'streamdown';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-green max-w-none">
      <Streamdown>{content}</Streamdown>
    </div>
  );
}
