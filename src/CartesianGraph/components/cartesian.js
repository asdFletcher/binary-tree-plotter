import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

import '../styles/base.scss';

import * as data from "../data/data.json";

class Cartesian extends React.Component {
  plot5 = {
    datasets: [
      ...data.default,
    ]
  };

  render() {
    return (
        <div className="scatter-container">
          <Scatter
            data={this.plot5}
            height={400}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false
              }
            }}
          />
        </div>
    );
  }
}

export default Cartesian;
