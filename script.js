const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", ()=>{
  nav.classList.toggle("active");
});

/* MOBILE DROPDOWN */
document.querySelectorAll(".drop-btn").forEach(btn=>{
  btn.addEventListener("click", function(e){
    if(window.innerWidth <= 900){
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});