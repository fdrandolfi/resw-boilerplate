import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.scss';
import ExamplePage from './pages/ExamplePage';
import ExamplePage2 from './pages/ExamplePage2';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/page2" component={ExamplePage2} />
      <Route path="/" component={ExamplePage} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
