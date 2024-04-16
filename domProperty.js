// Project 1: Click Counter
const clickButton = document.getElementById('clickButton');
const clickCounter = document.getElementById('clickCounter');
let clickCount = 0;
clickButton.addEventListener('click', () => {
    clickCount++;
    clickCounter.textContent = clickCount;
});

// Project 2: Toggle Text
const toggleText = document.getElementById('toggleText');
toggleText.addEventListener('dblclick', () => {
    toggleText.classList.toggle('hidden');
});

// Project 3: Change Background Color
const colorContainer = document.getElementById('colorContainer');
colorContainer.addEventListener('mouseover', () => {
    colorContainer.style.backgroundColor = 'lightblue';
});
colorContainer.addEventListener('mouseout', () => {
    colorContainer.style.backgroundColor = '';
});

// Project 4: Key Logger
const keyLogger = document.getElementById('keyLogger');
document.addEventListener('keypress', (event) => {
    keyLogger.value += `Key pressed: ${event.key}\n`;
});

// Project 5: Image Carousel
const imageCarousel = document.getElementById('imageCarousel');
let currentImageIndex = 0;
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % imageCarousel.children.length;
        imageCarousel.children[currentImageIndex].scrollIntoView();
    }
});

// Project 6: Interactive Game
const gameCharacter = document.getElementById('gameCharacter');
let characterPosition = 0;
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        characterPosition += 10;
        gameCharacter.style.left = characterPosition + 'px';
    } else if (event.key === 'ArrowLeft') {
        characterPosition -= 10;
        gameCharacter.style.left = characterPosition + 'px';
    }
});

