document.addEventListener("DOMContentLoaded", () => {

	var weeklyOptions = {
		series: [
			{
				name: "Week 4",
				data: [
					{
						x: "Sun - 07/16/23",
						y: 50283,
					},
					{
						x: "Mon - 07/17/23",
						y: 51082,
					},
					{
						x: "Tue - 07/18/23",
						y: 50063,
					},
					{
						x: "Wed - 07/19/23",
						y: 52203,
					},
					{
						x: "Thu - 07/20/23",
						y: 50187,
					},
					{
						x: "Fri - 07/21/23",
						y: 49958,
					},
					{
						x: "Sat - 07/22/23",
						y: 50863,
					},
				],
			},
			{
				name: "Week 3",
				data: [
					{
						x: " - 07/16/23",
						y: 50283,
					},
					{
						x: "Mon - 07/17/23",
						y: 51082,
					},
					{
						x: "Tue - 07/18/23",
						y: 50063,
					},
					{
						x: "Wed - 07/19/23",
						y: 52203,
					},
					{
						x: "Thu - 07/20/23",
						y: 50187,
					},
					{
						x: "Fri - 07/21/23",
						y: 49958,
					},
					{
						x: "Sat - 07/22/23",
						y: 50863,
					},
				],
			},
			{
				name: "Week 2",
				data: [
					{
						x: "Sun - 07/16/23",
						y: 50283,
					},
					{
						x: "Mon - 07/17/23",
						y: 51082,
					},
					{
						x: "Tue - 07/18/23",
						y: 50063,
					},
					{
						x: "Wed - 07/19/23",
						y: 52203,
					},
					{
						x: "Thu - 07/20/23",
						y: 50187,
					},
					{
						x: "Fri - 07/21/23",
						y: 49958,
					},
					{
						x: "Sat - 07/22/23",
						y: 50863,
					},
				],
			},
			{
				name: "Week 1",
				data: [
					{
						x: "Sun - 07/16/23",
						y: 50283,
					},
					{
						x: "Mon - 07/17/23",
						y: 51082,
					},
					{
						x: "Tue - 07/18/23",
						y: 50063,
					},
					{
						x: "Wed - 07/19/23",
						y: 52203,
					},
					{
						x: "Thu - 07/20/23",
						y: 50187,
					},
					{
						x: "Fri - 07/21/23",
						y: 49958,
					},
					{
						x: "Sat - 07/22/23",
						y: 50863,
					},
				],
			},
		],
		chart: {
			height: 350,
			type: "heatmap",
		},
		dataLabels: {
			enabled: true,
		},
		colors: ["#008FFB"],
		title: {
			text: "HeatMap Chart (Week View) -- Color Ranges",
		},
		legend: {
			show: true,
		},
	};

	var weeklyChart = new ApexCharts(
		document.querySelector("#weekly"),
		weeklyOptions
	);
	weeklyChart.render();
});
