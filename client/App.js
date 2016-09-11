import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      <Header />
      <Nav />
      <div class="row col-md-12">
        <hr />
      </div>
      <Body />
      <Footer />
    </div>
  }
}

ReactDOM.render(<App/>, querySelector('.container'));