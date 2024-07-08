// Practice Questions
// Basic Click Event

// 1.Create a button. When the button is clicked, log a message to the console.
// Changing Text Content
const button1 = document.getElementById('clickBtn');
button1.addEventListener('click', () => {
    console.log('button was clicked');
});




// 2.Create a button and a paragraph. When the button is clicked, change the text content of the paragraph.
// Mouseover and Mouseout Events
const button2 = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('myParagraph');
button2.addEventListener('click', () => {
    paragraph.textContent = 'this text has been changed'
});





// 3.Create a div with a specific background color. When the mouse hovers over the div, change the background color. When the mouse moves out, revert the background color.
// Mouseover and Mouseout Events
const hover = document.getElementById('hoverDiv');
hover.addEventListener('mouseover', () => {
    hover.style.backgroundColor = 'lightcoral';
});
hover.addEventListener('mouseout', () => {
    hover.style.backgroundColor = 'lightblue';
})





// 4.Create an input field. When a key is pressed while the input field is focused, log the key pressed to the console.
// key down
 const pressed = document.getElementById('myInput');
 pressed.addEventListener('keydown', (event) => {
    console.log(`key pressed: ${event.key} `);
 });



// 5.Create a form with an input field and a submit button. When the form is submitted, prevent the default form submission and log the input value to the console.
// Event submit

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('myInput5');
    console.log(`form submitted with value: ${input.value}`);
});


// 6.Create a list of items dynamically. Add a click event listener to the list container to log the text of the clicked item using event delegation.
// Click Event

const list = document.getElementById('itemList');
list.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Item Clicked: ${event.target.textContent}`)
    }
});


// 7.Create a button. When the button is double-clicked, change its text to "Double-clicked!".
// double click event
const button7 = document.getElementById('dblClickBtn');
button7.addEventListener('dblclick', () => {
    button7.textContent = 'Double Clicked';
});



// 8.Create a button and a function that logs a message to the console. Add the click event listener to the button. Add another button that removes the click event listener from the first button when clicked.
// click event

const clickButton = document.getElementById('clickBtn');
const removeButton = document.getElementById('removeBtn');

const handleClick = () => {
    console.log('Button was clicked')
};

clickButton.addEventListener('click', handleClick);

removeButton.addEventListener('click', () => {
    clickButton.removeEventListener('click', handleClick);
    console.log('click event listener removed')
});


// 9.Create a button and a div. When the button is clicked, toggle a class on the div that changes its background color.
// click event




// 10.Create a div. Add a click event listener that logs the coordinates of the click relative to the viewport and the div itself. -->
//click  takes event as a parameter