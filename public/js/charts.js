/* globals Chart */
$(function () {
    var bar = {};
    var pie = {};

    $.ajax({
        method: "GET",
        async: false,
        url: "/chart",
        success: function (res) {
            bar = res.barData;
            pie = res.pieData;
        },
        error: function (err) {
            throw new Error(err.message);
        }
    });

    new Chart($(bar.id), {
        "type": "bar",
        "data": {
            "labels": bar.labels,
            "datasets": [{
                "backgroundColor": [
                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2",
                    "#071a38", "#b21d0c", "#0af702", "#a117a8", "#747ea5", "#755ea5"
                ],
                "data": bar.data
            }]
        },
        "options": {
            "scales": {
                "yAxes": [{
                    "display": true,
                    "ticks": {}
                }]
            },
            "legend": {
                "display": false
            },
            "title": {
                "display": true,
                "text": bar.title
            }
        }
    });

    new Chart($(pie.id), {
        type: "pie",
        data: {
            labels: pie.labels,
            datasets: [{
                label: "Population",
                backgroundColor: [
                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#c70850"
                ],
                data: pie.data
            }]
        },
        options: {
            title: {
                display: true,
                text: pie.title
            }
        }
    });
});
