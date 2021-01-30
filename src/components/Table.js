import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";

const styles = {
  tableContainer: {
    width: "550px",
  },
  iconStyles: {
    marginRight: 24,
  },
  buttonRed: {
    height: "10px",
    width: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
    borderColor: "red",
    display: "inline-block",
  },
  buttonGreen: {
    height: "10px",
    width: "10px",
    backgroundColor: "green",
    borderRadius: "50%",
    borderColor: "green",
    display: "inline-block",
  },
  buttonYellow: {
    height: "10px",
    width: "10px",
    backgroundColor: "yellow",
    borderRadius: "50%",
    borderColor: "yellow",
    display: "inline-block",
  },
  propensityHeader: {
    textAlign: "left",
  },
  filtersSearch: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default class TableExampleComplex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: "300px",
      valueSize: 5,
      valueStatePropensity: "All",
      renderElements: props.propensityHistory,
    };
  }
  handleChangeSize = (event, index, value) =>
    this.setState({ valueSize: value });

  handleChangeStatePropensity = (event, index, value) =>
    this.setState({ valueStatePropensity: value });

  handleChangeSearch = (event) =>
    this.setState({ valueSearch: event.target.value });

  render() {
    //Calculate Size
    let renderElements = this.props.propensityHistory.slice(
      0,
      this.state.valueSize
    );

    //Calculate StatePropensity
    renderElements = renderElements.filter((propensityHistory) => {
      if (this.state.valueStatePropensity === "All") {
        return true;
      }
      console.log(propensityHistory.state);
      console.log(propensityHistory.state === this.state.valueStatePropensity);
      return propensityHistory.state === this.state.valueStatePropensity;
    });

    //Calculate StatePropensity
    renderElements = renderElements.filter((propensityHistory) => {
      if (!this.state.valueSearch) {
        return true;
      } else {
        return propensityHistory.propensity.includes(this.state.valueSearch);
      }
    });

    return (
      <div style={styles.tableContainer}>
        <h3 style={styles.propensityHeader}>Propensity History</h3>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{ textAlign: "center" }}>
                <div style={styles.filtersSearch}>
                  <DropDownMenu
                    value={this.state.valueSize}
                    onChange={this.handleChangeSize}
                  >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={20} primaryText="20" />
                  </DropDownMenu>
                  <DropDownMenu
                    value={this.state.valueStatePropensity}
                    onChange={this.handleChangeStatePropensity}
                  >
                    <MenuItem value={"All"} primaryText="All" />
                    <MenuItem value={"green"} primaryText="Positive" />
                    <MenuItem value={"red"} primaryText="Negative" />
                    <MenuItem value={"yellow"} primaryText="Neutral" />
                  </DropDownMenu>
                  <div>
                    <FontIcon
                      className="material-icons"
                      style={styles.iconStyles}
                    >
                      search
                    </FontIcon>
                    <TextField
                      id="text-message"
                      onChange={this.handleChangeSearch}
                    />
                  </div>
                </div>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">STATE</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">
                PROPENSITY
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">
                ENTITIES
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">
                RECLASSIFY
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {renderElements.map((row, index) => {
              let stylesColor;
              if (row.state === "yellow") {
                stylesColor = styles.buttonYellow;
              } else if (row.state === "red") {
                stylesColor = styles.buttonRed;
              } else {
                stylesColor = styles.buttonGreen;
              }
              return (
                <TableRow key={index}>
                  <TableRowColumn>
                    <button style={stylesColor} disabled={true} />
                  </TableRowColumn>
                  <TableRowColumn>{row.propensity}</TableRowColumn>
                  <TableRowColumn>{row.entities}</TableRowColumn>
                  <TableRowColumn>{row.reclassify}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
