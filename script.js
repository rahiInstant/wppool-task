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
const tbody = document.getElementById("tbody");

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

// All companies section: table row

const companiesData = [
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    "market cap ($b)": "$50.5",
    "revenue growth": "49.0%",
    "gross margin": "15.8%",
    "ev/revenue": "6.3",
    "ytd performance": "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    "market cap ($b)": "$4.7",
    "revenue growth": "32.0%",
    "gross margin": "48.7%",
    "ev/revenue": "4.9",
    "ytd performance": "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    "market cap ($b)": "$1.5",
    "revenue growth": "34.0%",
    "gross margin": "53.0%",
    "ev/revenue": "7.0",
    "ytd performance": "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    "market cap ($b)": "$2.0",
    "revenue growth": "27.0%",
    "gross margin": "61.5%",
    "ev/revenue": "6.0",
    "ytd performance": "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    "market cap ($b)": "$0.1",
    "revenue growth": "38%",
    "gross margin": "--",
    "ev/revenue": "0.4",
    "ytd performance": "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    "market cap ($b)": "$3.1",
    "revenue growth": "-22.0%",
    "gross margin": "38.2%",
    "ev/revenue": "2.6",
    "ytd performance": "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    "market cap ($b)": "$50.5",
    "revenue growth": "49.0%",
    "gross margin": "15.8%",
    "ev/revenue": "6.3",
    "ytd performance": "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    "market cap ($b)": "$4.7",
    "revenue growth": "32.0%",
    "gross margin": "48.7%",
    "ev/revenue": "4.9",
    "ytd performance": "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    "market cap ($b)": "$1.5",
    "revenue growth": "34.0%",
    "gross margin": "53.0%",
    "ev/revenue": "7.0",
    "ytd performance": "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    "market cap ($b)": "$2.0",
    "revenue growth": "27.0%",
    "gross margin": "61.5%",
    "ev/revenue": "6.0",
    "ytd performance": "10.5%",
  },
];

for (let value of companiesData) {
  const tableRow = document.createElement("tr");
  tableRow.classList = `[&>*]:p-4 [&>*:first-child]:text-left [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg`;
  for (let values in value) {
    console.log(values);
    const tableData = document.createElement("td");
    tableData.innerText = value[values];
    tableData.className = "";
    tableRow.appendChild(tableData);
  }
  tbody.appendChild(tableRow);
}
