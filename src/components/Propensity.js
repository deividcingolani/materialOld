import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  containerAll: {
    margin: "50px",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  colorCurrentGreen: {
    backgroundColor: "green",
    height: "50px",
    width: "50px",
  },
  colorCurrentRed: {
    backgroundColor: "green",
    height: "50px",
    width: "50px",
  },
  colorCurrentYellow: {
    backgroundColor: "yellow",
    height: "50px",
    width: "50px",
  },
  headerMessage: {
    textAlign: "left",
    fontSize: "18px",
  },
  headerCurrent: {
    textAlign: "left",
    fontSize: "18px",
  },
  currentContainer: {
    display: "flex",
  },
};

export default class TextFieldExampleControlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueMessage: "",
      valueCurrent: "",
      currentMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      valueMessage: event.target.value,
    });
  };
  handleClick = (event) => {
    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         redirect: 'follow', // manual, *follow, error
    //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return response.json(); // parses JSON response into native JavaScript objects
    // }
    //
    // postData('https://example.com/answer', { answer: 42 })
    //     .then(data => {
    //         console.log(data); // JSON data parsed by `data.json()` call
    //     });
    // Here build fetch to put data
    if (this.state.valueMessage !== "") {
      const randomNumber = Math.trunc(Math.random() * 3);
      let randomColor;
      if (randomNumber === 0) {
        randomColor = "yellow";
      } else if (randomNumber === 1) {
        randomColor = "green";
      } else {
        randomColor = "red";
      }
      const newPropensity = {
        state: randomColor,
        propensity: this.state.valueMessage,
        entities: "Yes",
        reclassify: "Fix",
      };
      this.setState({
        valueCurrent: newPropensity,
        currentMessage: this.state.valueMessage,
      });
      this.props.handlerClick(newPropensity);
    }
  };

  render() {
    let styleColor;

    if (
      this.state.valueCurrent &&
      this.state.valueCurrent.state &&
      this.state.valueCurrent.state !== ""
    ) {
      if (this.state.valueCurrent.state === "yellow") {
        styleColor = styles.colorCurrentYellow;
      } else if (this.state.valueCurrent.state === "red") {
        styleColor = styles.colorCurrentRed;
      } else {
        styleColor = styles.colorCurrentGreen;
      }
    }
    // if(this.state.valueCurrent)
    return (
      <div style={styles.containerAll}>
        <div>
          <h2 style={styles.headerCurrent}>Current Propensity</h2>
          <div style={styles.currentContainer}>
            <div style={styleColor} />
            <input
              id="text-field-controlled"
              value={this.state.currentMessage}
              disabled={true}
              style={styles.textFieldStyle}
            />
          </div>
        </div>
        <div style={styles.messageContainer}>
          <h2 style={styles.headerMessage}>Message</h2>
          <TextField
            id="text-message"
            multiLine={true}
            rows={5}
            onChange={this.handleChange}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
