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
				<Grid item xs={2} sx={{ backgroundColor: "#EFEFEF" }}>
					<Link to="/hot">
						<Button variant="contained">Hot</Button>
					</Link>
					<br />
					<Link to="/regular">Regular</Link>
				</Grid>
				<Grid item xs={10} container>
					<Grid item xs={4}></Grid>
					<Grid item xs={4}>
						<Routes>
							<Route path="/regular" element={<RegularMemes memesArrayProps={memes} />} />
							<Route path="/hot" element={<HotMemes memesArrayProps={memes} />} />
						</Routes>
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
