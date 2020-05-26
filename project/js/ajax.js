function showSuggestion(str) {
    if(str.length == 0){
        document.getElementById('searchOutput').innerHTML = '';
    } else {
    //    ajax request
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){
                document.getElementById('searchOutput').innerHTML = this.responseText;
            }
        }
        //https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
        xmlhttp.open("GET", "suggest.php?q="+str, true);
        xmlhttp.send();
    }
};

