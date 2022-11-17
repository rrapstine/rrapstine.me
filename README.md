
# rrapstine.me

My personal development portfolio. Its primary function is to showcase my abilities to prospective employers. It isn't the prettiest or most flashy, but since I am not a designer, I feel that it performs its function adequately.




## Tech Stack

**Client:** [Astro](https://www.astro.build), TypeScript, SCSS

**Server:** *none*


## FAQ

#### Why Astro?

Back in the day I used to use [Pug](https://www.pugjs.org) for static websites because I like templating. [Astro](https://www.astro.build) provides this and more. It is built on [Vite](https://www.vitejs.dev), so I get realtime browser updates, efficient bundling, tree shaking, and effortless plugin integration, if I decide I need them. Plus, it is lightweight and **FAST**! Honestly, I don't think I will ever develop another static website without it.

#### Why not a library, like React?

Originally, I was going to build this site using [React](https://www.reactjs.org), purely as a way to showcase to prospective employers that I can use the library. After some reflection and deliberation, however, I decided that I would rather showcase my understanding of web development and how that understanding can, and should, affect the chosen tech stack.

In my personal opinion, far too many developers reach for a frontend library when they simply do not need one. Libraries like [React](https://www.reactjs.org), [Vue](https://www.vuejs.org), [Svelte](https://www.svelte.dev), [Angular](https://www.angular.io), [Solid](https://www.solidjs.com)...they're tools. Not every problem is a nail requiring the "React Hammer".

In the case of a static site, like [rrapstine.me](https://www.rrapstine.me), all that I needed from my tech stack was templating, which is accomplished by [Astro](https://www.astro.build) **AND** it only ships the javascript that my page actually needs to function properly. I do not need a full shadow DOM when the only interactivity on my page is an event listener or two.

