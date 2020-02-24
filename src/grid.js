import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from "./style";

export default function GridData() {
    const classes = styles();

    return (


        <Container maxWidth="sm" component="main" className={classes.heroContent}>

            <Typography variant="h5" component="h5">
                Grid
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Grid</Paper>
                </Grid>
            </Grid>

        </Container>
    )
}
