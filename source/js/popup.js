var popup = document.querySelector(".popup");
var page_opacity = document.querySelector(".page-opacity");
var button_order = document.querySelector(".product-of-the-week__buy");
var popup_button = document.querySelector(".popup__button-add");

var popupY = popup.offsetTop - 40;

button_order.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("visually-hidden");
  page_opacity.classList.remove("visually-hidden");
  // Scroll(popupY);
});

popup_button.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("visually-hidden");
  page_opacity.classList.add("visually-hidden");
});

windowPageYOffset = 0;

function Scroll(scrollval) {
  windowPageYOffset = window.pageYOffset;
  if (windowPageYOffset == scrollval) {
    doneValue = true;
  }
  // scroll up
  else if (windowPageYOffset >= scrollval) {
    window.scrollBy(0, -(1 + ((windowPageYOffset - scrollval) / 10)));
  }
  // scroll down
  else {
    window.scrollBy(0, 1 + ((scrollval - windowPageYOffset) / 10));
  }
  if (windowPageYOffset != scrollval) {
    var setTimeoutScrollval = setTimeout('Scroll(' + scrollval + ')', 20);
  }
}
