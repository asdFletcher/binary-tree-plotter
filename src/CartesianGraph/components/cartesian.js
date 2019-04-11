import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

import * as data1 from "../data/data1.json";
import * as data2 from "../data/data2.json";
import * as lognto100 from "../data/lognto100.json";
import * as lognto100_reversed from "../data/lognto100_reversed.json";
import * as lognto1000 from "../data/lognto1000.json";
import * as lognto1000_reversed from "../data/lognto1000_reversed.json";

import * as BST_insert_100x100_raw from "../data/BST_insert_100x100_raw.json";
import * as BST_insert_100x100_avg from "../data/BST_insert_100x100_avg.json";

import * as BST_delete_100x100_raw from "../data/BST_delete_100x100_raw.json";
import * as BST_delete_100x100_avg from "../data/BST_delete_100x100_avg.json";

import * as BST_contains_100x100_raw from "../data/BST_contains_100x100_raw.json";
import * as BST_contains_100x100_avg from "../data/BST_contains_100x100_avg.json";

import * as AVL_delete_avg_1000 from "../data/AVL_delete_avg_1000.json";

import * as AVL_insert_1000x10_raw from "../data/AVL_insert_1000x10_raw.json";
import * as AVL_insert_100x100_raw from "../data/AVL_insert_100x100_raw.json";
import * as AVL_insert_100x10000_avg from "../data/AVL_insert_100x10000_avg.json";

import * as AVL_delete_100x100_raw from "../data/AVL_delete_100x100_raw.json";
import * as AVL_delete_100x10000_avg from "../data/AVL_delete_100x10000_avg.json";

let showLine = false;

class Cartesian extends React.Component {
  plot5 = {
    datasets: [
      // ...BST_insert_500000x100_raw.default
      // ...AVL_insert_100x10000_avg.default,
      // ...BST_insert_100x100_raw.default,
      // ...BST_insert_100x100_avg.default,
      // ...lognto100.default
    ]
  };

  render() {
    return (
      <>
        <Scatter
          data={this.plot5}
          height={800}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            }
          }}
        />
      </>
    );
  }
}

export default Cartesian;
