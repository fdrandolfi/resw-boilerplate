import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import View from "../View";
import ExampleComponent from "../../components/ExampleComponent";

const ExamplePage2 = () => (
  <View
    id="example"
    className="example-page-2"
  >
    <ExampleComponent />
    <br />
    <Link to="/">Back to Example Page</Link>
  </View>
);

export default ExamplePage2;
