$(document).ready(function(){
    $("#recipesform").submit(function () {
        var search = $("#recipes").val();
        if (search == ""){
            alert("Nothing to search");
        }else{
            var url = "";
            var img = "";
            var title = "";
    //make ajax request
 $.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d9f6f58a6ad541a187a2c058f3877948&ingredients=', + search,
        function (data) { //data holds everything that is returned
            //loop through results
            for(let i = 0; i < data.results.length; i++){
                title = $('<h2 style="padding-top: 40px;">' + data.results[i].title + '</h2>');
                img = $('<img style="height: 300px; padding-bottom: 20px;"><br><a href=' + data.results[i].sourceUrl + '><button class="btn btn-success">Read More</button></a>');
                url = data.baseUri + data.results[i].image;
                img.attr('src',url); //attaches the image url to the image
                title.appendTo("#recipeResults");
                img.appendTo("#recipeResults");
                }
            });
        }
        return false;
    });
});
