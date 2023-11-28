export function setupModalBackgroundListener() {
    var modal = document.getElementById('myModal');
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

export function setupEscapeKeyClose() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            var modal = document.getElementById('myModal');
            if (modal.style.display === 'flex') {
                closeModal();
            }
        }
    });
}

export const setupProjectTabFocusHover = () => {
    const buttons = document.querySelectorAll('.project-grid button');

    buttons.forEach(function (button) {
        button.addEventListener('focus', function () {
            this.closest('figure').classList.add('figure-hover');
            let projectThumb = this.closest('figure').querySelector('.project-thumb');
            if (projectThumb) {
                projectThumb.style.display = 'none';
            }
            let figcaption = this.closest('figure').querySelector('figcaption');
            let overlay = this.closest('figure').querySelector('.overlay');
            if (figcaption) {
                figcaption.classList.add('is-focused');
            }
            if (overlay) {
                overlay.classList.add('is-focused');
            }
        });

        button.addEventListener('blur', function () {
            this.closest('figure').classList.remove('figure-hover');
            let projectThumb = this.closest('figure').querySelector('.project-thumb');
            if (projectThumb) {
                projectThumb.style.display = '';
            }
            let figcaption = this.closest('figure').querySelector('figcaption');
            let overlay = this.closest('figure').querySelector('.overlay');
            if (figcaption) {
                figcaption.classList.remove('is-focused');
            }
            if (overlay) {
                overlay.classList.remove('is-focused');
            }
        });
    });
}
