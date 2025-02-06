// Arrays for each category
const colors = ['Red', 'Yellow', 'Green', 'Burgundy', 'Blue', 'Purple', 'Black', 'White', 'Beige', 'Orange']; ;
const genres = ['Rockstar', 'Retro', 'Art Deco', 'Military', 'Gothic', 'Modern Renaissance', 'Afro Futurist', 'Monochrome', 'Cyberpunk', 'Kawaii'];
const styles = ['Casual', 'Chic', 'Bohemian', 'Streetwear', 'Sporty', 'Romantic', 'Vintage', 'Glamorous', 'Preppy', 'Business Casual'];

// Function to generate a random idea
function generateIdea() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const idea = `Colors: ${randomColor}, Genre: ${randomGenre}, Style: ${randomStyle}`;
    
    // Display the generated idea
    document.getElementById('content-idea').innerHTML = idea;
}

// Event listener for the button click
document.getElementById('generate-btn').addEventListener('click', generateIdea);
