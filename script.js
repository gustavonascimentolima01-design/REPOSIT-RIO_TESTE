document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe ativa de todos os botões e adiciona ao clicado
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            posts.forEach(post => {
                const postCategory = post.getAttribute('data-category');

                // Lógica de filtragem
                if (filterValue === 'all' || filterValue === postCategory) {
                    post.style.display = 'flex'; // Mostra o post
                } else {
                    post.style.display = 'none'; // Esconde o post
                }
            });
        });
    });
});