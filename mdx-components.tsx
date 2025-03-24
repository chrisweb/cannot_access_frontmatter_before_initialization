import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use the custom components provided by the user, or these defaults
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    a: ({ href, children }) => {
      if (href?.startsWith('/')) {
        return <Link href={href}>{children}</Link>;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    },
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ''}
        width={700}
        height={400}
        className="my-4 rounded-lg"
        style={{ objectFit: 'contain' }}
      />
    ),
    // You can add more custom components here
    ...components,
  };
}