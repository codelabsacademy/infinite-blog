let compID = document.getElementById("id")
let compTitle = document.getElementById("title")
let compText = document.getElementById("text")
let data;
let postContainer = document.getElementById("posts")
let loader = document.getElementById("loader")
let search = document.getElementById("search")

let skip = 0;
let limit = 5;
const fetchComp = async () => {
    
    try {
        let res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
        let info = await res.json();
        //console.log(info)
        data = info.posts
        //console.log(data)
        data.forEach(data => {
            const component = document.createElement("div")
            component.classList.add("component") 
            component.innerHTML = `
            <div>
            <p class="id" id="id">${data.id}</p>
            <p class="title" id="title">${data.title}</p>
    
            </div>
            <p id="text">${data.body}</p>`
            
            postContainer.appendChild(component)
            
        });
    } catch (error) {
        console.log(error)
    }
}
 
fetchComp()


window.addEventListener('scroll',(event)=>{
   let  scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if((scrollHeight - Math.floor(scrollTop)) === clientHeight){
        console.log("win")
        loader.style.display = "block";
        skip += 5;
        fetchComp()
    }
    }) 


const searchFilter = (term) => {
    console.log(term)
    const posts = document.querySelectorAll(".component")
    //console.log(posts)
    posts.forEach(post => {
        const title = post.querySelector("#title").innerText
        //console.log(title)
        const body = post.querySelector("#text").innerText
        //console.log(body)

        if((title.indexOf(term) > -1 ) || (body.indexOf(term) > -1) ){
            console.log(title.indexOf(term))
            post.style.backgroundColor = "#F7C331"
        }
        else{
            post.style.backgroundColor = "#DCC7AA"
        }
    })
}

search.addEventListener('input', (e) => {
    searchFilter(e.target.value)
})