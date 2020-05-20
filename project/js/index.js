document.getElementById('getRecipes').addEventListener('click', getRecipes);

function getRecipes(){
    fetch('https://api.spoonacular.com/recipes/search')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Recipes</h2>';
            data.forEach(function(recipe){
                output += `
                    <h6>ID: ${recipe.id}</h6>
                    <h3>Title: ${recipe.title}</h3>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
