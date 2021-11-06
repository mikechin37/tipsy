import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

const Router = () => (
  <div>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/drink/:drink" component={DrinkPage} />
      <Route path="/addrecipe" component={RecipePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/mydrinks" component={MyDrinksPage} />
    </Switch>
    </BrowserRouter>
  </div>
)



export default Router;  