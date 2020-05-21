document.getElementById('getRecipes').addEventListener('click', getRecipes);


function getInfo(id){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
//     fetch('https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948')
//         .then((res) => res.json())
//         .then((data) => {
//             let output = '<h2>Recipes</h2>';
//             data.forEach(function(recipe){
//                 console.log('output');
//                 output += `
//                     <h6>ID: ${recipe.id}</h6>
//                     <h3>Title: ${recipe.title}</h3>
//                     <a href="" id="soucreLink"></a>
//                 `;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
$.ajax({
    url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=d9f6f58a6ad541a187a2c058f3877948",
    success: function (res) {
        document.getElementById("sourceLink").innerHTML=res.sourceUrl
        document.getElementById("sourceLink").href=res.sourceUrl
        }
    });
}

function getRecipes(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948&number=1&query="+q,
        success: function (res) {
            document.getElementById("output").innerHTML='<h1>'+res.results[0].title+'</h1><br>'
            '<img src="'+res.baseUri+res.results[0].image+'" width="400"/>'
            '<br> ready in' +res.results.readyInMinutes+" minutes" +getInfo(res.results[0].id)
        }
    });
}
