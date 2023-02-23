function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


/* how to add any element ?

1. get the container element where you ant to add new element
2. create child element
3. set innertext or innerHTML
4. append child 
*/

function displayPost(posts){

    const postContainer = document.getElementById('post-container');
    for (const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h1> Post Title : ${post.title}</h1>
        <h3>Author ID : ${post.id} </h3>
        <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
        console.log(post)
    }
    
}
loadPosts();