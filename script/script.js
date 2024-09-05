const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const closeBtn = document.getElementById("close-modal-btn");
const checkoutBtn = document.getElementById("checkout-modal-btn");
const cartCounter = document.getElementById("cart-count");
const adressInput = document.getElementById("adresse");
const adressWarn = document.getElementById("adresse-warn");

const productDetail = document.getElementById("detail");
const products = document.querySelectorAll(".product");

let cart = [];


productDetail.addEventListener('click', function(){
    productDetail.classList.add("hidden");
    document.body.style.position = "";
})




// Abrir o modal
cartBtn.addEventListener('click', function(){
    cartModal.classList.remove("hidden");
    document.body.style.position = "fixed";
    updateCartModal();
})

// Fechar o modal
closeBtn.addEventListener('click', function(){
    cartModal.classList.add("hidden");
    document.body.style.position = "";
})

cartModal.addEventListener('click',function(e){
    if(e.target === cartModal){
        cartModal.classList.add("hidden");
        document.body.style.position = "";
    }
})

// Pegar valores dos produtos

menu.addEventListener('click', function(e){
    let parentButton = e.target.closest(".button_buy");
    if(parentButton){
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        addToCart(name, price);
    }

})

productModal.addEventListener('click', function(e){
    let parentButton = e.target.closest(".button_buy");
    if(parentButton){
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        addToCart(name, price);
    }

})

// Adidionar no carrinho

function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)
    if(existingItem){ existingItem.quantity += 1;}
    else {
        cart.push({
            name,
            price,
            quantity: 1
        })
    }

    updateCartModal();
}

// Atualiza carrinho

function updateCartModal(){
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML =`
        <div class="container-item">
           <div>
              <p class="name">${item.name}</p>
              <p>Anzahl: ${item.quantity}</p>
              <p>Preis: ${item.price.toFixed(2)}€</p>
           </div>

           <button class="remove" data-name="${item.name}">Entfernen</button>

        </div>
        `

        total += item.price * item.quantity;

        cartItems.appendChild(cartItemElement);
    })

// Total da compra
    cartTotal.textContent = total.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });

//quantos intens foram adicionados no carrinho
    cartCounter.innerHTML = cart.length;
}

//Remover item 
cartItems.addEventListener('click', function(e){
    if(e.target.classList.contains("remove")){
        const name = e.target.getAttribute("data-name")

        removeItem(name);
    }
})

function removeItem(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1){
        const item = cart[index];

        if(item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }

        cart.splice(index,1);
        updateCartModal();
    }
}

//Endereço
adressInput.addEventListener('input', function(e){
    let inputValue = e.target.value;

    if(inputValue !== ""){
        adressWarn.classList.add("hidden");
        adressInput.classList.remove("btn-warn");
    }
})

checkoutBtn.addEventListener('click', function(){
    const isOpen = checkRestaurantOpen();

    if(cart.length === 0)return;
    if(adressInput.value === ""){
        adressWarn.classList.remove("hidden");
        adressInput.classList.add("btn-warn");
        return
    }

    if(!isOpen){
        Toastify({
            text: "Ops. Das Restaurant ist geschlossen!",
            duration: 5000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "var(--red)", borderRadius: "15px",
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            },
        }).showToast();
    }

    if(isOpen){
        Toastify({
            text: "Deine Bestellung wurde abgeschlossen!",
            duration: 5000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "var(--green)", borderRadius: "15px",
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            },
        }).showToast();
    }


    cart = [];
    adressInput.value = "";
    updateCartModal();
})


//Checar se esta aberto
function checkRestaurantOpen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 10 && hora < 22;
}

const spanItem = document.getElementById("date-span");
const isOpen = checkRestaurantOpen();

if(isOpen){
    spanItem.style.backgroundColor = "var(--green)"
}else{ spanItem.style.backgroundColor = "var(--red)"}











