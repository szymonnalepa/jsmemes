//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { memesArray } from "./meme_prj/memesArray.js";
import { HotMemes } from "./meme_prj/HotMemes";
import { RegularMemes } from "./meme_prj/RegularMemes";
import { useEffect } from "react";
import { setMemes } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setMemes(memesArray));
	}, []);
	const memes = useSelector((state) => state.memes);
	return (
		<div className="App">
			<Grid container sx={{ minHeight: "100vh" }}>
				<Grid item xs={2} sx={{ background:"linear-gradient(to right, #eaeaea, #ada996);", padding:"24px 0" }}>
					<Link to="/hot" style={{ textDecoration: "none" }}>
						<Button variant="contained" color="error">
							Hot
						</Button>
					</Link>
					<br />
					<Link style={{ textDecoration: "none" }} to="/regular">
						<Button variant="contained" style={{ margin: "24px 0 0 0" }}>
							Regular
						</Button>
					</Link>
				</Grid>
				<Grid item xs={10} container sx={{background:"linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"}}>
					<Grid item xs={0} md={3} lg={4}></Grid>
					<Grid item xs={12} md={6} lg={4}>
						<Routes>
							<Route path="/regular" element={<RegularMemes memesArrayProps={memes} />} />
							<Route path="/hot" element={<HotMemes memesArrayProps={memes} />} />
						</Routes>
					</Grid>
					<Grid item xs={0} md={3} lg={4}></Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
