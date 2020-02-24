import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {styles} from "./style";
import Radio from "@material-ui/core/Radio";

export default function RadioGrid() {
    const classes = styles();

    return (

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h5" component="h5">
                Radio
            </Typography>
            <Radio
                checked={true}
                value="a"
                name="radio-button-demo"
                inputProps={{'aria-label': 'A'}}
            />
            <Radio
                checked={true}
                value="b"
                name="radio-button-demo"
                inputProps={{'aria-label': 'B'}}
            />
            <Radio
                checked={true}
                value="d"
                color="default"
                name="radio-button-demo"
                inputProps={{'aria-label': 'D'}}
            />
            <Radio
                checked={true}
                value="e"
                color="default"
                name="radio-button-demo"
                inputProps={{'aria-label': 'E'}}
                size="small"
            />

        </Container>

    )
}
