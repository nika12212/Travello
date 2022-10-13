
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


/*
let section=document.querySelector(".benefits");
let rect =section.getBoundingClientRect();
let y=rect.top;
let x =rect.left;
let w= rect.width;
let h=rect.height;
 
window.addEventListener("scroll", function (e)
{
  const target=e.target;

  if (y <= document.documentElement.scrollTop + document.documentElement.clientHeight /2)
  {
    section.classList.add("visible");
  }
 if( h + y <document.documentElement.scrollTop + 300)
 {
  section.classList.remove("visible");
 }
});
*/



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });