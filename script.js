// javascript para el desplazamiento de la barra superior
const navbar = document.getElementById('navbar')
const onScroll = () => {
	const scroll = document.documentElement.scrollTop

	if (scroll >= 80) {
		navbar.classList.add("navFixed");
	}else{
		navbar.classList.remove("navFixed");
	}
}
window.addEventListener('scroll', onScroll)

// 
const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const Visible = "is-visible";

for (const el of openModal){
	el.addEventListener("click", function(){
		console.log('estoy aqui');
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(Visible);
	});
}

for (const el of closeModal) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(Visible);
  });
}

// If document click off modal
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(Visible);
  }
});

// if we press the ESC
document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(Visible);
  }
});