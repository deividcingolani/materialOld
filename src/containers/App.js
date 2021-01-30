import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import Paper from "material-ui/Paper";

import PropensityStudio from "../components/PropensityStudio";
const styles = {
  paperStyle: {
    minHeight: 600,
    width: 1200,
    margin: "20px auto",
    textAlign: "center",
  },
};
export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper style={styles.paperStyle} zDepth={5}>
          <PropensityStudio />
        </Paper>
      </MuiThemeProvider>
    );
  }
}
