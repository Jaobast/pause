const btnCategory = document.querySelectorAll(".container_category button");
const btnClicked = document.querySelector(".clicked");

const werbung = document.getElementById("werbung");
const popular = document.getElementById("popular");
const beef = document.getElementById("beef");
let lastClickedButton = null;

btnCategory.forEach(item => {
    item.addEventListener('click', function(e) {
        if (lastClickedButton) {
            lastClickedButton.style.backgroundColor = '';
            lastClickedButton.style.color = '';
        }

        item.style.backgroundColor = 'var(--red)';
        item.style.color = 'var(--bread)';
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

        lastClickedButton = item;
    });
});

