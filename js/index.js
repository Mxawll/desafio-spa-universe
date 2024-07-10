const routes = {
   "/": "/pages/home.html",
   "/universe": "/pages/universe.html",
   "/exploration": "/pages/exploration.html",
   404: "/pages/404.html"
}

handle()
window.onpopstate = () => handle()
window.route = () => route()