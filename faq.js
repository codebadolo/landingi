const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('active');

        // fermer tous les items
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.display = 'none';
        });

        // ouvrir l'item cliqué si fermé
        if (!isOpen) {
            item.classList.add('active');
            answer.style.display = 'block';
        }
    });
});
