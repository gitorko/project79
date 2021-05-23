$(function() {

    var backgroundColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
    ];

    var borderColors = [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
    ];

    $.getJSON("/rest/pie-data", function(json) {
        new Chart(document.getElementById("piechartContainer"), {
            type: 'pie',
            data: {
                labels: json[0],
                datasets: [{
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Pie Chart'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });

    $.getJSON("/rest/pie-data", function(json) {
        new Chart(document.getElementById("barchartContainer"), {
            type: 'bar',
            data: {
                labels: json[0],
                datasets: [{
                    label: 'My First Dataset',
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Bar Chart'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });

    $.getJSON("/rest/pie-data", function(json) {
        new Chart(document.getElementById("linechartContainer"), {
            type: 'line',
            data: {
                labels: json[0],
                datasets: [{
                    label: 'My First Dataset',
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    fill: false,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[1]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Line Chart'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });

    $.getJSON("/rest/column-data", function(json) {
        new Chart(document.getElementById("stackchartContainer"), {
            type: 'bar',
            data: {
                labels: json[0]["data"],
                datasets: [{
                    label: json[1]["name"],
                    backgroundColor: backgroundColors[0],
                    borderColor: borderColors[0],
                    fill: false,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[1]["data"]
                },{
                    label: json[2]["name"],
                    backgroundColor: backgroundColors[1],
                    borderColor: borderColors[1],
                    fill: false,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[2]["data"]
                },{
                    label: json[3]["name"],
                    backgroundColor: backgroundColors[2],
                    borderColor: borderColors[2],
                    fill: false,
                    borderWidth: 1,
                    hoverOffset: 4,
                    data: json[3]["data"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Stack Chart'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    });

});
