<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://sondhayni.me">
    <img alt="s-icon" src="src/images/s-icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  an exploration of identity
</h1>

## 10/01/2020
I updated the styles to be a bit less chaotic, and have tried to meet some accessibility guidelines as well as
I was able, primarily around semantic HTML. also deleted a bunch of stuff I didn't need and made everything
responsive (well some of it still looks not optimal. but it'll do for now.) Also the files and componenents
are more logically organized rather than...whatever was going on before. I forgot images take a while to load,
so I have to use the fancy gatsby pre-loader at some point for all the images I have. TBD.

## 09/30/2020
between yesterday and today I basically redid the whole site with a vague vision of what I wanted it to be.
I completely scrapped a design I had been working on in figma, but that's fine, I actually do like this.
it's bright and kind of fun and a little mixed up, but I think that's the point. I think I will keep this 
single page paradigm, so the only other page will be the blog posts themselves, so setting up gatsby won't have 
been a complete waste.

## 04/08/2020
today we are living dangerously and smashing that deploy button, unfinished pages and all.
the site is semi functional and has some basic info about me and you know what? the code is messy 
at the moment. so what. I'll fix it.

## 🚀 Things that are working
_Configuration side_
  - Basic site + nav works
  - Netlify is configured with this repo
  - Domain has https!

_Site interaction_
  - Everything now lives on just the home page!
  - Projects --> "Assorted works," which has some nice hover state animations and images, and everything that _can_ link out does.
  - I think all the copy is mostly fine. I might update it later. We'll see.
  
## 🧐 What's left?

_Configuration side_
  - [ ] Getting it to deploy correctly (do I need to understand deployment for this??)
  - [ ] uhh how does graphql querying work in gatsby lol
  - [x] Figure out how to host/query/display pdf/files

_Site content_
  - [x] Add all relevant projects + links
  - [ ] Create a basic "show" page for projects that don't link out to places
  - [ ] Create a more case-study specific type show page
  - [ ] **Update resume to be the latest one (once I get feedback)**

_Site interaction_
  - [x] Make all pages responsive
  - [x] Write at least (1) actual blog post (technically it's in my drafts but still)
  - [x] Clean up the file structure
  - [ ] Clean up the styles (oh god)
    ├── i.e. specifically and most importantly `layout.css`. that file is very scary.
  
_Housekeeping_
  - [x] the domain currently points nowhere now...so get the site up and running as an "MVP" stat
  - [ ] Archiving the old site repo, if not deleting it
  - [ ] delete any code within this project I don't understand/don't use

