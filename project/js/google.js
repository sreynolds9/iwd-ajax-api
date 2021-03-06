// $(document).ready(function(){
//     //make ajax request
//     $.get(
//         'https://www.googleapis.com/books/v1/volumes', //endpoint
//         {q: '🐝 subject', maxResults:30},
//         function (data) {
//             //data holds everything that is returned
//
//             //loop through results
//             for(let i = 0; i < data.items.length; i++){
//                 $('<h3>').html(data.items[i].volumeInfo.title).appendTo('#results');
//                 $('<p>').html(data.items[i].volumeInfo.authors.join(', ')).appendTo('#results');
//                 $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail).appendTo('#results');
//             }
//         },
//         'json' //return data type you expect
//     )
// });

$(document).ready(function(){
    $("#bookform").submit(function () {
        var search = $("#books").val();
        if (search == ""){
            alert("Nothing to search");
        }else{
            var url = "";
            var img = "";
            var title = "";
            var author = "";

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){

                $("#result").html(''); //clear results on new search
                for (i=0;i<response.items.length;i++){
                    title = $('<h3 class="pt-5">' + response.items[i].volumeInfo.title + '</h3>');
                    author = $('<h5>Author(s): ' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img style="width: 250px"><br><a href=' + response.items[i].volumeInfo.infoLink + ' target="_blank"><button class="btn btn-secondary btn-sm my-5">Read More</button></a>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src',url);//attaches the image url to the image
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');
                }
            });
        }
        return false;
    });
});

