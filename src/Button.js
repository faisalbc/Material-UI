import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {styles} from "./style";
import Button from "@material-ui/core/Button";

export default function ButtonGrid() {
    const classes = styles();

    return (

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h5" component="h5">
                Button
            </Typography>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>

        </Container>

    )
}
