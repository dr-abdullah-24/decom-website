import React, { useState } from 'react';
import { Blog } from './blog_explorer';
import { FiCopy as Copy, FiCheck as Check } from 'react-icons/fi';

type ContentBlock = {
  type: 'text' | 'image' | 'heading' | 'code';
  content: string;
  alt?: string;
  caption?: string;
  level?: number;
  language?: string;
  title?: string;
};

interface BlogDisplayProps {
  blog: Blog;
  onBackClick: () => void;
}

// Image component with loading states and error handling
const BlogImage: React.FC<{ 
  src: string; 
  alt: string; 
  caption?: string; 
  className?: string;
}> = ({ src, alt, caption, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
          </div>
        )}
        {hasError ? (
          <div className="aspect-[16/9] flex items-center justify-center bg-gray-100 text-gray-500">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Failed to load image</p>
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center font-light italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Code block with copy button
const CodeBlock: React.FC<{ code: string; language?: string; title?: string }> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-lg">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm font-mono border-b border-gray-700 flex justify-between items-center">
          <span>{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs hover:text-green-400"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm">
        <code className={`language-${language || "javascript"}`}>{code}</code>
      </pre>
    </div>
  );
};

// Rich content renderer
const RichContentRenderer: React.FC<{ content: ContentBlock[] }> = ({ content }) => {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p
                key={index}
                className="text-black leading-relaxed mb-6 text-lg font-light whitespace-pre-line"
                style={{ fontFamily: 'Times New Roman, Times, serif' }}
              >
                {block.content}
              </p>
            );
          case 'image':
            return (
              <BlogImage
                key={index}
                src={typeof block.content === 'string' ? block.content : ''}
                alt={block.alt || ''}
                caption={block.caption}
              />
            );
          case 'heading':
            const level = typeof block.level === 'number' && block.level >= 2 && block.level <= 4 ? block.level : 2;
            const HeadingTag = `h${level}` as React.ElementType;
            const headingClasses = {
              2: 'text-3xl font-bold text-gray-900 mt-14 mb-6 tracking-tight',
              3: 'text-2xl font-bold text-gray-900 mt-12 mb-4 tracking-tight',
              4: 'text-xl font-bold text-gray-900 mt-10 mb-3 tracking-tight'
            };
            return React.createElement(
              HeadingTag,
              {
                key: index,
                className: headingClasses[level as keyof typeof headingClasses] || headingClasses[2]
              },
              block.content
            );
          case 'code':
            return (
              <CodeBlock
                key={index}
                code={block.content}
                language={block.language}
                title={block.title}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

const BlogDisplay: React.FC<BlogDisplayProps> = ({ blog, onBackClick }) => {
  return (
    <div className="min-h-screen font-[Times New Roman]" style={{backgroundColor: '#DADADA'}}>
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm" style={{backgroundColor: '#DADADA'}}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackClick}
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="font-medium text-sm">Back to articles</span>
            </button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Image */}
        <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-sm border border-gray-100">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
            {blog.title}
          </h1>

          <div className="flex items-center space-x-6 pb-8 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white font-medium">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author}</p>
                <p className="text-gray-600">{blog.publishDate} · {blog.readTime}</p>
              </div>
            </div>
            
            <div className="flex space-x-4 ml-auto">
              <button 
                onClick={() => {
                  const fullUrl = `${window.location.origin}/blogs/${blog.slug}`;
                  navigator.clipboard.writeText(fullUrl);
                }}
                className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
                title="Copy link to clipboard"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        {blog.richContent ? (
          <RichContentRenderer content={blog.richContent} />
        ) : (
          <div className="prose prose-lg prose-gray max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-black font-bold leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-medium text-sm">Share:</span>
              <button 
                onClick={() => {
                  const fullUrl = `${window.location.origin}/blogs/${blog.slug}`;
                  navigator.clipboard.writeText(fullUrl);
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Copy Link
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDisplay;
