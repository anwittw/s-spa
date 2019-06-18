function listenForClicks() {
  let $navElements = document.querySelectorAll("#nav-elements>a");
  // console.log($navElements)
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
