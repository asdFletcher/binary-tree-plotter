import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

import '../styles/base.scss';

import * as lognto100 from "../../data/lognto100.json";
import * as lognto100_reversed from "../../data/lognto100_reversed.json";
import * as lognto1000 from "../../data/lognto1000.json";
import * as lognto1000_reversed from "../../data/lognto1000_reversed.json";

import * as log2Nto100 from "../../data/log2Nto100.json";
import * as log2Nto1000 from "../../data/log2Nto1000.json";
import * as log2Nto100_reversed from "../../data/log2Nto100_reversed.json";
import * as log2Nto1000_reversed from "../../data/log2Nto1000_reversed.json";

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

import * as Splay_insert_100x100_raw from "../../data/treeData/splayTree/Splay_insert_100x100_raw.json";
import * as Splay_insert_100x10k_avg from "../../data/treeData/splayTree/Splay_insert_100x10k_avg.json";
import * as Splay_insert_1000x100_raw from "../../data/treeData/splayTree/Splay_insert_1000x100_raw.json";
import * as Splay_insert_1000x10k_avg from "../../data/treeData/splayTree/Splay_insert_1000x10k_avg.json";

import * as Splay_remove_100x100_raw from "../../data/treeData/splayTree/Splay_remove_100x100_raw.json";
import * as Splay_remove_100x10k_avg from "../../data/treeData/splayTree/Splay_remove_100x10k_avg.json";
import * as Splay_remove_1000x100_raw from "../../data/treeData/splayTree/Splay_remove_1000x100_raw.json";
import * as Splay_remove_1000x10k_avg from "../../data/treeData/splayTree/Splay_remove_1000x10k_avg.json";

// sort plots
// import * as nSquaredTo100 from "../../data/sortData/nSquaredTo100.json";
// import * as insertionSort_100x10000 from "../../data/insertionSort_100x10000.json";


let showLine = false;

class Cartesian extends React.Component {
  plot5 = {
    datasets: [
      // ...Splay_remove_100x100_raw.default,
      // ...Splay_remove_100x10k_avg.default,
      // ...lognto100_reversed.default,
      // ...log2Nto100_reversed.default,
      ...Splay_remove_1000x100_raw.default,
      ...Splay_remove_1000x10k_avg.default,
      ...lognto1000_reversed.default,
      ...log2Nto1000_reversed.default,
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
