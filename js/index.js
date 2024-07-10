const routes = {
   "/": "/pages/home.html",
   "/universe": "/pages/universe.html",
   "/exploration": "/pages/exploration.html",
   404: "/pages/404.html"
}

function route(event) {
   event = event || window.event
   event.preventDefault()

   window.history.pushState({}, "", event.target.href) // captura todo o href do evento alvo e coloca no historico

   handle()
}

function handle() {
   const { pathname } = window.location
   const route = routes[pathname] || routes[404]

   fetch(route)
   .then(data => data.text())
   .then(html => {
      document.getElementById("app").innerHTML = html
   })
}

window.onpopstate = () => handle()
handle()