document.addEventListener("DOMContentLoaded", () => {
	var options = {
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: [
				"South Korea",
				"Canada",
				"United Kingdom",
				"Netherlands",
				"Italy",
				"France",
				"Japan",
				"United States",
				"China",
				"Germany",
			],
		},
	};

	var chart = new ApexCharts(document.querySelector("#min"), options);
	chart.render();
});
