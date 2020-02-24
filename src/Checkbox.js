import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {styles} from "./style";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckBoxGrid() {
    const classes = styles();

    return (

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h5" component="h5">
                Check box
            </Typography>
            <Checkbox
                checked={true}
                value="primary"
                inputProps={{'aria-label': 'primary checkbox'}}
            />
            <Checkbox
                defaultChecked
                value="secondary"
                color="primary"
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <Checkbox value="uncontrolled" inputProps={{'aria-label': 'uncontrolled-checkbox'}}/>
            <Checkbox disabled value="disabled" inputProps={{'aria-label': 'disabled checkbox'}}/>
            <Checkbox
                disabled
                checked
                value="disabled checked"
                inputProps={{'aria-label': 'disabled checked checkbox'}}
            />
            <Checkbox
                defaultChecked
                value="indeterminate"
                indeterminate
                inputProps={{'aria-label': 'indeterminate checkbox'}}
            />
            <Checkbox
                defaultChecked
                color="default"
                value="default"
                inputProps={{'aria-label': 'checkbox with default color'}}
            />
            <Checkbox
                defaultChecked
                size="small"
                value="small"
                inputProps={{'aria-label': 'checkbox with small size'}}
            />

        </Container>

    )
}
