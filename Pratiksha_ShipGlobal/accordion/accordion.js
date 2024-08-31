function toggleAccordion(element) {
    const content = element.nextElementSibling;
    
    // Close all open accordion items
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach((item) => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });
    
    // Toggle the display of the clicked accordion item
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
