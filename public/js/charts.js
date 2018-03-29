$(function () {
    console.log($('body'));
    const response = {};

    $.ajax({
        method: 'POST',
        async: false,
        url: '/api/chart',
        error: function (err) {
            console.log(err);
        },
        success: function (res) {
            response.data = res.productsData;
            response.labels = res.productsLabels;
            response.elementID = res.productsID;
            response.elementTitle = res.productsTitle;
        }
    });

    var bar = new Chart($(response.elementID), {
        "type": "bar",
        "data": {
            "labels": response.labels,
            "datasets": [{
                "backgroundColor": [
                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2"
                ],
                "data": response.data
            }]
        },
        "options": {
            "scales": {
                "yAxes": [{
                    "display": true,
                    "ticks": {
                        // suggestedMin: 0,
                        // beginAtZero: true
                    }
                }]
            },
            "legend": {
                "display": false
            },
            "title": {
                "display": true,
                "text": response.elementTitle
            }
        }
    });
});
