import { Box, Button } from "@mui/material";

export function Meme(props) {
	return (
		<Box>
			<Box sx={{ margin: "24px" }}>
				<img src={process.env.PUBLIC_URL + props.img} style={{ maxWidth: "400px" }} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button variant="contained" color="success">
					↑ [{props.upvotes}]
				</Button>
				<Button variant="contained" color="error">
					↓ [{props.downvotes}]
				</Button>
			</Box>
		</Box>
	);
}
