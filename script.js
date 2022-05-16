const btnMobile = document.getElementById("btn")

function menuMobile(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("active")
}

btnMobile.addEventListener("click", menuMobile)


