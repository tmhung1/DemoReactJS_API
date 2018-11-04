import React, { Component } from 'react';
import './App.css';
import Menu from './Component/Menu/Menu';
import routes from './routes';
import {Switch , Route ,BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
                    <Menu/>
                    <div className="container">
                      <div className="row"> 
                        <Switch>
                          {this.showContent(routes)}
                        </Switch>
                      </div>
                    </div>
           </div>
      </Router>
    );
  }
  showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route key={index} path={item.path} component={item.main} exact={item.exact}></Route>
        )
      });
    }
    return result;
  }
}
export default App;
