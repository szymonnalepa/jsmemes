import { Meme } from "./Meme.js";

export function MemeList(props) {
	return props.memesArrayProps.map((item) => <Meme {...item} key={item.title}></Meme>);
}
