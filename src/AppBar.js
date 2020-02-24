import Typography from "@material-ui/core/Typography";
import React from "react";
import {styles} from "./style";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

export default function AppBarGrid() {
    const classes = styles();

    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Features
                    </Link>

                </nav>
                <Button href="#" color="primary" variant="outlined" className={classes.link}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>

    )
}
