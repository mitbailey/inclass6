$(function() {
    // Adds "Just Updated" before the unordered list.
	$("ul").before("<p>Just Updated</p>");

    // Uses prepend to add a '+' to all 'hot' list items.
	$("li.hot").prepend("+");
	
    // Creates a new li element.
    var li = $("<li><em>gluten-free</em> soy sauce</li>");
    // Selects the last li-type and places our li object after it.
    $("li:last-of-type").after(li);
});