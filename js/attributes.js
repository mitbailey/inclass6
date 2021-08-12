$(function() {
    // Removes the class 'hot' from the third li object.
    $("li:nth-of-type(3)").removeClass("hot");

    // Adds the class 'favorite' to all li objects containing the class 'hot.'
    $("li.hot").addClass("favorite");
});