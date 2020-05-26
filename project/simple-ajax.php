<?php
$pageTitle = 'AJAX';

include('includes/header.php');
?>

<div class="container">

    <h1>Search</h1>

    <form>
        Search: <input type="text" class="form-control" onkeyup="showSuggestion(this.value)">
    </form><br>
    <p>
        Suggestions: <span id="searchOutput" style="font-weight: bold"></span>
    </p>
</div>

<?php
include('includes/footer.php');
?>
