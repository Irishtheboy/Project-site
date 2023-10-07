const sections = document.querySelectorAll('.section-content');

sections.forEach(section => {
    const sectionName = section.getAttribute('id');
    const container = document.createElement('div'); // Create a container for the button
    container.className = 'button-container'; // Add a class for styling
    const button = document.createElement('button');
    button.className = 'toggle-button';
    button.textContent = sectionName.replace(/-/g, ' ');

    button.addEventListener('click', (event) => {
        section.classList.toggle('expanded');
        event.stopPropagation();
    });

    section.classList.add('collapsed');

    container.appendChild(button); // Append the button to the container
    section.parentElement.insertBefore(container, section);
});

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle("expanded");
    section.classList.toggle("collapsed");
}

