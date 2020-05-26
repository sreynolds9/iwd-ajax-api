<?php
$pageTitle = 'AJAX';

include('includes/header.php');
?>

<div class="container">
    <h1>Search</h1>
    <form>
        Search: <input type="text" class="form-control" id="test">
    </form>

    <script>
        var options = {
            url: function(phrase) {
                return "api/countrySearch.php?phrase=" + phrase + "&format=json";
            },

            getValue: "name"
        };

        $("#test").easyAutocomplete(options);
    </script>

    <form>
        Search: <input type="text" class="form-control" onkeyup="showSuggestion(this.value)">
    </form>
    <p>
        Suggestions: <span id="searchOutput" style="font-weight: bold"></span>
    </p>
</div>

<?php
include('includes/footer.php');
?>
