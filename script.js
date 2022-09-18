let skip=0;
let limit=5;

link = `https://dummyjson.com/posts?skip=${skip}&limit=${limit}` 

const fetchPosts = async () => {
    const res = await fetch(link)
    const posts = await res.json()
    console.log(posts.posts)
    return posts.posts
  }
  const postsContainre = document.getElementById('posts-container')
  
  const renderPosts = async () => {
    const fetchedPostes = await fetchPosts()
    console.log(fetchedPostes)
    fetchedPostes.forEach(post => {
    const newDiv = document.createElement('div')
    newDiv.innerHTML=
      `<div class="post">
        <h3>${post.title} </h3>
        <p>${post.body}</p>
      </div>`
    postsContainre.appendChild(newDiv)
    
  });
  }
  renderPosts()

  window.addEventListener('scroll',()=>{
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
    if ((scrollTop+clientHeight)===scrollHeight) {
      skip += 5;
      renderPosts()
    }
  });

