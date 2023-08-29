
var ctx = document.getElementById('myChart');






new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
    datasets: [{
      
      data: [5, 7, 6,8, 4, 3, 4, 6, 9],
      borderWidth: 1 ,
      borderColor : '#8A74F9',
      backgroundColor: '#8A74F943'
   
  
    }]
  },
  options: {
    scales: {
      yAxes: [{
        display: true,
    }]
    ,
         xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            padding: 10,
            autoSkip: false,
            maxRotation: 15,
            minRotation: 15
          }
        }
      ],
    },
    plugins: {
      legend: false // Hide legend
  }
  }
});