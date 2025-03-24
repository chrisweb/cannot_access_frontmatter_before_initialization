import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMDX = createMDX({
    // Add markdown plugins here, if needed
    options: {
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, {name: 'frontmatter'}]],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
    /* config options here */
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['tsx', 'mdx'],
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
