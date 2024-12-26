document.addEventListener("DOMContentLoaded", () => {
 const violatorsChartCtx = document
  .getElementById("violatorsChart")
  .getContext("2d");
 const violationsChartCtx = document
  .getElementById("violationsChart")
  .getContext("2d");

 const violatorsChart = new Chart(violatorsChartCtx, {
  type: "bar",
  data: {
   labels: ["January", "February", "March", "April", "May", "June"],
   datasets: [
    {
     label: "Number of Violators",
     data: [12, 19, 3, 5, 2, 3],
     backgroundColor: "rgba(54, 162, 235, 0.2)",
     borderColor: "rgba(54, 162, 235, 1)",
     borderWidth: 1,
    },
   ],
  },
  options: {
   scales: {
    y: {
     beginAtZero: true,
    },
   },
  },
 });

 const violationsChart = new Chart(violationsChartCtx, {
  type: "pie",
  data: {
   labels: ["Pending", "Resolved"],
   datasets: [
    {
     label: "Violations",
     data: [10, 20],
     backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
     borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
     borderWidth: 1,
    },
   ],
  },
 });
});
