import { trapFocusInModal } from "../focusManagement.js"

let lastFocusedButton = null;

export function openModal(projectId) {
    lastFocusedButton = document.activeElement; // Remember the button that opened the modal
    let content;
    switch (projectId) {
        case 1:
            content = {
                title: "Co-op - Beautiful & Complex Booking Journey",
                problem: "Co-op faced challenges in creating an online booking system that could handle complex travel itineraries while providing a visually appealing user experience. Additionally, the agency wanted to create a flagship product that can easily be customised between different clients.",
                solution: "I developed a sophisticated booking journey, integrating dynamic user interfaces with complex backend logic. The solution involved using React & Next.js for seamless UI interactions and ensuring the system could handle various travel options and customisations.",
                outcome: "The result was a user-friendly, robust booking platform that significantly improved the customer experience, leading to increased bookings and customer satisfaction. The project was delivered to a tight schedule and received positive feedback for its intuitive design and functionality.",
                link: "https://www.cooptravel.co.uk/"
            };
            break;
        case 2:
            content = {
                title: "iJOPower - Solar Panel Configurator",
                problem: "iJOPower needed a custom solution to help customers visualize and configure solar panel setups, addressing a gap in user engagement and understanding of solar products.",
                solution: "I created an interactive web application using JavaScript and Pixi.js (HTML5 Canvas), allowing users to design and visualize solar panel installations on their properties. The app included real-time cost calculations and energy savings estimations.",
                outcome: "The configurator significantly enhanced customer engagement, leading to a higher conversion rate. The tool also educated users about the benefits of solar energy, aligning with iJOPower's mission to promote sustainable energy solutions.",
                link: "https://cost-calculator.ijopower.com/app"
            };
            break;
        case 3:
            content = {
                title: "CAA - Full Accessibility Compliance",
                problem: "The Canadian Automobile Association needed their website to be fully compliant with WCAG 2.1 accessibility standards, ensuring inclusivity for all users.",
                solution: "I led the initiative to overhaul the website's frontend, implementing ARIA roles and keyboard navigation. I conducted thorough accessibility audits and user testing to ensure compliance.",
                outcome: "The revamped site achieved WCAG 2.1 AA compliance, making it accessible to a wider audience, including those with disabilities. This enhancement not only improved user experience but ensured legal compliance and also positioned CAA as a leader in digital inclusivity.",
                link: "https://www.extraordinaryexplorations.com/"
            };
            break;
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
    document.documentElement.style.overflowY = 'hidden';
}

export function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.documentElement.style.overflowY = 'scroll';

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

function updateModalContent(content) {
    document.getElementById('modalTitle').innerText = content.title;
    document.getElementById('modalProblem').innerText = content.problem;
    document.getElementById('modalSolution').innerText = content.solution;
    document.getElementById('modalOutcome').innerText = content.outcome;
    document.getElementById('modalLink').href = content.link;
}
