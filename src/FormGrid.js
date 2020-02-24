import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {styles} from "./style";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

export default function FormGrid() {
    const classes = styles();

    return (

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography variant="h5" component="h5">
                Form
            </Typography>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    ),
                }}
            />

        </Container>
    )
}
