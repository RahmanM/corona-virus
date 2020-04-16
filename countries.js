import React, { Component } from "react";
import { render } from "react-dom";
import Country from "./country";
import "./style.css";

class Countries extends Component {
  constructor() {
    super();
    this.state = { 
      countries: [],
      filter: ''
     };
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then(res => res.json())
      .then(data => {
        this.setState({ countries: data });
      })
      .catch(console.log);
  }

  render() {
    var topCounries = this.state.countries;
    var countries = 
    topCounries
    .filter(c => c.country.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
    .map(country => {
      return <Country key={country.name} coronaInfo={country} />;
    });

    return <div className="wrapper">{countries}</div>;
  }
}

export default Countries;
