// 1. Get all FAQ elements
const faqs = document.querySelectorAll('.faqs');

// 2. Loop through each FAQ element to add an event listener
faqs.forEach(faq => {
    // Get the clickable question div inside the current faq
    const question = faq.querySelector('.question');
    
    // Get the elements to toggle their visibility
    const answer = faq.querySelector('small');
    const showIcon = faq.querySelector('.faq-icon'); // The 'show' icon (e.g., plus or down arrow)
    const hideIcon = faq.querySelector('.hide-icon'); // The 'hide' icon (e.g., minus or up arrow)

    // Add a click listener to the entire question area
    question.addEventListener('click', () => {
        // Toggle the display of the answer
        // If it's currently hidden, make it flex (or block/inline-block, but flex is good here)
        // If it's currently visible, hide it.
        if (answer.style.display === 'block' || answer.style.display === 'flex') {
            answer.style.display = 'none';
            showIcon.style.display = 'block'; // Show the plus/down icon
            hideIcon.style.display = 'none'; // Hide the minus/up icon
        } else {
            // NOTE: Based on your CSS, 'small' has `display: none;`
            // You should use the display value you want for the answer when shown.
            // Since your CSS doesn't specify an initial display for the small tag when shown, 
            // 'block' is a safe default to make it take up its own line.
            answer.style.display = 'block'; 
            showIcon.style.display = 'none'; // Hide the plus/down icon
            hideIcon.style.display = 'block'; // Show the minus/up icon
        }

        // OPTIONAL: Add an 'active' class to the question for styling changes (e.g., bolder text)
        // question.classList.toggle('active');
    });
});