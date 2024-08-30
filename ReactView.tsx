import * as React from "react";
import Grid from "@mui/material/Grid2";
import ReactMarkdown from "react-markdown";
interface ReactViewProps {
	content: string;
}

export const ReactView: React.FC<ReactViewProps> = ({ content }) => {
	const gridsText = content.split("\n")[0];
	const grids = gridsText.split(",").map((x) => Number.parseInt(x.trim()));
	const boxes = content.split("---").slice(1);
	if (boxes.length !== grids.length) {
		return (
			<div>
				Error: The number of boxes does not match the number of grids.
			</div>
		);
	} else {
		return (
			<Grid container>
				{Array.from({ length: grids.length }).map((_, i) => (
					<Grid size={grids[i]} key={i}>
						<ReactMarkdown>{boxes[i]}</ReactMarkdown>
					</Grid>
				))}
			</Grid>
		);
	}
};
