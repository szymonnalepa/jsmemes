import { Typography } from "@mui/material";
import { Meme } from "./Meme";

export function HotMemes(props) {
	return (
		<div>
			<Typography variant="h4" gutterBottom component="div">Hot memes</Typography>
			{props.memes
				.filter((item) => item.upvotes - item.downvotes > 5)
				.map((item) => (
					<Meme {...item} upvote={props.upvote} downvote={props.downvote}/>
				))
			}
		</div>
	);
}
