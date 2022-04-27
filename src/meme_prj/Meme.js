import { Box, Button } from "@mui/material";

export function Meme(props) {
	return (
		<Box sx={{ borderRadius:"12px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", margin: "10px 0", padding: "10px 0" }}>
			<Box sx={{ margin: "24px" }}>
				<img src={process.env.PUBLIC_URL + props.img} style={{ maxWidth: "100%" }} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
				<Button variant="contained" color="success" onClick={() => props.upvote(props.title)} sx={{margin:"0 10px"}}>
					↑ [{props.upvotes}]
				</Button>
				<Button variant="contained" color="secondary" onClick={() => props.downvote(props.title)} sx={{margin:"0 10px"}}>
					↓ [{props.downvotes}]
				</Button>
			</Box>
		</Box>
	);
}
