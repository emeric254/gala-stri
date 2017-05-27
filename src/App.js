import React, { Component } from 'react';
import Menu from './Components/Menu.js';
import Page1 from './Components/Page1.js';
import Page2 from './Components/Page2.js';
import Page3 from './Components/Page3.js';
import Inscription from './Components/Inscription.js';
import Contact from './Components/Contact.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      page1: {},
      page2: {},
      page3: {},
      inscription: {},
      contact: {},
    };
  }

  updateData(data) {
    this.setState({menu: data.menu});
    this.setState({page1: data.page1});
    this.setState({page2: data.page2});
    this.setState({page3: data.page3});
    this.setState({inscription: data.inscription});
    this.setState({contact: data.contact});
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => { this.updateData(data); });
  }
  render() {
    return (
      <div className="App">
        <Menu data={this.state.menu} />
        <Page1 data={this.state.page1} />
        <Page2 data={this.state.page2} />
        <Page3 data={this.state.page3} />
        <Inscription data={this.state.inscription} />
        <Contact data={this.state.contact} />
      </div>
    );
  }
}

export default App;
