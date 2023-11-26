function openModal1() {
    // Set up content for modal 1
    setupModalContent('Content for Project 1');
    document.getElementById('myModal').style.display = "block";
}

function openModal2() {
    // Set up content for modal 2
    setupModalContent('Content for Project 2');
    document.getElementById('myModal').style.display = "block";
}

function setupModalContent(content) {
    // Assuming you have an element inside the modal for content
    document.getElementById('modalContent').innerText = content;
}

// Close modal function, assuming you have a close button inside your modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

console.log('hit')