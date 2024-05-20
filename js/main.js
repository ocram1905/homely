// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
};


// cart working js
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}

// making Function
function ready(){
    //reomve items from cart 
    var reomveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++){
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
    }
}

// reomve items from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
}

// UPDATE TOTAL
function updatetotal() {
    var cartContent = document
}