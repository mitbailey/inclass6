$(function () {

    // Finds all li items containing the word 'pine' and sets their text to 'almonds.'
    $("li:contains('pine')").text('almonds');

    // Uses a function to read in each item's current html content, and then returns that content surrounded by <em> tags.
    $("li.hot").html(function (i, curr_content) 
    {
        return "<em>" + curr_content + "</em>";
    });

    // Removes list item with value of one.
    $('li#one').remove();
});