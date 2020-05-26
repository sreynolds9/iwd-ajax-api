<?php
$pageTitle = 'Home';

include('includes/header.php');
?>
<!--<div class="container">-->
<!--		<div id="results"></div>-->
<!--</div>-->
<div class="container">
    <div id="searchBooks">
        <form id="bookform">
            <div class="input-field">
                <h1>Search Books</h1>
                <label for="books">Search Books</label>
                <input id="books" type="search">
            </div>
            <button type="button" class="btn btn-info">Search Books</button>
        </form>
    </div>
    <div id="result"></div>
</div>
<?php
include('includes/footer.php');
?>
