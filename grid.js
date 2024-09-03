// // Sample data for the cards
// const data = [
//     { name: 'Apple', description: 'A sweet red fruit' },
//     { name: 'Banana', description: 'A long yellow fruit' },
//     { name: 'Cherry', description: 'A small red fruit' },
//     { name: 'Date', description: 'A sweet brown fruit' },
//     { name: 'Elderberry', description: 'A small dark fruit' },
//     { name: 'Fig', description: 'A sweet fruit with seeds' },
//     { name: 'Grape', description: 'A small round fruit' },
//     { name: 'Honeydew', description: 'A sweet green melon' }
// ];

// // Function to create cards dynamically
// function createCards() {
//     const cardContainer = document.getElementById('card-container');
    
//     data.forEach(item => {
//         const card = document.createElement('div');
//         card.className = 'card';
        
//         const title = document.createElement('h3');
//         title.textContent = item.name;
        
//         const description = document.createElement('p');
//         description.textContent = item.description;
        
//         card.appendChild(title);
//         card.appendChild(description);
//         cardContainer.appendChild(card);
//     });
// }

// // Call the function to create the cards
// createCards();

// // Search functionality
// document.getElementById('search-button').addEventListener('click', function() {
//     // Get the search query
//     const query = document.getElementById('search-box').value.toLowerCase();

//     // Get all the cards
//     const cards = document.querySelectorAll('.card');

//     // Loop through each card
//     cards.forEach(function(card) {
//         const title = card.querySelector('h3').textContent.toLowerCase();
//         const description = card.querySelector('p').textContent.toLowerCase();
        
//         // Check if the card's title or description matches the query
//         if (title.includes(query) || description.includes(query)) {
//             card.classList.remove('hidden');
//         } else {
//             card.classList.add('hidden');
//         }
//     });
// });


const data = [
    { name: 'Apple', description: 'A sweet red fruit' },
    { name: 'Banana', description: 'A long yellow fruit' },
    { name: 'Cherry', description: 'A small red fruit' },
    { name: 'Date', description: 'A sweet brown fruit' },
    { name: 'Elderberry', description: 'A small dark fruit' },
    { name: 'Fig', description: 'A sweet fruit with seeds' },
    { name: 'Grape', description: 'A small round fruit' },
    { name: 'Honeydew', description: 'A sweet green melon' }
];

// Function to create cards dynamically using template literals
function createCards() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear any existing content

    data.forEach(item => {
        const cardHTML = `
            <div class="card">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

// Call the function to create the cards
createCards();

// Search functionality using template literals
document.getElementById('search-box').addEventListener('keyup', function() {
    // Get the search query
    const query = this.value.toLowerCase();

    // Get all the cards
    const cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(function(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
         
        
        // Check if the card's title or description matches the query
        if (title.includes(query) || description.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});












