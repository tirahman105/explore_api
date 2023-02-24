const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=male')
    .then(res => res.json())
    .then(data=> displayUser(data))
}

const displayUser = user =>{

    const name = document.getElementById('name');
    name.innerText= user.results[0].name.first + ' '+user.results[0].name.last;
    const genderTag = document.getElementById('gender');
    genderTag.innerText= user.results[0].gender;

    const image = document.getElementById('profile-pic')
    image.src= user.results[0].picture.thumbnail;
    console.log(user.results[0].picture.medium);
}
loadUser();