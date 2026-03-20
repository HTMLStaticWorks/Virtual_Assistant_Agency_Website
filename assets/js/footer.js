document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        fetch(`footer.html?v=${new Date().getTime()}`)
            .then(response => {
                if (!response.ok) throw new Error("Failed to load footer");
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                
                // Newsletter form logic
                const newsletterForm = footerPlaceholder.querySelector('form');
                if (newsletterForm) {
                    newsletterForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const emailInput = newsletterForm.querySelector('input[type="email"]');
                        if (emailInput) {
                            alert(`Thanks for subscribing with: ${emailInput.value}`);
                            newsletterForm.reset();
                        }
                    });
                }
            })
            .catch(error => console.error("Error loading footer:", error));
    }
});
