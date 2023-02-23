// console.log('app connected');

function loadData2(){
    const url = 'https://jsonplaceholder.typicode.com/todos/101'
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}