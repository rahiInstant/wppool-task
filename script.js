const drop = document.getElementById("drop");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
const myChart = document.getElementById("myChart");
const carousel = document.getElementById("carousel");
const arrow = document.querySelectorAll(".arrow");
const cardWidth = document.getElementById("card").offsetWidth;
const showCurrent = document.getElementById("show-current");
document.getElementById("total-slide").innerText = carousel.children.length;

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
  document
    .getElementById("head")
    .classList.toggle("sticky", window.scrollY > 0);
});

// for chart
function randomValue() {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor((Math.random() * 22 * 100) / 22));
  }
  return arr;
}

const xValues = ["Feb", "Mar", "Apr", "Jun", "July"];
const yValues01 = [...randomValue()];
const yValues02 = [...randomValue()];

new Chart(myChart, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues01,
      },
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues02,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 100 } }],
    },
  },
});

// for slider

let isDragging = false,
  startX,
  startScrollLeft;

function currentSlider() {
  currentCardNumber =
    carousel.children.length -
    Math.round((carousel.scrollWidth - startScrollLeft) / cardWidth) +
    1;
  showCurrent.innerText = `${currentCardNumber} and ${currentCardNumber + 1}`;
}

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
  carousel.scrollLeft = startScrollLeft + (startX - e.pageX)*6;
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
