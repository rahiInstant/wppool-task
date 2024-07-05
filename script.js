const drop = document.getElementById("drop");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
const myChart = document.getElementById("myChart");


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
    arr.push(Math.floor(((Math.random() * 22) * 100) / 22));
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
