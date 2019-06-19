let $navElements = document.querySelectorAll("#nav-elements>a");
let $toogleButton1 = document.getElementById("toogle1");

let $root = document.documentElement;





function listenForClicks() {

  // console.log($navElements)

  $toogleButton1.addEventListener("click", function(e) {
    // toogleActiveClass($toogleButton1);
    toogleActiveClass($toogleButton1,'active')
    setBackground()
  });

  $navElements.forEach($navElement =>
    $navElement.addEventListener("click", function(e) {
      e.preventDefault();
      let href = $navElement.getAttribute("href");
      renderOnClick(href);
    })
  );
}

function renderOnClick(href) {
  let $routes = document.querySelectorAll("[data-route]");
  console.log($routes);
  $routes.forEach($route => {
    if ($route.getAttribute("data-route") == href) {
      $route.style.display = "block";
    } else {
      $route.style.display = "none";
    }
  });
}

function initialRender() {
  listenForClicks();
  renderOnClick("/");
}

initialRender();

function toogleActiveClass(el,className) 
{
  el.classList.toggle(className)
}

function changeBackground() {

}


function setBackground() {
if($toogleButton1.classList.contains('active')) {
  console.log('night')
  $root.style.setProperty('--bg-img','url(images/night.jpg');
} else {
  console.log('day')
  $root.style.setProperty('--bg-img','url(images/day.jpg');
}
}




