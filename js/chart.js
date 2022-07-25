const trafficWidget = document.querySelector("#traffic-chart");

const buttonsTrafficUl = document.querySelector(".buttons-traffic-list");

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31"
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 1100, 1450, 1250, 1000, 1650, 2000, 1700, 2200],
      backgroundColor: ["rgba(114, 121, 192, 0.411)"],
      borderWidth: 2,
      lineTension: 0.1,
      pointRadius: 3,
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderColor: "rgb(115, 119, 191)"
    }
  ]
};

let trafficOptions = {
    responsive: true,
    aspectRatio: 2.5,
    animation: {
      duration: 1200
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: false
    }
  };
  
  let trafficChart = new Chart(trafficWidget, {
    type: "line",
    data: trafficData,
    options: trafficOptions
  });