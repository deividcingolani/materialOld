import React from "react";
import TableExampleComplex from "../components/Table";
import Propensity from "../components/Propensity";
const styles = {
  headerStyle: {
    textAlign: "left",
  },
  paperStyle: {
    minHeight: 600,
    width: 1200,
    margin: "20px auto",
    textAlign: "center",
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
export default class PropensityStudio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propensityHistory: [],
    };
  }

  handlerClick = (newPropensity) => {
    // Here build bock to fetch
    // fetch("url to fetch").then((response) =>
    //   this.setState({
    //     propensityHistory: response.json(),
    //   })
    // );
    //     .then(data => console.log(data));

    //Mocked Data
    const newPropensityHistory = this.state.propensityHistory;
    newPropensityHistory.push(newPropensity);
    this.setState({
      propensityHistory: newPropensityHistory,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.headerStyle}>
          <h3>Propensity Studio</h3>
        </div>
        <div style={styles.containerStyle}>
          <Propensity handlerClick={this.handlerClick} />
          <TableExampleComplex
            propensityHistory={this.state.propensityHistory}
          />
        </div>
      </div>
    );
  }
}
