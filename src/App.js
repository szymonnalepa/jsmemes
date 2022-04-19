//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { memesArray } from "./meme_prj/memesArray.js";
import { HotMemes } from "./meme_prj/HotMemes";
import { RegularMemes } from "./meme_prj/RegularMemes";

function App() {
	return (
		<div className="App">
			<Grid container>
				<Grid item xs={2}>
					<Link to="/">Main</Link>
					<br />
					<Link to="/hot">Hot</Link>
					<br />
					<Link to="/regular">Regular</Link>
				</Grid>
				<Grid item xs={10} container>
					<Grid item xs={4}></Grid>
					<Grid item xs={4}>
						<Routes>
							<Route
								path="/" //element={}
							/>
							<Route path="/regular" element={<RegularMemes memesArrayProps={memesArray} />} />
							<Route path="/hot" element={<HotMemes memesArrayProps={memesArray} />} />
						</Routes>
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
