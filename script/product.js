const detailClose = document.getElementById("detail-close");

products.forEach(function(product, index) {
    product.addEventListener('click', function() {

        const detailImg = productDetail.querySelector('img'); 
        const detailName = productDetail.querySelector('.name');
        const detailPrice = productDetail.querySelector('.price');


        detailImg.src = productData[index].pics;
        detailName.textContent = productData[index].name;
        detailPrice.textContent = productData[index].price;


        productDetail.classList.remove("hidden");
    });
});

productDetail.addEventListener('click', function(){
    productDetail.classList.add("hidden");
    document.body.style.position = "";
})


detailClose.forEach(function(product) {
    product.addEventListener('click', function() {

        detailClose.classList.add("hidden");
    });
});


/* const detalImg = productModal.querySelector('.cover img');
const modalTitle = productModal.querySelector('.titel h3');
const modalKcal = productModal.querySelector('.kcal');
const modalDescription = productModal.querySelector('.description');
const modalPrice = productModal.querySelector('.price');


detalImg.src = productData[index].pics;
modalTitle.textContent = productData[index].name;
modalKcal.textContent = productData[index].kcal + ' kcal';
modalDescription.textContent = productData[index].description;
modalPrice.textContent = productData[index].price + '€';

const modalButtonBuy = productModal.querySelector('.button_buy');
modalButtonBuy.setAttribute('data-name', productData[index].name);
modalButtonBuy.setAttribute('data-price', productData[index].price); */
