// Function to handle pagination button clicks
function handlePaginationClick(event) {
    // Get all pagination buttons
    const paginationButtons = document.querySelectorAll('.pagination-btn');

    // Remove 'active' class from all buttons and reset their styles
    paginationButtons.forEach(button => {
        button.classList.remove('active');
        button.style.backgroundColor = ''; // Reset background color
        button.style.color = ''; // Reset text color
    });

    // Add 'active' class to the clicked button
    event.target.classList.add('active');
    event.target.style.backgroundColor = '#7145FE'; // Set background color for active button
    event.target.style.color = '#FFFFFF'; // Set text color for active button
}

// Add click event listeners to pagination buttons
document.querySelectorAll('.pagination-btn').forEach(button => {
    button.addEventListener('click', handlePaginationClick);
});




// Prevent checkbox from being unchecked
const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', function(event) {
    if (!event.target.checked) {
        event.preventDefault(); // Prevent unchecking
        event.target.checked = true; // Keep it checked
    }
});

 