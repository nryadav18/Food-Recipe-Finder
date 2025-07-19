const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('A_Search_Suggestions');
const meal_search_box = document.getElementsByClassName('meal-search-box');



searchBtn.addEventListener('click', getMealList);
searchSuggestions.addEventListener('click', display);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

async function showSuggestions() {
    let searchTerm = searchInput.value.trim();
    if (searchTerm.length === 0) {
        searchSuggestions.style.display = "none";
        return;
    }
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();

        searchSuggestions.innerHTML = "";
        
        if (data.meals) {
            data.meals.forEach(meal => {
                let li = document.createElement('li');
                li.textContent = meal.strMeal;
                li.dataset.mealId = meal.idMeal;
                searchSuggestions.appendChild(li);
            });
            searchSuggestions.style.display = "flex";
        } else {
            searchSuggestions.innerHTML = "<li>No suggestions found</li>";
            searchSuggestions.style.display = "block";
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
}

async function display(event) {
    let mealId;
    if(searchInput.value.trim().length === 0) return;
    if (event.target.tagName === 'LI') {
        mealId = event.target.dataset.mealId;
    } else {
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length == 0) return;
        
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();
            
            if (data.meals && data.meals.length > 0) {
                mealId = data.meals[0].idMeal;
            } else {
                alert('No meal found!');
                return;
            }
        } catch (error) {
            console.error('Error fetching meal:', error);
            return;
        }
    }
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        
        if (data.meals) {
            displayMealList(data.meals);
        }
    } catch (error) {
        console.error('Error fetching meal details:', error);
    }
    
}

async function getMealList() {
    let searchTerm = searchInput.value.trim();
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        displayMealList(data.meals);
    } catch (error) {
        console.error('Error fetching meal list:', error);
    }
}

function displayMealList(meals) {
    let html = "";
    if (meals) {
        meals.forEach(meal => {
            html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
        });
        mealList.classList.remove('notFound');
    } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
    }
    mealList.innerHTML = html;
    searchSuggestions.style.display = "none";
    mealList.style.display = "flex";
}

async function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        let mealId = mealItem.dataset.id;
        
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            mealRecipeModal(data.meals);
        } catch (error) {
            console.error('Error fetching meal recipe:', error);
        }
    }
}

function mealRecipeModal(meal) {
    meal = meal[0];
    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" allowfullscreen></iframe>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
