1.What is jQuery and why is it used in web development?

2.How do you include jQuery in an HTML document?

3.What is the basic syntax of a jQuery selector?
$('')
4.How do you handle events in jQuery? Provide an example of a click event.
$(document).ready(function() {
    $('#myButton').click(function() {
        alert('Button was clicked!');
    });
});
5.How can you hide and show an element using jQuery?

<!-- $(document).ready(function() {
    $('#hideButton').click(function() {
        $('#myElement').hide();
    });
    $('#showButton').click(function() {
        $('#myElement').show();
    });
}); -->

6.Explain the difference between $(document).ready() and $(window).load().

7.How do you add or remove a class from an element using jQuery?
<!-- $(document).ready(function() {
    $('#myElement').addClass('newClass'); // Adds 'newClass'
    $('#myElement').removeClass('newClass'); // Removes 'newClass'
}); -->

8.What is the purpose of the each function in jQuery? Provide an example.

9.How do you perform an AJAX request using jQuery? Provide a basic example.

10.What are jQuery plugins and how do you use them? Provide an example of how to include and use a jQuery plugin.