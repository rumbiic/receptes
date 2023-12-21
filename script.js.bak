// Add your recipes here
const recipes = [
    { title: 'Rīsi ar pupiņu-kukurūzas mērci', category: 'Vakariņas', ingredients: ['Rīsi, 1 paciņa', 'Pupiņas, 1 bundža', 'Kukurūza, 1 maza bundža', 'Tomātu mērce, 1/2 Spilva', 'Šampinjoni, 200g'], steps: ['Liekam vārīties rīsus sālsūdenī', 'Uz pannas apcepam sagrieztus šampinjonus', 'Pievienojam pupiņas, kukurūzu un nedaudz apcepjam', 'Pievienojam tomātu mērci', 'Kad rīsi gatavi, pasniedzam'] },
    // Add more recipes as needed
];

function generateRecipe() {
    const category = document.getElementById("category").value;
    const ingredient = document.getElementById("ingredient").value.toLowerCase();

    // Filter recipes based on category and ingredient
    const filteredRecipes = recipes.filter(recipe => 
        (category === 'all' || recipe.category === category) &&
        (ingredient === '' || recipe.ingredients.some(i => i.toLowerCase().includes(ingredient)))
    );

    if (filteredRecipes.length > 0) {
        // Pick a random recipe from the filtered list
        const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];

        // Display the recipe details
        document.getElementById("result").innerHTML = `
            <h2>${randomRecipe.title}</h2>
            <p>Category: ${randomRecipe.category}</p>
            <p>Ingredients: ${randomRecipe.ingredients.join(', ')}</p>
            <p>Steps: ${randomRecipe.steps.join(', ')}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "No matching recipes found.";
    }
}
