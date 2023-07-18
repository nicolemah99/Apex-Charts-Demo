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

	var hourlyOptions = {
		series: [
			{
				name: "Hour",
				data: [
					{
						x: "12AM",
						y: 1876.9,
					},
					{
						x: "1AM",
						y: 1811.69,
					},
					{
						x: "2AM",
						y: 1775.28,
					},
					{
						x: "3AM",
						y: 1742.16,
					},
					{
						x: "4AM",
						y: 1708.76,
					},
					{
						x: "5AM",
						y: 1753.73,
					},
					{
						x: "6AM",
						y: 1841,
					},
					{
						x: "7AM",
						y: 2023.68,
					},
					{
						x: "8AM",
						y: 2187.39,
					},
					{
						x: "9AM",
						y: 2227.7,
					},
					{
						x: "10AM",
						y: 2276.34,
					},
					{
						x: "11AM",
						y: 2322.62,
					},
					{
						x: "12PM",
						y: 2372.28,
					},
					{
						x: "1PM",
						y: 2413.7,
					},
					{
						x: "2PM",
						y: 2375.22,
					},
					{
						x: "3PM",
						y: 2358.39,
					},
					{
						x: "4PM",
						y: 2400.51,
					},
					{
						x: "5PM",
						y: 2361.39,
					},
					{
						x: "6PM",
						y: 2295.82,
					},
					{
						x: "7PM",
						y: 2209.27,
					},
					{
						x: "8PM",
						y: 2138.59,
					},
					{
						x: "9PM",
						y: 2086.74,
					},
					{
						x: "10PM",
						y: 2013.54,
					},
					{
						x: "11PM",
						y: 1941.17,
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
			text: "HeatMap Chart -- Default Gradient",
		},
	};

	var hourlyChart = new ApexCharts(
		document.querySelector("#hourly"),
		hourlyOptions
	);
	hourlyChart.render();

	var hourlyOptions2 = {
		series: [
			{
				name: "Hour",
				data: [
					{
						x: "00",
						y: 1876.9,
					},
					{
						x: "01",
						y: 1811.69,
					},
					{
						x: "02",
						y: 1775.28,
					},
					{
						x: "03",
						y: 1742.16,
					},
					{
						x: "04",
						y: 1708.76,
					},
					{
						x: "05",
						y: 1753.73,
					},
					{
						x: "06",
						y: 1841,
					},
					{
						x: "07",
						y: 2023.68,
					},
					{
						x: "08",
						y: 2187.39,
					},
					{
						x: "09",
						y: 2227.7,
					},
					{
						x: "10",
						y: 2276.34,
					},
					{
						x: "11",
						y: 2322.62,
					},
					{
						x: "12",
						y: 2372.28,
					},
					{
						x: "13",
						y: 2413.7,
					},
					{
						x: "14",
						y: 2375.22,
					},
					{
						x: "15",
						y: 2358.39,
					},
					{
						x: "16",
						y: 2400.51,
					},
					{
						x: "17",
						y: 2361.39,
					},
					{
						x: "18",
						y: 2295.82,
					},
					{
						x: "19",
						y: 2209.27,
					},
					{
						x: "20",
						y: 2138.59,
					},
					{
						x: "21",
						y: 2086.74,
					},
					{
						x: "22",
						y: 2013.54,
					},
					{
						x: "23",
						y: 1941.17,
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
		plotOptions: {
			heatmap: {
				colorScale: {
					ranges: [
						{
							from: 1000,
							to: 1800,
							color: "#00A100",
							name: "low",
						},
						{
							from: 1801,
							to: 2199,
							color: "#128FD9",
							name: "medium",
						},
						{
							from: 2200,
							to: 4500,
							color: "#FFB200",
							name: "high",
						},
					],
				},
			},
		},
		title: {
			text: "HeatMap Chart -- Color Ranges",
		},
        legend:{
            show: true,
        }
	};

	var hourlyChart2 = new ApexCharts(
		document.querySelector("#hourly2"),
		hourlyOptions2
	);
	hourlyChart2.render();

	var hourlyOptions3 = {
		series: [
			{
				name: "Hour",
				data: [
					{
						x: "00",
						y: 1876.9,
					},
					{
						x: "01",
						y: 1811.69,
					},
					{
						x: "02",
						y: 1775.28,
					},
					{
						x: "03",
						y: 1742.16,
					},
					{
						x: "04",
						y: 1708.76,
					},
					{
						x: "05",
						y: 1753.73,
					},
					{
						x: "06",
						y: 1841,
					},
					{
						x: "07",
						y: 2023.68,
					},
					{
						x: "08",
						y: 2187.39,
					},
					{
						x: "09",
						y: 2227.7,
					},
					{
						x: "10",
						y: 2276.34,
					},
					{
						x: "11",
						y: 2322.62,
					},
					{
						x: "12",
						y: 2372.28,
					},
					{
						x: "13",
						y: 2413.7,
					},
					{
						x: "14",
						y: 2375.22,
					},
					{
						x: "15",
						y: 2358.39,
					},
					{
						x: "16",
						y: 2400.51,
					},
					{
						x: "17",
						y: 2361.39,
					},
					{
						x: "18",
						y: 2295.82,
					},
					{
						x: "19",
						y: 2209.27,
					},
					{
						x: "20",
						y: 2138.59,
					},
					{
						x: "21",
						y: 2086.74,
					},
					{
						x: "22",
						y: 2013.54,
					},
					{
						x: "23",
						y: 1941.17,
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
		plotOptions: {
			heatmap: {
				colorScale: {
					ranges: [
						{
							from: 1700,
							to: 1737.5,
							color: "#f2f2ff",
						},
						{
							from: 1737.6,
							to: 1775,
							color: "#e6e6ff",
						},
						{
							from: 1737.6,
							to: 1775,
							color: "#d9d9ff",
						},
						{
							from: 1775.1,
							to: 1812.5,
							color: "#ccccff",
						},
						{
							from: 1812.6,
							to: 1850,
							color: "#bfbfff",
						},
						{
							from: 1850.1,
							to: 1887.5,
							color: "#b3b3ff",
						},
						{
							from: 1887.6,
							to: 1925,
							color: "#a6a6ff",
						},
						{
							from: 1925.1,
							to: 1962.5,
							color: "#9999ff",
						},
						{
							from: 1962.6,
							to: 2000,
							color: "#8c8cff",
						},
						{
							from: 2000.1,
							to: 2037.5,
							color: "#8080ff",
						},
						{
							from: 2037.6,
							to: 2075,
							color: "#7373ff",
						},
						{
							from: 2075.1,
							to: 2112.5,
							color: "#6666ff",
						},
						{
							from: 2112.6,
							to: 2150,
							color: "#5959ff",
						},
						{
							from: 2150.1,
							to: 2187.5,
							color: "#4d4dff",
						},
						{
							from: 2187.6,
							to: 2225,
							color: "#4040ff",
						},
						{
							from: 2225.1,
							to: 2262.5,
							color: "#3333ff",
						},
						{
							from: 2262.6,
							to: 2300,
							color: "#2626ff",
						},
						{
							from: 2300.1,
							to: 2337.5,
							color: "#1919ff",
						},
						{
							from: 2337.6,
							to: 2375,
							color: "#0d0dff",
						},
						{
							from: 2375.1,
							to: 2415,
							color: "#0000ff",
						},
					],
				},
			},
		},
		title: {
			text: "HeatMap Chart -- Custom Gradient",
		},
	};

	var hourlyChart3 = new ApexCharts(
		document.querySelector("#hourly3"),
		hourlyOptions3
	);
	hourlyChart3.render();
});
