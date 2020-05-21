import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    verticalAlign: "right",
    margin: "auto"
  },
MuiTypography: {
fontFamily: "Muli"
}
});

export function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function formUse() {
    if (state.checkedA) {
      return (
        <iframe
          title="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSewZ4VfFXDy2KTWOM5QdK48PS8d1J9IZpa_JPoau5YIsaH-vQ/viewform?embedded=true"
          width="640"
          height="750"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ margin: "auto" }}
        >
          Loading…
        </iframe>
      );
    }
  }

  const classes = useStyles();

  return (
    <div className="MuiTypography-body1">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              style={{
                color: "#e63946"
              }}
            />
          }
          className="MuiTypography-body1"
          label="Looking to get hired instead?"
          style={{
            // position: "absolute",
            // right: 20,
            // marginTop: -27,
            // fontFamily: "Muli",
            // Typography: "Playfair Display",
            margin: "auto"
          }}
        />
        <br />
        {formUse()}
      </FormGroup>
    </div>
  );
}
