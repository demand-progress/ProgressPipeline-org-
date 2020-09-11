import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

if (!/localhost/.test(location.hostname) && !/https/.test(location.protocol)){
  location.replace(`https:${location.href.substring(location.protocol.length)}`)
}

ReactDOM.render(<App />, document.getElementById("root"));
