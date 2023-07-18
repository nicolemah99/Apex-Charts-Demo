document.addEventListener("DOMContentLoaded", () => {
	var monthlyOptions = {
		series: [
			{
				name: "Month",
				data: [
					{
						x: "Jan",
						y: 500000,
					},
					{
						x: "Feb",
						y: 450000,
					},
					{
						x: "Mar",
						y: 400000,
					},
					{
						x: "Apr",
						y: 350000,
					},
					{
						x: "May",
						y: 300000,
					},
					{
						x: "Jun",
						y: 250000,
					},
					{
						x: "Jul",
						y: 200000,
					},
					{
						x: "Aug",
						y: 200000,
					},
					{
						x: "Sep",
						y: 250000,
					},
					{
						x: "Oct",
						y: 300000,
					},
					{
						x: "Nov",
						y: 400000,
					},
					{
						x: "Dec",
						y: 450000,
					},
				],
			},
		],
		chart: {
			height: 350,
			type: "heatmap",
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#008FFB"],
		title: {
			text: "HeatMap Chart (Monthly)",
		},
	};

	var monthlyChart = new ApexCharts(
		document.querySelector("#monthly"),
		monthlyOptions
	);
	monthlyChart.render();
});
