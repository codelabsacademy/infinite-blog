let skip=0;
let limit=5;

const fetchPosts = async () => {
    const res = await fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}` )
    const posts = await res.json()
    console.log(posts.posts)
    return posts.posts
  }
  const postsContainer = document.getElementById('posts-container')
  const loader = document.getElementById('loader')
  
  const renderPosts = async () => {
    const fetchedPosts = await fetchPosts()
    console.log(fetchedPosts)
    fetchedPosts.forEach(post => {
      const newDiv = document.createElement('div')
      newDiv.innerHTML=
      `<div class="post">
        <div>
          <h5>${post.id}</h5>
        </div>
        <div>
            <h3>${post.title}</h2>
            <p>${post.body}</p>
        </div>
      </div>
    `
      postsContainer.appendChild(newDiv);
      loader.classList.add('hidden');
    });
  }
  renderPosts()

  window.addEventListener('scroll',()=>{
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
    if ((scrollTop+clientHeight)===scrollHeight) {
      skip += 5;
      loader.classList.remove('hidden');
      renderPosts()
    }
  });

