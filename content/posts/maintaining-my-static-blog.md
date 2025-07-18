+++
title = "maintaining my statically generated tech blog"
date = "2022-03-14T01:47:16+03:30"
summary = "How I manage to maintain this blog using Notion, Next.js and Github Pages"
tags = ["frontend"]
show = true
+++


  
### My story

I always wanted to have a personal blog, [but never actually put the time in to get it done](/blog/developers-productivty-and-procrastination). 
Creating meaningful blog posts is not an easy task, might as well have systems and tools in place helping us do it faster and easier.

I tried many different ways and flavors of blogging. Wordpress was heavyweight and clunky, Medium or other micro-blogging services did not just feel _right_ to me. Naturally as a web developer, I wanted to have something of my own and make it from scratch.

### Github pages
I made a repository on Github to host all of the code needed for the blog. Then used the Github pages free service to serve the HTML files available on the repo. 

As a cherry on top, you can use Cloudflare's free services to point the `YOUR_USR.github.io/YOUR_REPO` to your custom domain `YOUR_DOMAIN.co.uk` for example.

That's exactly what I did to `Mahdikarimi.com` and pointed it to `mhdi-kr.github.io/personal-blog` using Cloudflare and my domain provider settings.

### Next.js, Filesystems and Markdown parsers

This website was built upon the Next.js React framework. I've developed React components layout and stylings. The actual content of the blog posts are written in Markdown format in a specific directory inside the repo. 

Next.js allows you to acess filesystems in serverside configuration using the `fs` object available in Node js.
The `getStaticProps` function is called by Next.js when the page is first loaded. It is then used to fetch the markdown content using Nodejs filesystem.

After fetching the actual content as strings we need to parse it using a Markdown parser and pass it onto the components as state props for react to do its magic. 

### Sky is the limit!

You can do all sorts of cool things with Markdown files! You can hide any metadata inside it files called _Frontmatter_. Your markdown parser will provide it to you and you can use it to embed dates, tags or arbitrary static state in your blog posts! 

Using that state in React, you can conditionally hide/show your posts, render tags or dates, etc! Sky's the limit.
  
### Generating static HTML, CSS and JS files

By using the `next export` command in the terminal, we can render all the HTML, CSS and JS files we need for the website to be up and running without a runtime in the `/out` directory. This is great because this is all we need for Github pages!

  
### Publishing changes without hassle
Let's publish the generated files to Github Pages. I use the `gh-pages` CLI utility,[ available on NPM](https://www.npmjs.com/package/gh-pages), to publish the static files to a specific branch.

  

Github automatically detects push-events to this branch and then deploys my newly created HTML and assets files to the web!


  

### All in one go!

  

You can aggergate all the steps I talked about in one single command, or even register it as a NPM command to run every time you want to publish your blog.

  

```Bash

$ yarn build && yarn export && touch out/.nojekyll && gh-pages -t -d out

```

### Handling comments

Any form of content creation requires a feedback loop to bring value to its users as well as authors.

The problem with Github pages for handling comments is that everything is static. You don't have access to a database on it to be able to do CRUD operations. 

Of course there are workarounds for those kinds of tasks but I wanted something elegant and fast. This is where utterances comes into play. 

With utterances Github app you can have fully functional comment section in your posts! It uses Github issues under the hood and I could easily integrated this with React.

Make sure you [checkout their documentation for more details!](https://utteranc.es/)