var toggle=document.querySelector(".page-header__toggle"),DOM=[toggle,document.querySelector(".page-header__nav")];DOM.forEach(e=>{e.classList.remove("menu-open--default"),e.classList.remove("menu-open")}),toggle.addEventListener("click",(function(e){e.preventDefault(),DOM.forEach(e=>{e.classList.toggle("menu-open")})}));