import { MemeList } from "./MemeList";
import { Typography } from "@mui/material";

export function HotMemes(props) {
	return (
		<div>
			<Typography variant="h4" gutterBottom component="div">Hot memes</Typography>
			<MemeList memesArrayProps={props.memesArrayProps.filter((item) => item.upvotes - item.downvotes > 5)}></MemeList>
		</div>
	);
}
