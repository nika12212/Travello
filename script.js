const benefits = document.querySelectorAll(".benefits .benefits_list .benefit_item");

benefits.forEach(function (item) {
    item.addEventListener("click", function (event) {
        const targetElem = event.target;
        console.log(this);

        const elemTitle = this.querySelector(".benefit_title");
        if (this.classList.contains("is-active")) {
            this.classList.remove("is-active");
            elemTitle.innerHTML = elemTitle.innerHTML.replace("Active", "");
        } else {
            this.classList.add("is-active");
            elemTitle.innerHTML += "Active";
        }
    });
});
const addToCartBtn = document.querySelectorAll(".our_services .services_list .theme_button a");

function addToCart(item) {
    item.addEventListener("click", function (e) {
        let target = e.target;
        e.preventDefault();
        if (!target.classList.contains("in-cart")) {
            target.innerHTML = "Alredy In Cart";
            target.classList.add("in-cart");
        } else {
            target.innerHTML = "Add To Cart";
            target.classList.remove("in-cart");
        }
    });
}
addToCartBtn.forEach(addToCart);

const slider = new Swiper(".swiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 2000,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});