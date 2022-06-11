import { MemeList } from "./MemeList";
import { Typography } from "@mui/material";

export function RegularMemes(props) {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Regular memes
      </Typography>
      <MemeList
        memesArrayProps={props.memesArrayProps.filter(
          (item) => item.upvotes - item.downvotes <= 5
        )}
      ></MemeList>
    </div>
  );
}
