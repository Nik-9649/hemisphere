import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: 25 };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => console.log(error)
    );
  }
  render() {
    return <div>{this.state.latitude}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
