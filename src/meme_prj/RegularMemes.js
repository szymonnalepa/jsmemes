import { MemeList } from "./MemeList";

export function RegularMemes(props) {
	return <MemeList memesArrayProps={props.memesArrayProps.filter((item) => item.upvotes - item.downvotes < 5)}></MemeList>;
}
