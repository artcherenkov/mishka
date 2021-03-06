var popup = document.querySelector(".popup");
var page_opacity = document.querySelector(".page-opacity");
var button_order = document.querySelector(".product-of-the-week__buy");
var popup_button = document.querySelector(".popup__button-add");

button_order.attributes.removeNamedItem("href");

button_order.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("visually-hidden");
  page_opacity.classList.remove("visually-hidden");
});

popup_button.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("visually-hidden");
  page_opacity.classList.add("visually-hidden");
});
