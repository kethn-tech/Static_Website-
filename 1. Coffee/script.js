
// Fix for products visibility
document.addEventListener('DOMContentLoaded', function() {
    // Ensure products section is visible
    const productsSection = document.querySelector('.products');
    const productsGrid = document.querySelector('.products-grid');
    const productCards = document.querySelectorAll('.product-card');
    
    if (productsSection) {
        productsSection.style.display = 'block';
        productsSection.style.visibility = 'visible';
        productsSection.style.opacity = '1';
    }
    
    if (productsGrid) {
        productsGrid.style.display = 'grid';
        productsGrid.style.visibility = 'visible';
        productsGrid.style.opacity = '1';
    }
    
    // Ensure all product cards are visible
    productCards.forEach((card, index) => {
        card.style.display = 'block';
        card.style.visibility = 'visible';
        card.style.opacity = '1';
        
        // Add staggered animation
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
