$(function() {
    // Saves background color value of first li to variable.
    var backgroundColor = $("li:first-of-type").css('background-color')

    // Appends the color after the unordered list.
    $("ul").append("<p> Color was: " + backgroundColor + "</p>");
    
    // Sets new CSS stylings for all list items.
    $("li").css({'background-color': '#c5a996', 'border': 'white solid 1px', 'color': 'black', 'text-shadow': 'none', 'font-family': 'georgia'});
});