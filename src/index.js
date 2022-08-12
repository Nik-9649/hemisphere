import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>You are in northern hemisphere</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
