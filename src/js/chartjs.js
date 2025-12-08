import { Chart } from "chart.js";

//Graph #01
let graphique01 = new Chart(document.querySelector(".chart-01"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: ["#f4f2ef", "#7a736d", "#5a5048", "#556149"],
        hoverOffset: 20,
        borderWidth: 0,
        borderRadius: 1,
        spacing: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  },
});
//Animation for graph #01
setInterval(() => {
  for (let ds of graphique01.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 20);
    }
  }
  graphique01.update();
}, 1000);

//Graph #02
let graphique02 = new Chart(document.querySelector(".chart-02"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: ["#556149", "#7a736d", "#f4f2ef", "#5a5048"],
        hoverOffset: 20,
        borderWidth: 0,
        borderRadius: 1,
        spacing: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  },
});

//Animation for graph #02
setInterval(() => {
  for (let ds of graphique02.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 20);
    }
  }
  graphique02.update();
}, 1000);

//Graph #03
let graphique03 = new Chart(document.querySelector(".chart-03"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: ["#7a736d", "#5a5048", "#556149", "#f4f2ef"],
        hoverOffset: 20,
        borderWidth: 0,
        borderRadius: 1,
        spacing: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  },
});
//Animation for graph #03
setInterval(() => {
  for (let ds of graphique03.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i] = Math.round(Math.random() * 20);
    }
  }
  graphique03.update();
}, 1000);