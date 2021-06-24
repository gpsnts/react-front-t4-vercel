import React, { Component } from 'react';
import { BrowserRouter , Switch , Route} from 'react-router-dom';

import Produto from './components/Produto/Produto';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Produto} />
          <Route path="/timeline" component={Produto}/>
          <Route path="/singup" component={Produto}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;