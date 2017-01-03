import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map( weather => weather.main.temp), temp => temp - 273.15);
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /> </td>
        <td height={120} width={300}><Chart data={temps} color="red" units="C" /></td>
        <td height={120} width={300}><Chart data={pressures} color="blue" units="hPa" /></td>
        <td height={120} width={300}><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover" >
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Presure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export  default connect(mapStateToProps)(WeatherList);