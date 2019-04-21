import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

import '../styles/base.scss';

import * as lognto100 from "../../data/lognto100.json";
import * as lognto100_reversed from "../../data/lognto100_reversed.json";
import * as lognto1000 from "../../data/lognto1000.json";
import * as lognto1000_reversed from "../../data/lognto1000_reversed.json";

import * as BST_insert_100x100_raw from "../../data/treeData/BST_insert_100x100_raw.json";
import * as BST_insert_100x100_avg from "../../data/treeData/BST_insert_100x100_avg.json";

import * as BST_delete_100x100_raw from "../../data/treeData/BST_delete_100x100_raw.json";
import * as BST_delete_100x100_avg from "../../data/treeData/BST_delete_100x100_avg.json";

import * as BST_contains_100x100_raw from "../../data/treeData/BST_contains_100x100_raw.json";
import * as BST_contains_100x100_avg from "../../data/treeData/BST_contains_100x100_avg.json";

import * as AVL_delete_avg_1000 from "../../data/treeData/AVL_delete_avg_1000.json";

import * as AVL_insert_1000x10_raw from "../../data/treeData/AVL_insert_1000x10_raw.json";
import * as AVL_insert_100x100_raw from "../../data/treeData/AVL_insert_100x100_raw.json";
import * as AVL_insert_100x10000_avg from "../../data/treeData/AVL_insert_100x10000_avg.json";

import * as AVL_delete_100x100_raw from "../../data/treeData/AVL_delete_100x100_raw.json";
import * as AVL_delete_100x10000_avg from "../../data/treeData/AVL_delete_100x10000_avg.json";

// sort plots
import * as nSquaredTo100 from "../../data/sortData/nSquaredTo100.json";
import * as insertionSort_100x10000 from "../../data/sortData/insertionSort_100x10000.json";
// import * as insertionSort_100x2000 from "../../data/sortData/insertionSort_100x2000.json";
import * as insertionSort_16x100000 from "../../data/sortData/insertionSort_16x100000.json";


let showLine = false;

class Cartesian extends React.Component {
  plot5 = {
    datasets: [
      ...nSquaredTo100.default,
      // ...insertionSort_16x100000.default,
      // ...BST_insert_100x100_raw.default,
      // ...BST_insert_100x100_avg.default,
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
