const productDetail = document.getElementById("detail");
const products = document.querySelectorAll(".product");
console.log(products)

const detailClose = document.getElementById("detail-close");

    function resetProductDetail() {
    
        // Resete os radio buttons (exemplo: marque novamente o "Sesam")
        document.getElementById("sesam").checked = true;
    
        // Desmarque todos os checkboxes
        const checkboxes = productDetail.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    products.forEach(function(product, index) {
        const productNameInDOM = product.getAttribute('name');
    
        if (productNameInDOM === productData[index].name) {
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
        }
    });
    
    detailClose.addEventListener('click', function() {
        window.scrollTo(0,0);
        productDetail.classList.add("hidden");
    
        resetProductDetail();
    });