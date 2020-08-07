import React from 'react';
import './styles/App.css';
import HomePage from './components/HomePage';
import AddItemPage from './components/AddItemPage';
import ItemsPage from './components/ItemsPage'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" component={HomePage} /> 
                <Route exact path="/items/add" component={AddItemPage} />
                <Route exact path="/items" component={ItemsPage} />
              </Switch>  
         </BrowserRouter>
      </div>
  );
}

export default App;
