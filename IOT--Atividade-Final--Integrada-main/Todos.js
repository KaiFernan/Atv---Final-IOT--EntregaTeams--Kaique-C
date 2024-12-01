// Exibe o popup ao carregar a página
window.onload = function() {
    document.getElementById("popup").classList.add("active");
};

// Função para fechar o popup
function fecharPopup() {
    document.getElementById("popup").classList.remove("active");
}

//Carrosel
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-imagens');
    const imageElements = Array.from(images.children); // Lista das imagens dentro do carrossel
    let currentIndex = 0; // Índice inicial da imagem visível

    // Função para mostrar a imagem com base no índice atual
    const updateCarousel = () => {
        const offset = -currentIndex * 100; // Calcula o deslocamento com base no índice
        images.style.transform = `translateX(${offset}%)`;
    };

    // Navegar para a imagem anterior
    carousel.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imageElements.length - 1;
        }
        updateCarousel(); // Atualiza a posição das imagens
    });

    // Navegar para a imagem seguinte
    carousel.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < imageElements.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel(); // Atualiza a posição das imagens
    });
});
