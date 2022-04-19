import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { upvote, downvote } from "../store";

export function Meme(props) {
	const dispatch = useDispatch();
	return (
		<Box sx={{ border: "1px solid #ABABAB", margin: "10px 0" }}>
			<Box sx={{ margin: "24px" }}>
				<img src={process.env.PUBLIC_URL + props.img} style={{ maxWidth: "100%" }} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
				<Button variant="contained" color="success" onClick={() => dispatch(upvote(props.title))}>
					↑ [{props.upvotes}]
				</Button>
				<Button variant="contained" color="error" onClick={() => dispatch(downvote(props.title))}>
					↓ [{props.downvotes}]
				</Button>
			</Box>
		</Box>
	);
}
