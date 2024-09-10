const productDetail = document.getElementById("detail");
const products = document.querySelectorAll(".product, .product-popular");

const detailClose = document.getElementById("detail-close");

function resetProductDetail() {

    document.getElementById("sesam").checked = true;


    const checkboxes = productDetail.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

products.forEach(function (product) {
    const productNameInDOM = product.getAttribute('name');

    const selectedProduct = productData.find(p => p.name === productNameInDOM);

    if (selectedProduct) {
        product.addEventListener('click', function () {


            const detailImg = productDetail.querySelector('img');
            const detailName = productDetail.querySelector('.name');
            const detailPrice = productDetail.querySelector('.price');
            const detailDescription = productDetail.querySelector('.description-text');
            const buttonVeggie = document.querySelector(".button");


            detailImg.src = selectedProduct.pics;
            detailName.textContent = selectedProduct.name;
            detailPrice.textContent = selectedProduct.price;
            detailDescription.textContent = selectedProduct.description;


            productDetail.classList.remove("hidden");


            if (product.classList.contains('burger-veggie') || product.classList.contains('product-popular-veggie')) {
                productDetail.style.backgroundColor = 'var(--green)';
                detailName.style.color = 'var(--green)';
                if (buttonVeggie) {
                    buttonVeggie.style.backgroundColor = 'var(--green)';
                }
            }
            
        });
    } else {
        console.warn(`Produto com nome "${productNameInDOM}" não encontrado no array productData`);
    }
});

detailClose.addEventListener('click', function () {
    window.scrollTo(0, 0);
    productDetail.classList.add("hidden");

    resetProductDetail();
});
