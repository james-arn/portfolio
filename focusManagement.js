export function trapFocusInModal(modal) {
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    function handleTabPress(e) {
        const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }

    modal.addEventListener('keydown', handleTabPress);

    setTimeout(function () {
        firstFocusableElement.focus();
    }, 100);
}
