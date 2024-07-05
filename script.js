const drop = document.getElementById("drop");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");

// for navbar dropdown
let isDrop = false;
drop.addEventListener("click", () => {
  if (isDrop) {
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
  } else {
    closeIcon.classList.remove("hidden");
    openIcon.classList.add("hidden");
  }
  isDrop = !isDrop;
});

// for navbar sticky mode
window.addEventListener("scroll", () => {
  document.getElementById("head").classList.toggle("sticky", window.scrollY > 0);
});
