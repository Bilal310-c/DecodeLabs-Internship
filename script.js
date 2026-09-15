document.addEventListener('DOMContentLoaded', function() {

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    const themeBtn = document.getElementById('themeBtn');

    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            themeBtn.textContent = 'Light Mode';
        } else {
            themeBtn.textContent = 'Dark Mode';
        }
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            cards.forEach(function(card) {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || category === cardCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

        });
    });

});