// Add your recipes here
const recipes = [
    { title: 'Rīsi ar pupiņu-kukurūzas mērci', ingredients: ['Rīsi 1 paciņa', 'Pupiņas 1 bundža', 'Kukurūza 1 maza bundža', 'Tomātu mērce 1/2 Spilva', 'Šampinjoni 200g'], steps: ['Liekam vārīties rīsus sālsūdenī', 'Uz pannas apcepam sagrieztus šampinjonus', 'Pievienojam pupiņas, kukurūzu un nedaudz apcepjam', 'Pievienojam tomātu mērci', 'Kad rīsi gatavi, pasniedzam'] },
    { title: 'Pelmeņi ar sinepju-etiķa mērci', ingredients: ['Pelmeņi 1 paka', 'Sinepes bišķi', 'Etiķis bišķi'], steps: ['Uzvārām pelmeņus', 'Pēc garšas sajaucam sinepes ar etiķi'] },
    // Add more recipes as needed
];

function generateRecipe() {
    const ingredient = document.getElementById("ingredient").value.toLowerCase();

    // Filter recipes based on ingredient
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

    const newTitleElement = document.getElementById("new-title");
    const newIngredientsElement = document.getElementById("new-ingredients");
    const newStepsElement = document.getElementById("new-steps");

    // Validate inputs
    if (!newTitleElement || !newIngredientsElement || !newStepsElement) {
        alert("Aizpildi visus laukus");
        return;
    }

    const newTitle = newTitleElement.value;
    const newIngredients = newIngredientsElement.value.split(',').map(i => i.trim());
    const newSteps = newStepsElement.value.split(',').map(s => s.trim());

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
    newTitleElement.value = '';
    newIngredientsElement.value = '';
    newStepsElement.value = '';

    // Display the updated recipe list
    displayRecipeList();

    alert("Recepte veiksmīgi pievienota!");
}

function addRow(tableId) {
    const table = document.getElementById(tableId);

    if (table) {
        const newRow = table.insertRow(-1);

        if (tableId === 'ingredients-table') {
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            cell1.innerHTML = '<input type="text" class="ingredient-input" placeholder="Sastāvdaļa">';
            cell2.innerHTML = '<input type="text" class="quantity-input" placeholder="Daudzums">';
        } else if (tableId === 'steps-list') {
            const cell = newRow.insertCell(0);
            cell.innerHTML = `<input type="text" class="step-input" placeholder="Soļa apraksts">`;
        }
    }
}