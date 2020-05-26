$(document).ready(function(){
    //make ajax request
    $.get(
        'https://www.googleapis.com/books/v1/volumes', //endpoint
        {q: '🐝 intitle', maxResults:30},
        function (data) {
            //data holds everything that is returned

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
