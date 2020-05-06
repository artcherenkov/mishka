var popup = document.querySelector(".popup");
var page_opacity = document.querySelector(".page-opacity");
var popup_button = document.querySelector(".popup__button-add");
var button_add_to_cart = document.querySelector(".catalog__item-add");

button_add_to_cart.attributes.removeNamedItem("href");

function showPopup () {
  popup.classList.remove("visually-hidden");
  page_opacity.classList.remove("visually-hidden");
}

popup_button.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("visually-hidden");
  page_opacity.classList.add("visually-hidden");
});
