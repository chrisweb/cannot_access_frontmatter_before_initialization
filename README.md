# ReferenceError: Cannot access 'frontmatter' before initialization

Investigating a problem that might be related to remark-mdx-frontmatter (not confirmed yet)

```shell
 ⨯ ReferenceError: Cannot access 'frontmatter' before initialization
    at eval (app\page.mdx:7:11)
    at <unknown> (rsc)/./app/page.mdx (C:\Users\chris\grepos\cannot_access_frontmatter_before_initialization\.next\server\app\page.js:44:1)
    at Function.__webpack_require__ (C:\Users\chris\grepos\cannot_access_frontmatter_before_initialization\.next\server\webpack-runtime.js:33:42) {
  page: '/'
}
```

## reproduction

install the dependencies:

```shell
npm i
```

run the development server:

```shell
npm run dev
```

visit localhost:3000 in your browser