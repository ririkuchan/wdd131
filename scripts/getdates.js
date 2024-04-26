// When the DOM content is fully loaded, execute this function
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current year and insert it into the span with id 'currentyear'
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = `©${currentYear}`;

    // Get the last modified date of the document and insert it into the p with id 'lastModified'
    const lastModifiedDate = document.lastModified; // No need to parse, as you want the native format
    document.getElementById('lastModified').textContent = `Last updated: ${lastModifiedDate}`;
});
