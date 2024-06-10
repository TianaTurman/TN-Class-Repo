// 1. Function to add strikethrough style to the text of the first <li> element in the "Arguments" <ul>
function addStrikethroughToFirstArgument() {
    const firstArgument = document.querySelector('#arguments li');
    if (firstArgument) {
        firstArgument.style.textDecoration = 'line-through';
    }
}

//Explanation:
// document.querySelector('#arguments li'): This selects the first <li> element within the <ul> that has the ID arguments.
// if (firstArgument) { ... }: Checks if the element exists.
// firstArgument.style.textDecoration = 'line-through';: Sets the CSS text-decoration property of the selected element to line-through, which visually strikes through the text.

// 2. Apply the function to the first list item
addStrikethroughToFirstArgument();

// 3. Function to set the source of the image with the specified id to the provided URL
function setImageSource(id, url) {
    const image = document.getElementById(id);
    if (image) {
        image.src = url;
    }
}

// Explanation:
// document.getElementById(id): This selects the element with the given id.
// if (image) { ... }: Checks if the element exists.
// image.src = url;: Sets the src attribute of the image element to the provided url.

// 4. Set the source of three images in the Image Area section
setImageSource('image-1', 'https://via.placeholder.com/150');
setImageSource('image-2', 'https://via.placeholder.com/150');
setImageSource('image-3', 'https://via.placeholder.com/150');

// 5. Function to remove the first <li> from the Arguments <ul>
function removeFirstArgument() {
    const firstArgument = document.querySelector('#arguments li');
    if (firstArgument) {
        firstArgument.remove();
    }
}

// 6. Remove the first two items from the list by making two consecutive calls to the function
removeFirstArgument();
removeFirstArgument();

// 7. Function to adjust the text size of the element with the specified id to the provided font size
function setFontSize(id, fontSize) {
    const element = document.getElementById(id);
    if (element) {
        element.style.fontSize = fontSize;
    }
}

// 8. Modify the text size of an element on the page
setFontSize('heading', '24px');
setFontSize('thing-1', '18px');
