function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}






/* Slider */
let span = document.getElementsByClassName('sp');
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) { l = 0; }
  for (const i of product) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }

}
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) { l = 0; }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = '-' + l + '%';
    }
  }
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }