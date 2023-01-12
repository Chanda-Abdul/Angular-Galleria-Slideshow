# Frontend Mentor - Galleria slideshow site solution
![Design preview for the Galleria slideshow site coding challenge](/src/assets/images/preview.jpg)


This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->
# Overview

## The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
  - [x] Mobile @ <b>375px</b>
  - [x] Tablet @  <b>768px</b>
  - [x] Desktop @ <b>1440px</b>
- [x] See hover states for all interactive elements on the page
<!-- 
-
- [ ]  router by /:id
- [ ] progress bar
- [ ] pause button?
- [ ] footer stickiness/height
- *Observable*
  
  - start/stop/pause/next/prev
  -show preview

- *Service*
  

  - pause show
  - next slide
  - prev slide
  - show preview?

 -->
- [ ] Navigate the slideshow and view each painting in a lightbox
<!-- * Dynamic Component for this * -->
- [ ] Deploy

## Screenshot
### Mobile View @ `375px`
<!-- ![](./screenshot.jpg) -->
### Tablet View @ `768px`
### Desktop View @ `1440px`

## Links
- Solution URL: [Click for Solution](https://github.com/Chanda-Abdul/Angular-Galleria-Slideshow)
- Live Site URL: 
<!-- 
[Click for Live Site](https://your-live-site-url.com) -->

## My process
...
### Project Structure

- `/` Home Component
  - masonry gallery view of all available images for slideshow
- `/slide/:id` SlideDetail Component
  - select one image from gallery view to see slide details, but slideshow does not start
- `/slideshow` Slideshow Component
  - SlideDetail Component, starting with first slide
- `/slideshow/:id` Slideshow Component
  - SlideDetail Component, starting with slide `:id`

### Approach
### Built with


- <b>[Angular](https://angular.io/)</b> (<b>JavaScript</b> framework)
  - [<b>RxJs</b>(Reactive Extensions for JavaScript)](https://rxjs.dev/guide/overview) -  a library for composing async and event-based programs by using observable sequences(think of <b>RxJS</b> as <b>[Lodash](https://lodash.com/)</b> for events.) 
   - [Angular Material](https://material.angular.io/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [JavaScript](https://www.javascript.com/)
- <b>[Figma](https://www.figma.com/)</b> collaborative web application for interface design.
- <b>[Sass](https://sass-lang.com/)/CSS</b> custom properties
  - Mobile-first workflow
  - Flexbox
  - CSS Grid
- Semantic HTML5 markup


## What I learned
- Observables❗️
- Masonry Layouts 🤦🏽‍♀️

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below: -->

<!-- ```html
<h1>Some HTML code I'm proud of</h1>
``` -->

<!-- ```css
.proud-of-this-css {
  color: papayawhip;
}
``` -->

<!-- ```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
``` -->


## Continued development
### Features to Add
➕ <b> ⏸ button to pause slideshow</b>

➕ <b> Animations</b>
<!-- - [ ] Add Cool Animations -->
<!-- // On click
// Navigate to: "Desktop - Gallery 1";
// Animate: Dissolve;
animation-timing-function: linear;
animation-duration: 150ms; -->

➕ <b> Option to view/add more artwork</b>
- [ ] allow user to view more artwork by incorprating an API like [Artsy](https://developers.artsy.net/) and categories/collections selection?
<!-- fake backend?
service, get more art?
 -->
➕ <b> Infinite Scroll</b>
- [ ] after adding [Artsy (/genes)](https://developers.artsy.net/v2/docs/genes) API, add infinite scroll?  
(✨[Implementing Infinite Scrolling Using Angular](https://levelup.gitconnected.com/implementing-infinite-scrolling-using-angular-82c66f27e817))

➕ <b> Update masonry layout</b>
- [ ] change from vertical to horizontal masonry layout, using a different library?

➕ <b> Add landing page?</b>
- [ ] maybe combine this project with [Frontend Mentor - Modern Art Gallery Website Solution](https://github.com/Chanda-Abdul/Modern-Art-Gallery-Website). Create some kind of "view virtual gallery" option



## Useful resources
- [What is Observable | Observables | Angular 12+](https://youtu.be/V4iMyVnQPqM) 📽 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Unsubscribe to an Observable | Observables | Angular 12+](https://youtu.be/8j5kvLddNwM) 📽 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Flexbox or grid - How to decide?](https://youtu.be/3elGSZSWTbM) 📽 - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Material Design Image Lists for Masonry Layout](https://material.io/components/image-lists) 💁🏽‍♀️ 🧱 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [RxJS in Angular: Reactive Development
by Deborah Kurata (PluralSight Course)](https://www.pluralsight.com/courses/rxjs-angular-reactive-development) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Learn RxJs](https://www.learnrxjs.io/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author
- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)


<!-- ## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
 -->
