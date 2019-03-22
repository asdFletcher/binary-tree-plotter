import React from "react";
import { Bar, Scatter } from 'react-chartjs-2';

import * as t from '../data/test.json';

let showLine = false;

class Charter extends React.Component {

  plot5 = {
    datasets: [ ...t.default ]
  }

  render(){
    return (
      <>
        <Scatter
          data={this.plot5}
          height={800}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false,
            }
          }}
          />
      </>
    );
  }

}

export default Charter;