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
  
  buttonsTrafficUl.addEventListener("click", function (e) {
    const letter = document.querySelectorAll(".buttons-traffic-link");
    for (let i = 0; i < letter.length; i++) {
      letter[i].classList.remove("active");
    }
    if (event.target.tagName === "LI") {
      let button = event.target;
      button.className += " active";
      const letterFound = button.classList;
      for (let i = 0; i < letterFound.length; i++) {
        if (letterFound[i] === "hourly") {
          trafficChart.data.labels = [
            "7am",
            "8am",
            "9am",
            "10am",
            "11am",
            "12pm",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm"
          ];
          trafficChart.data.datasets[0].data = [
            20,
            37,
            45,
            42,
            30,
            34,
            46,
            49,
            35,
            39,
            29
          ];
          trafficChart.update();
        } else if (letterFound[i] === "daily") {
          trafficChart.data.labels = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ];
          trafficChart.data.datasets[0].data = [
            380,
            340,
            320,
            370,
            340,
            330,
            300
          ];
          trafficChart.update();
        } else if (letterFound[i] === "weekly") {
          trafficChart.data.labels = [
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
          ];
          trafficChart.data.datasets[0].data = [
            750,
            1250,
            1000,
            1100,
            1450,
            1250,
            1000,
            1650,
            2000,
            1700,
            2200
          ];
          trafficChart.update();
        } else if (letterFound[i] === "monthly") {
          trafficChart.data.labels = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          trafficChart.data.datasets[0].data = [
            21750,
            23250,
            22000,
            24800,
            19450,
            22250,
            21000,
            23000,
            28000,
            22700,
            25200,
            23000
          ];
          trafficChart.update();
        }
      }
    }
  });
  //End Traffic Widget
  //Daily Traffic Widget
const dailyWidget = document.querySelector("#daily-chart");

let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [100, 50, 200, 120, 170, 70, 245],
      backgroundColor: [
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0",
        "#7279C0"
      ],
      borderWidth: 1
    }
  ]
};

let dailyOptions = {
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

let dailyChart = new Chart(dailyWidget, {
  type: "bar",
  data: dailyData,
  options: dailyOptions
});
//End Daily Traffic Widget

//mobile widget
const mobileWidget = document.querySelector("#mobile-users-chart");

let mobileData = {
  labels: ["Phones", "Tablets", "Desktop"],
  datasets: [
    {
      data: [100, 50, 200],
      backgroundColor: [
        "#7DCD8A",
        "#6AB2B9",
        "#7279C0"
      ],
      borderWidth: 0
    }
  ]
};

let mobileOptions = {
  legend: {
    display: true,
    position: "right",

    labels: {
      boxWidth: 20,
      fontSize: 15,
      precision: 2
    }
  }
};

let mobileChart = new Chart(mobileWidget, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions
});