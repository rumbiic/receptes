// Add your recipes here
const recipes = [
    { title: 'Rīsi ar pupiņu-kukurūzas mērci', ingredients: ['Rīsi 1 paciņa', 'Pupiņas 1 bundža', 'Kukurūza 1 maza bundža', 'Tomātu mērce 1/2 Spilva', 'Šampinjoni 200g'], steps: ['Liekam vārīties rīsus sālsūdenī', 'Uz pannas apcepam sagrieztus šampinjonus', 'Pievienojam pupiņas, kukurūzu un nedaudz apcepjam', 'Pievienojam tomātu mērci', 'Kad rīsi gatavi, pasniedzam'] },
    { title: 'Pelmeņi ar sinepju-etiķa mērci', ingredients: ['Pelmeņi 1 paka', 'Sinepes bišķi', 'Etiķis bišķi'], steps: ['Uzvārām pelmeņus', 'Pēc garšas sajaucam sinepes ar etiķi'] },
    // Add more recipes as needed
];

function generateRecipe() {
    const ingredient = document.getElementById("ingredient").value.toLowerCase();

    // Filter recipes based on category and ingredient
    const filteredRecipes = recipes.filter(recipe => 
        (ingredient === '' || recipe.ingredients.some(i => i.toLowerCase().includes(ingredient)))
    );

    if (filteredRecipes.length > 0) {
        // Pick a random recipe from the filtered list
        const randomRecipe = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];

        // Display the recipe details
        document.getElementById("result").innerHTML = `
            <h2>${randomRecipe.title}</h2>
            <p>Sastāvdaļas: ${randomRecipe.ingredients.join(', ')}</p>
            <p>Soļi: ${randomRecipe.steps.join(', ')}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "Tādu recepšu vēl nav.";
    }
}

function addRecipe(event) {
    event.preventDefault();

    const newTitle = document.getElementById("new-title").value;
    const newIngredients = document.getElementById("new-ingredients").value.split(',').map(i => i.trim());
    const newSteps = document.getElementById("new-steps").value.split(',').map(s => s.trim());

    // Validate inputs
    if (!newTitle || newIngredients.length === 0 || newSteps.length === 0) {
        alert("Aizpildi visus laukus");
        return;
    }

    // Add the new recipe to the recipes array
    recipes.push({
        title: newTitle,
        ingredients: newIngredients,
        steps: newSteps
    });

    // Clear the form inputs
    document.getElementById("new-title").value = '';
    document.getElementById("new-ingredients").value = '';
    document.getElementById("new-steps").value = '';

    alert("Recepte veiksmīgi pievienota!");
}
