import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './history.js';
import axios from 'axios';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { items: [], navItems: [], noItemsMessage: false }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchNavigation();
    this.fetchData('men');
  }

   // fetch data by category, "men", "women", etc..
  fetchData(category)  {
    axios.get(`/api/data/v1/US/enhance-category/c/${category}/newarrivals`)
    .then((res) => {
      if(!Array.isArray(res.data)) {
        this.setState({ noItemsMessage: true })
      } else {
        this.setState({ items: res.data, noItemsMessage: false })
      }
      
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // fetch navigation links
  fetchNavigation() {
    axios.get('/api/data/v1/US/navigation/')
    .then((res) => {
      this.setState({ navItems: res.data.nav[0].navGroups[0].navitems })
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {

    return (
        <div> 
          <Header />
          <Navbar history={history} fetchData={ this.fetchData } navItems={ this.state.navItems } />
          <Main items={ this.state.items } noItemsMessage={ this.state.noItemsMessage } />
          <Footer />
        </div>
    )
  }
}

export default App;