const btnCategory = document.querySelectorAll(".container_category button");
const btnClicked = document.querySelector(".clicked");
const searchInput = document.getElementById('search');
const menuTitel = document.querySelector('.container_header h1');
const logoTitel = document.querySelector('.logo-header svg');

const werbung = document.getElementById("werbung");
const popular = document.getElementById("popular");
const beef = document.getElementById("beef");
const veggie = document.getElementById("veggie");


let lastClickedButton = null;

btnCategory.forEach(item => {
    item.addEventListener('click', function(e) {
        if (lastClickedButton) {
            lastClickedButton.classList.remove("clicked-new");
            lastClickedButton.classList.remove("clicked-veggie");

            btnCategory.forEach(btn => {
                btn.style.backgroundColor = '';
            });
            searchInput.style.backgroundColor = '';
            menuTitel.style.color = '';
            logoTitel.style.fill = '';
        }

        item.classList.add("clicked-new");
        btnClicked.classList.remove("clicked");

        

        if (!item.classList.contains("alle")) {
            werbung.classList.add("hidden");
            popular.classList.add("hidden");
        }else{
            werbung.classList.remove("hidden");
            popular.classList.remove("hidden");
        }



        if (!item.classList.contains("beef")) {
            beef.classList.add("hidden");
        }else{
            beef.classList.remove("hidden");
        }



        if (!item.classList.contains("veggie")) {
            veggie.classList.add("hidden");
        }else{
            veggie.classList.remove("hidden");
        }

        if (item.classList.contains("veggie")) {
            item.classList.add("clicked-veggie");
            btnCategory.forEach(btn => {
                btn.style.backgroundColor = 'var(--green-light)';
            });
            menuTitel.style.color = 'var(--green-light)';
            logoTitel.style.fill = 'var(--green-light)';
        }

        lastClickedButton = item;
    });
});

