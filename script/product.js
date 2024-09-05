const detailClose = document.getElementById("detail-close");

/* products.forEach(function(product, index) {
    product.addEventListener('click', function() {

        const detailImg = productDetail.querySelector('img'); 
        const detailName = productDetail.querySelector('.name');
        const detailPrice = productDetail.querySelector('.price');
        const detailDescription = productDetail.querySelector('.description-text');


        detailImg.src = productData[index].pics;
        detailName.textContent = productData[index].name;
        detailPrice.textContent = productData[index].price;
        detailDescription.textContent = productData[index].description;


        productDetail.classList.remove("hidden");
    });
});


detailClose.addEventListener('click', function() {

    productDetail.classList.add("hidden");
    productDetail.reset();
}) */

    function resetProductDetail() {
        // Resete o scroll
        productDetail.scrollTop = 0;
    
        // Resete os radio buttons (exemplo: marque novamente o "Sesam")
        document.getElementById("sesam").checked = true;
    
        // Desmarque todos os checkboxes
        const checkboxes = productDetail.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    
        // Resete outros elementos que você alterou dinamicamente (imagem, texto)
        const detailImg = productDetail.querySelector('img');
        const detailName = productDetail.querySelector('.name');
        const detailPrice = productDetail.querySelector('.price');
        const detailDescription = productDetail.querySelector('.description-text');
    
        detailImg.src = "";  // Reseta a imagem para um valor padrão (ou vazio)
        detailName.textContent = "Name des Burgers"; // Volta para o valor padrão
        detailPrice.textContent = "10.00€";  // Valor padrão
        detailDescription.textContent = "60g saftiges Rindfleisch...";  // Descrição padrão
    }
    
    // Evento para abrir o detalhe do produto (mantido do código anterior)
    products.forEach(function(product, index) {
        product.addEventListener('click', function() {
    
            const detailImg = productDetail.querySelector('img'); 
            const detailName = productDetail.querySelector('.name');
            const detailPrice = productDetail.querySelector('.price');
            const detailDescription = productDetail.querySelector('.description-text');
    
            // Atualiza os detalhes do produto com base no índice do produto clicado
            detailImg.src = productData[index].pics;
            detailName.textContent = productData[index].name;
            detailPrice.textContent = productData[index].price;
            detailDescription.textContent = productData[index].description;
    
            // Exibe o detalhe
            productDetail.classList.remove("hidden");
        });
    });
    
    // Evento de fechar o detalhe e resetar o conteúdo
    detailClose.addEventListener('click', function() {
        productDetail.classList.add("hidden");
    
        // Chama a função para resetar o estado do detalhe
        resetProductDetail();
    });