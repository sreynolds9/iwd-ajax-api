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
    $.get('https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948&number=30&query=' + search,
        function (data) { //data holds everything that is returned
            //loop through results
            $("#recipeResults").html(''); //clear results on new search
            for(let i = 0; i < data.results.length; i++){
                title = $('<h2 style="padding-top: 40px;">' + data.results[i].title + '</h2>');
                img = $('<img style="height: 300px; padding-bottom: 20px;"><br><a href=' + data.results[i].sourceUrl + ' target="_blank"><button class="btn btn-success">Read More</button></a>');
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

$(document).ready(function(){
    $("#ingredientsform").submit(function () {
        var search = $("#ingredients").val();
        if (search == ""){
            alert("Nothing to search");
        }else{
            var url = "";
            var img = "";
            var title = "";
            //make ajax request
                $.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d9f6f58a6ad541a187a2c058f3877948&number=30&ingredients=' + search,
                function (data) {
                    // console.log(data);
                    $("#ingredientResults").html('');
                    for(let i = 0; i < data.length; i++){
                        title = $('<h2 style="padding-top: 40px;">' + data[i].title + '</h2>').appendTo("#ingredientResults");
                        img = $('<img src="'+ data[i].image +'" height="300">').appendTo("#ingredientResults");
                    }
                });
        }
        return false;
    });
});
