var slowInternet = window.setTimeout(function() {
  alert(
    "Sorry Cannot Load the Content !! Your Internet Connection is very slow !!"
  );
}, 10);

window.addEventListener(
  "load",
  function() {
    window.clearTimeout(slowInternet);
  },
  false
);
