import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import UploadVideo from './pages/Upload/Video';
import UploadCategory from './pages/Upload/Category';

const Error404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={UploadVideo} />
      <Route path="/cadastro/categoria" component={UploadCategory} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
