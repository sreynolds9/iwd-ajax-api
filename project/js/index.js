document.getElementById('getPosts').addEventListener('click', getPosts);

function getInfo(id){
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
            // '<img src="'+res.baseUri+res.results[0].image+'" width="400"/>'
            // '<br> ready in' +res.results.readyInMinutes+" minutes"
            +getInfo(res.results[0].id)
        }
    });
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
    // fetch('https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948')
    //     .then((res) => res.json())
    //     .then((data) => {
            let output = '<h2>Posts</h2>';
            data.forEach(function(post){
                console.log('output');
                output += `
                    <h3>Title: ${post.title}</h3>
                    <p>Post: ${post.body}</p>
                `;
            });
            document.getElementById('jsonphoutput').innerHTML = output;
        }

$(document).ready(function(){
    //make ajax request
    //$.ajax()
    //$.post()
    $.get(
        'https://www.googleapis.com/books/v1/volumes', //endpoint
        {q: '🐝 intitle', maxResults:30},
        function (data) {
            //data holds everything that is returned
            //check to see if the response is good

            //loop through results
            for(let i = 0; i < data.items.length; i++){
                $('<h3>').html(data.items[i].volumeInfo.title).appendTo('#results');
                $('<p>').html(data.items[i].volumeInfo.authors.join(', ')).appendTo('#results');
                $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail).appendTo('#results');
            }
        },
        'json' //return data type you expect
    )
});

$(document).ready(function(){
    //make ajax request
    //$.ajax()
    //$.post()
    $.get(
        'https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948', //endpoint
        // {q: '🐝 intitle', maxResults:30},
        {q: '', maxResults:5},
        function (data) {
            //data holds everything that is returned
            for(let i = 0; i < data.results.length; i++){
                $('<h3>').html(data.results[i].title).appendTo('#results2');

                $('<p>').html(data.results[i].readyInMinutes).appendTo('#results');
                $('<p>').html(data.results[i].servings).appendTo('#results');
                $('<p>').html(data.results[i].readyInMinutes).appendTo('#results');
                $('<img>').attr('src', data.results[i].image).appendTo('#results2');
            }
        },
        'json' //return data type you expect
    )
});
