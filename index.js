// Get all elements with the class 'arrowSvg'
let arrowElements = document.querySelectorAll('.arrowSvg');

// Add a click event listener to each arrowSvg element
arrowElements.forEach(function (arrowElement) {
    arrowElement.addEventListener('click', function () {
        // Get the parent faqsPointer element
        let faqsPointer = arrowElement.parentElement;
        let faqText = faqsPointer.firstElementChild;

        // Get the next sibling (faqAnswer) of the parent faqsPointer
        let faqAnswer = faqsPointer.nextElementSibling;

        // Toggle the display of faqAnswer
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faqText.classList.remove('active-faq');
            arrowElement.style.transform = 'scaleY(1)';
        } else {
            faqAnswer.style.display = 'block';
            faqText.classList.add('active-faq');
            arrowElement.style.transform = 'scaleY(-1)';
        }
    });
});
