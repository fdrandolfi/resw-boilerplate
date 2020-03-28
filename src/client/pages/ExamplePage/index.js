import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import View from "../View";
import ExampleComponent from "../../components/ExampleComponent";

const ExamplePage = () => (
  <View
    id="example"
    className="example-page"
  >
    <ExampleComponent />
    <br />
    <Link to="/page2">Go to Example Page 2</Link>
  </View>
);

export default ExamplePage;
