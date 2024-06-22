# Filipchik Studios Website Redesign

<img width="1920" alt="Preview Image" src="/public/images/seo_image.png">


## Introduction

This is my first project in Astro, and I followed my own design to create it. This project includes technologies such as Astro, React, Tailwind, and GSAP. Additionally, this is the first project I have done with GSAP animations.

## Why I Decided to Do This Project

I wanted to experiment with taking someones website and turning it into more visually appealing product. The goal was to leave the text as original as possible and update the text hierarchy, visuals, introduce more vibrant colors and animations to make the website pop out more.

I found a website for [Filipchik Studios](https://filipchikstudios.com/), an agency that helps create virtual spaces and metaverses, which should be an interesting marketing strategy for many large companies.

I thought that I can help this company out, by creating a responsive and modern website, which should grab attention of potential clients. I did not change the identity elements of this company. The colors, the font, the logo were all taken from the original website.

I took a liberty to restructure the content of the website, removing some repretitive and irrelevant information.

## Project Link
Here is the final product:

[Filipchik Studios Website Redesign](https://filipchik-studio-website-redesign.vercel.app/)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
│       └── careers.astro
│       └── online/
│           └── podcast.astro
│           └── talks.astro
│       └── projects/
│           └── aviasales.astro
│           └── bfd.astro
│           └── roblox.astro
│       └── 404.astro
└── package.json
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/ directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

