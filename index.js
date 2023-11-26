var lastFocusedButton = null;

function trapFocusInModal(modal) {
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);

    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1];

    function handleTabPress(e) {
        var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    }

    modal.addEventListener('keydown', handleTabPress);

    setTimeout(function() {
        lastFocusableElement.focus();
    }, 100); 
}

function setupModalBackgroundListener() {
    var modal = document.getElementById('myModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function setupEscapeKeyClose() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            // Check if the modal is currently displayed
            var modal = document.getElementById('myModal');
            if (modal.style.display === 'flex') {
                closeModal();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupModalBackgroundListener();
    setupEscapeKeyClose();
    var buttons = document.querySelectorAll('.project-grid button');

    buttons.forEach(function(button) {
        button.addEventListener('focus', function() {
            this.closest('figure').classList.add('figure-hover');
            var projectThumb = this.closest('figure').querySelector('.project-thumb');
            if (projectThumb) {
                projectThumb.style.display = 'none';
            }
            var figcaption = this.closest('figure').querySelector('figcaption');
            var overlay = this.closest('figure').querySelector('.overlay');
            if (figcaption) {
                figcaption.classList.add('is-focused');
            }
            if (overlay) {
                overlay.classList.add('is-focused');
            }
        });

        button.addEventListener('blur', function() {
            this.closest('figure').classList.remove('figure-hover');
            var projectThumb = this.closest('figure').querySelector('.project-thumb');
            if (projectThumb) {
                projectThumb.style.display = '';
            }
            var figcaption = this.closest('figure').querySelector('figcaption');
            var overlay = this.closest('figure').querySelector('.overlay');
            if (figcaption) {
                figcaption.classList.remove('is-focused');
            }
            if (overlay) {
                overlay.classList.remove('is-focused');
            }
        });
    });
});


function openModal(projectId) {
    lastFocusedButton = document.activeElement; // Remember the button that opened the modal

    let content;
    switch (projectId) {
        case 1:
            content = {
                title: "Co-op - Beautiful & Complex Booking Journey",
                problem: "Description of the problem for Co-op...",
                solution: "Description of the solution for Co-op...",
                outcome: "Description of the outcome for Co-op...",
                link: "http://link-to-coop-project.com"
            };
            break;
        case 2:
            content = {
                title: "iJOPower - Solar Panel Configurator",
                problem: "Description of the problem for ijo...",
                solution: "Description of the solution for ijo...",
                outcome: "Description of the outcome for ijo...",
                link: "http://link-to-coop-project.com"
            };
            break;
        case 3:
            content = {
                title: "CAA - Accessibility",
                problem: "Description of the problem for CAA...",
                solution: "Description of the solution for CAA...",
                outcome: "Description of the outcome for CAA...",
                link: "http://link-to-coop-project.com"
            };
            break;
        // Add more cases as needed
        default:
            content = {
                title: "Default Title",
                problem: "Default problem description...",
                solution: "Default solution description...",
                outcome: "Default outcome description...",
                link: "#"
            };
    }
    updateModalContent(content);
    const modal = document.getElementById('myModal');
    trapFocusInModal(modal);
    modal.style.display = "flex";
}

function updateModalContent(content) {
    document.getElementById('modalTitle').innerText = content.title;
    document.getElementById('modalProblem').innerText = content.problem;
    document.getElementById('modalSolution').innerText = content.solution;
    document.getElementById('modalOutcome').innerText = content.outcome;
    document.getElementById('modalLink').href = content.link;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}
