console.log('object');

const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {
    const cardContainer = document.getElementById('meal-container');
    //console.log(cardContainer);
    cardContainer.innerHTML = ''
    meals.forEach(meal => {
        const card = document.createElement('col')
        //console.log(meal);
        card.innerHTML = `
        <div class="card" onClick = "loadDetails(${meal.idMeal})" >
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `
        cardContainer.appendChild(card);
    });
}

const search = () => {
    const searchInputElem = document.getElementById('search-input');
    //console.log(searchInputElem);
    const searchInputValue = searchInputElem.value;
    //console.log(searchInputValue);
    loadMeals(searchInputValue);
    searchInputElem.value = '';
}

const loadDetails = (details) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = (mealdetails) => {
    const detailContainer = document.getElementById('details-holder');
    detailContainer.innerHTML = ''
    const detail = document.createElement('div');
    detail.classList.add('card')
    detail.classList.add('w-25')
    detail.innerHTML =
        `
        <img src="${mealdetails.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${mealdetails.strMeal}</h5>
            <p class="card-text">${mealdetails.strInstructions.slice(0, 200)}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
    detailContainer.appendChild(detail);
}
loadMeals('');