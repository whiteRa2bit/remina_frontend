import React from 'react';
import './styles/App.css';
import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <BrowserRouter basename="/">
             <Switch>
                <Route exact path="/" component={HomePage} /> 
                <Route exact path="/item" component={ItemPage} />
              </Switch>  
         </BrowserRouter>
      </div>
  );
}

export default App;
