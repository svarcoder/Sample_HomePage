import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartHeader } from "./style";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	datasets: [
		{
			label: "# of Votes",
			data: [15, 12, 10, 15, 8, 4, 8, 3],
			backgroundColor: [
				"#4CC9F0",
				"#4895EF",
				"#4361EE",
				"#480CA8",
				"#9854E7",
				"#7209B7",
				"#B5179E",
				"#F72585",
			],
			borderColor: [
				"#4CC9F0",
				"#4895EF",
				"#4361EE",
				"#480CA8",
				"#9854E7",
				"#7209B7",
				"#B5179E",
				"#F72585",
			],
			borderWidth: 1,
		},
	],
};

export function Donut() {
	return (
		<ChartHeader>
			<Doughnut
				data={data}
				options={{
					aspectRatio: 1,
					responsive: true,
					maintainAspectRatio: true,
				}}
			/>
		</ChartHeader>
	);
}
