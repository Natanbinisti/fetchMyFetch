const burgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

burgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    burgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}