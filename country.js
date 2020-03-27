import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Country extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div key={this.props.key} className="info-wrapper box-shadow">
        <div className="country">
        <span className= {"flag f32 " + this.props.coronaInfo.countryInfo.iso2}></span>

          {this.props.coronaInfo.country}

        </div>

        <div className="left">
          <div className="info">
            <span className="label alarm">Cases</span>
            <span className="number">{this.props.coronaInfo.cases}</span>
          </div>

          <div className="info">
            <span className="label danger">Todays Cases</span>
            <span className="number">{this.props.coronaInfo.todayCases}</span>
          </div>
          <div className="info">
            <span className="label alarm">Death</span>
            <span className="number">{this.props.coronaInfo.deaths}</span>
          </div>
          <div className="info">
            <span className="label danger">Today's death</span>
            <span className="number">{this.props.coronaInfo.todayDeaths}</span>
          </div>
        </div>

        <div className="right">
          <div className="info">
            <span className="label recover">Recovered</span>
            <span className="number">{this.props.coronaInfo.recovered}</span>
          </div>
          <div className="info">
            <span className="label alarm">Active</span>
            <span className="number">{this.props.coronaInfo.active}</span>
          </div>
          <div className="info">
            <span className="label">Critical</span>
            <span className="number">{this.props.coronaInfo.critical}</span>
          </div>
          <div className="info">
            <span className="label">Cases per million</span>
            <span className="number">
              {this.props.coronaInfo.casesPerOneMillion}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
