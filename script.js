const drop = document.getElementById("drop");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
const navDown = document.getElementById("nav-down");
const myChart = document.getElementById("myChart");
const carousel = document.getElementById("carousel");
const arrow = document.querySelectorAll(".arrow");
const cardWidth = document.getElementById("card").offsetWidth;
const showCurrent = document.getElementById("show-current");
document.getElementById("total-slide").innerText = carousel.children.length;
const container = document.getElementById("my-chart");

// for navbar dropdown
let isDrop = false;

openIcon.addEventListener("click", () => {
  navDown.classList.remove("opacity-0");
  navDown.classList.remove("pointer-events-none");
});

closeIcon.addEventListener("click", () => {
  navDown.classList.add("opacity-0");
  navDown.classList.add("pointer-events-none");
});

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    !openIcon.contains(e.target) &&
    !closeIcon.contains(e.target) &&
    !navDown.contains(e.target)
  ) {
    navDown.classList.add("opacity-0");
    navDown.classList.add("pointer-events-none");
  }
});

// for navbar sticky mode
window.addEventListener("scroll", () => {
  document
    .getElementById("head")
    .classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById("down").addEventListener("click", () => {
  document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
});

// for chart
function randomValue() {
  const arr = [];
  let prev = 100;
  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    arr.push({ x: i, y: prev });
  }
  return arr;
}

function datasets() {
  const store = [];
  const companies = ["Google", "Meta", "Amazon", "Yahoo"];
  for (const company of companies) {
    store.push({
      label: company,
      borderWidth: 1.5,
      radius: 0,
      data: randomValue(),
    });
  }
  return store;
}

const option = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      type: "linear",
    },
  },
};

new Chart(myChart, {
  type: "line",
  data: { datasets: datasets() },
  options: option,
});

// for slider

let isDragging = false,
  startX,
  startScrollLeft;

// function currentSlider() {
//   currentCardNumber =
//     carousel.children.length -
//     Math.round((carousel.scrollWidth - startScrollLeft) / cardWidth) +
//     1;
//   showCurrent.innerText = `${currentCardNumber} and ${currentCardNumber + 1}`;
// }

arrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "L" ? -cardWidth : cardWidth;
    startScrollLeft = carousel.scrollLeft;
    currentSlider();
  });
});

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft + (startX - e.pageX) * 6;
  currentSlider();
};
const dragStop = () => {
  isDragging = false;
};
const infiniteScroll = () => {};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
