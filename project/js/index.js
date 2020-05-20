document.getElementById('getRecipes').addEventListener('click', getRecipes);

function getRecipes(){
    // fetch('https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948')
    //     .then((res) => res.json())
    //     .then((data) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
            let output = '<h2>Recipes</h2>';
            data.forEach(function(recipe){
                console.log('output');
                output += `
                    <h6>ID: ${recipe.id}</h6>
                    <h3>Title: ${recipe.title}</h3>
                `;
            });
            document.getElementById('output').innerHTML = output;
        // })
}

// });
