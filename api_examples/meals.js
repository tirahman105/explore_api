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
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

 
loadMeals('chicken');