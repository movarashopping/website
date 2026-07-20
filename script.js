// ===============================
// MOVARA SHOPPING SCRIPT.JS
// ===============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to Movara Shopping");
};

// -------------------------------
// Add To Cart
// -------------------------------
function addToCart(productName) {
    alert(productName + " has been added to your cart.");
}

// -------------------------------
// Buy Now
// -------------------------------
function buyNow(productName) {
    alert("Proceeding to buy: " + productName);
}

// -------------------------------
// Wishlist
// -------------------------------
function addToWishlist(productName) {
    alert(productName + " added to Wishlist ❤️");
}

// -------------------------------
// Search Products
// -------------------------------
function searchProducts() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toUpperCase();

    let products = document.getElementsByClassName("card");

    for (let i = 0; i < products.length; i++) {

        let title = products[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {

            products[i].style.display = "";

        } else {

            products[i].style.display = "none";

        }

    }

}

// -------------------------------
// Contact Form
// -------------------------------
function sendMessage(event) {

    event.preventDefault();

    alert("Thank you for contacting Movara Shopping. We will contact you soon.");

}

// -------------------------------
// Newsletter
// -------------------------------
function subscribeNewsletter() {

    let email = document.getElementById("newsletterEmail");

    if (!email || email.value == "") {

        alert("Please enter your email.");

        return;

    }

    alert("Thank you for subscribing.");

    email.value = "";

}

// -------------------------------
// Scroll To Top
// -------------------------------
function scrollTopButton() {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// -------------------------------
// Mobile Menu
// -------------------------------
function toggleMenu(){

    let nav=document.getElementById("menu");

    if(!nav) return;

    if(nav.style.display==="block"){

        nav.style.display="none";

    }else{

        nav.style.display="block";

    }

}

console.log("Movara Shopping Website Loaded Successfully");
