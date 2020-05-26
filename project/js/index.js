$(document).ready(function(){
    $("#recipeform").submit(function () {
        var search = $("#recipes").val();
        var url = '';
        var img = '';
        var title = '';
    //make ajax request
 $.get('https://api.spoonacular.com/recipes/search?apiKey=d9f6f58a6ad541a187a2c058f3877948&query=', + search,
        // $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){
        //        for (i=0;i<response.items.length;i++){
        function (data) {
            //data holds everything that is returned

            //loop through results
            for(let i = 0; i < data.results.length; i++){
                title = $('<h2 style="padding-top: 40px;">' + data.results[i].title + '</h2>');
                img = $('<img style="height: 300px; padding-bottom: 20px;"><br><a href=' + data.results[i].sourceUrl + '><button class="btn btn-success">Read More</button></a>');
                url = data.baseUri + data.results[i].image;
                img.attr('src',url); //attaches the image url to the image
                title.appendTo("#results2");
                img.appendTo("#results2");
            }
        },
        'json' //return data type you expect
    )
});
});

//
// $(document).ready(function(){
//     $("#bookform").submit(function () {
//         var search = $("#books").val();
//         if (search == ''){
//             alert("Enter a book to search");
//         }else{
//             var url = '';
//             var img = '';
//             var title = '';
//             var author = '';
//
//             $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){
//                 for (i=0;i<response.items.length;i++){
//                     title = $('<h5>' + response.items[i].volumeInfo.title + '</h5>');
//                     author = $('<h5>' + response.items[i].volumeInfo.authors + '</h5>');
//                     img = $('<img class="card"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button class="btn">Read More</button></a>');
//                     url = response.items[i].volumeInfo.imageLinks.thumbnail;
//                     img.attr('src',url); //attaches the image url to the image
//                     title.appendTo("#result");
//                     author.appendTo("#result");
//                     img.appendTo("#result");
//                 }
//             });
//         }
//         return false;
//     });
// });
