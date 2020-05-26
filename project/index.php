<?php
$pageTitle = 'Home';

include('includes/header.php');
?>
<div class="container">
<div class="row d-flex justify-content-center py-5">
    <img src="https://i.pinimg.com/originals/dd/af/7d/ddaf7d159790dbc7523f31ee5f0eeb21.jpg" width="300px">
</div>

<div class="section">
<input id="search"><button id="getRecipe">Get Recipes</button>
    <div id="output"></div>
    <a href="" id="sourceLink"></a>
</div>

<button id="getPosts">Get Posts</button>
<div id="jsonphoutput"></div>

<div id="results" class="🐝"></div>
<div id="results2" class="🐝"></div>
</div>
<?php
include('includes/footer.php');
?>
