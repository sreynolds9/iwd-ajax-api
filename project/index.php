<?php
$pageTitle = 'Home';

include('includes/header.php');
?>
<div class="container">
    <div id="searchRecipes">
        <form id="recipesform">
            <div class="input-field">
                <h1 class="py-5">Search Recipes</h1>
                <input class="search-field p-2" type="search" id="recipes" placeholder="Search Recipes...">
            </div>
            <button class="btn btn-info py-3 px-5 mt-4">Search</button>
        </form>
    </div>
    <div id="recipeResults"></div>
</div>
<?php
include('includes/footer.php');
?>
