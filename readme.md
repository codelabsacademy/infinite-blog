# Code Labs Academy

### JS Project Specifications and Hints

1. Create UI & custom CSS loader animation

  - Check example-UI for inspiration
  - Use this resource for CSS loaders:
    - https://cssloaders.github.io/
  - Choose any color or typography you see fit

2. Fetch initial posts from API and display
  - API endpoint for posts: https://dummyjson.com/posts
  - You can pass "limit" and "skip" params to limit and skip the results for pagination.
    - `https://dummyjson.com/posts?limit=10&skip=10`: this will limit the response to 10 posts per request and skip the first 10 posts
    - `https://dummyjson.com/posts?limit=10&skip=0`: this will limit the response to 10 posts per request and skip 0 posts (10 first posts only ;) )
  - Posts must be rendered correctly on the UI
    - Use `posts.forEach()` method to loop through each post, create UI for each post and render it
    - 
3. Scroll down, show loader and fetch next set of posts
   - When you scroll to the bottom of the page a loader spinner should appear
   - The next page of posts (5 or 10 per page, your preference...) get fetched
   - Fetched posts gets rendered on the UI  
4. Add filtering for fetched posts
   - There must be an input element which the user can use to filter posts by search term (text)

### Useful Hints:

#### For creating HTML elements using JS (rendering posts)
* `const post = document.createElement('div')` creates an empty div Node that can be appended to any other HTML Element, like this: `postsContainer.appendChild(post)`  

#### For adding or removing classes using JS (loader spinner)
* Suppose we are selecting this element: 
`const loading = document.querySelector('.loader');`
then we can add or remove any class to this element to it:
`loading.classList.add('show')` to add a `show` CSS class
`loading.classList.remove('show')` to remove a `show` CSS class

#### For fitlering your fetched posts (searching by term):
* Suppose we have this code: 
```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

console.log(paragraph.indexOf('dog')) // this returns 40

console.log(paragraph.indexOf('bicycle')) // this returns -1
```
We can give the `indexOf()` method a substring to search for from the entire calling string `paragraph` from our example
  * If the substring is found it returns the index of the first occurence of the specified substring `dog` in our example
  * If the substring is not found it returns `-1`
  * you can search through your posts body using a condition that check's whether the term is there or not: `body.indexOf(term) > -1`     

#### For 'scroll' event and tracking scroll position: 
* `ELEMENT.clientHeight` is the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).
More: https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight

* `ELEMENT.scrollTop` property gets or sets the number of pixels that an element's content is scrolled vertically.
An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.
More: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop

* `ELEMENT.scrollHeight` read-only property is a measurement of the height of an element's content, including content not visible on the screen due to overflow.
The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar. The height is measured in the same way as clientHeight: it includes the element's padding, but not its border, margin or horizontal scrollbar (if present). It can also include the height of pseudo-elements such as `::before` or `::after`.
More: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight