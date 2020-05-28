<?php
$pageTitle = 'Home';

include( 'includes/header.php' );
?>
<div class="container">
    <div class="row">
        <div class="col-6">
            <div id="searchRecipes">
                <form id="recipesform">
                    <div class="input-field">
                        <h1 class="py-5">Search by Recipe</h1>
                        <input class="search-field p-2" type="search" id="recipes" onfocus="this.value=''"
                               placeholder="Search Recipes...">
                    </div>
                    <button class="btn btn-success py-3 px-5 mt-4">Search Recipes</button>
                </form>
            </div>
            <div id="recipeResults"></div>
        </div>
        <div class="col-6">
            <div id="searchIngredients">
                <form id="ingredientsform">
                    <div class="input-field">
                        <h1 class="py-5">Search by Ingredient</h1>
                        <input class="search-field p-2" type="search" id="ingredients" onfocus="this.value=''"
                               placeholder="Search Ingredients...">
                    </div>
                    <button class="btn btn-success py-3 px-5 mt-4">Search Ingredients</button>
                </form>
            </div>
            <div id="ingredientResults"></div>
        </div>
    </div>
</div>
<?php
include( 'includes/footer.php' );
?>
