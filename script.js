const postsContainer = document.getElementById("posts-container");
const loader = document.querySelector(".loader");
const searchInput = document.getElementById("filter");

let skip = 0;
let limit = 5;

// For fetching the posts - Returns an array of posts
const fetchPosts = async () => {
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();

  return data.posts;
};

// Fetch and render posts - return nothing
const showPosts = async () => {
  const posts = await fetchPosts();

  posts.forEach((post) => {
    const postDiv = document.createElement("div");

    postDiv.classList.add("post");

    postDiv.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
        `;
    postsContainer.appendChild(postDiv);
  });
};

showPosts();

// Showing the loader spinner
const showLoader = () => {
  loader.classList.add("show");

  skip += 5;
  showPosts();

  setTimeout(() => {
    loader.classList.remove("show");
  }, 500);
};

// To check whether user scrolled to the bottom of the page
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollHeight - Math.floor(scrollTop) === clientHeight) {
    console.log("Page bottom");
    showLoader();
  }
});

const searchFilter = (term) => {
  console.log(term);

  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText;
    const body = post.querySelector(".post-body").innerText;

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      //show me post if true
      post.style.display = "block";
    } else {
      // hide post if not true
      post.style.display = "none";
    }
  });
};

searchInput.addEventListener("input", (event) => {
  searchFilter(event.target.value);
});
