// console.log("index connected");
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
     .then(data => displayUsers(data))

}

function displayUsers(data){
    // for(const user of data){
    //     console.log(user.email, user.name);
    // }

    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li =document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    
}