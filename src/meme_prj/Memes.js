import { Typography } from "@mui/material";
import { Meme } from "./Meme";

export function Memes(props) {
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div">
                {props.title}
            </Typography>
            {props.memes
                .map((item) => (
                    <Meme {...item} upvote={props.upvote} downvote={props.downvote}/>
                ))
            }
        </div>
    );
}
