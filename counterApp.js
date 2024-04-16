// Get the necessary elements from the DOM
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let counter = 0;

// Function to update the counter value and display it
function updateCounter(value) {
    counter += value;
    counterElement.textContent = counter;
}

// Event listener for the increment button
incrementBtn.addEventListener('click', () => {
    updateCounter(1);
});

// Event listener for the decrement button
decrementBtn.addEventListener('click', () => {
    updateCounter(-1);
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter(0);
});
