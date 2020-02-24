import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarGrid from "./AppBar";
import GridData from "./grid";
import ButtonGrid from "./Button";
import CheckBoxGrid from "./Checkbox";
import RadioGrid from "./RadioGrid";
import FormGrid from "./FormGrid";
import CardGrid from "./CardGrid";

function App() {
    return (
        <div className="App">
            <CssBaseline/>

            <AppBarGrid/>

            <GridData/>

            <ButtonGrid/>

            <CheckBoxGrid/>

            <RadioGrid/>

            <FormGrid/>

            <CardGrid/>
        </div>
    );
}


export default App;
