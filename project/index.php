<?php
$pageTitle = 'Home';

include('includes/header.php');
?>
<div class="container">
    <div id="searchRecipes">
        <form id="recipesform">
            <div class="input-field">
<!--                <label for="searchRecipes">Search Recipes</label>-->
                <h1>Search Recipes</h1>
                <input type="search" id="recipes">
            </div>
            <button type="button" class="btn btn-info">Search</button>
        </form>
    </div>
    <div id="results2"></div>
</div>

<!--<div id="results2"></div>-->
<!--</div>-->
<?php
include('includes/footer.php');
?>
