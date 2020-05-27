<?php
$pageTitle = 'Books';

include('includes/header.php');
?>
<!--<div class="container">-->
<!--		<div id="results"></div>-->
<!--</div>-->
<div class="container">
    <div id="searchBooks">
        <form id="bookform">
            <div class="input-field">
                <h1 class="py-5">Search Books</h1>
                <input class="search-field p-2" id="books" type="search" placeholder="Search Books...">
            </div>
            <button class="btn btn-info py-3 px-5 mt-4">Search</button>
        </form>
    </div>
    <div id="result"></div>
</div>
<?php
include('includes/footer.php');
?>
