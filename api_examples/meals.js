const loadMeals = (searchText)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals)
    // step 1 : container element
    const mealsContainer = document.getElementById('meals-container');
   mealsContainer.innerText = '';
    meals.forEach(meal =>{
        console.log(meal)
        // tp 2: crete child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')

        // step 3 :  set content of child 
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          
          <!-- Button trigger modal -->
<button onclick ="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">
  See details</button>
          </div>
      </div>
        `;



        // step 4: append child

        mealsContainer.appendChild(mealDiv);

    })

   
}
const searchMeals = () =>{
  const searchText = document.getElementById('serach-field').value;
  console.log(searchText);
  loadMeals(searchText);
}

const loadMealDetails = idMeal => {
  console.log(idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeaDetails(data.meals[0]));
}
const displayMeaDetails = meal => {
  document.getElementById('mealsDetailsModalLabel').innerText = meal.strMeal;
  const mealsDetails = document.getElementById('mealsDetailsBody');
  mealsDetails.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <h5 class="card-title mt-3">Category : ${meal.strCategory}</h5>
  <p class="card-text">${meal.strInstructions}</p>
  <a class="btn btn-primary mt-3" target="_blank" href="${meal.strYoutube}">See Recipe Video</a>
  `
}

 
loadMeals('chicken');