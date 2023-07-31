
//create a function that will be called when the user hovers over a 3d rectangle
const photoContainer = document.querySelector('.photo-container');
const messageContainer = document.querySelector('.message-container');

photoContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const message = event.target.getAttribute('data-message');
        showMessage(message);
    }
});

function showMessage(message) {
    messageContainer.innerHTML = `<p class="photo-message">${message}</p>`;
}
document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    timelineEvents.forEach((event) => {
        event.addEventListener('click', () => {
            const description = event.querySelector('.event-description');
            const allDescriptions = document.querySelectorAll('.event-description');

            // Toggle the description visibility of the clicked event
            allDescriptions.forEach((desc) => {
                if (desc !== description) {
                    desc.classList.remove('show-description');
                }
            });

            description.classList.toggle('show-description');
        });
    });
});