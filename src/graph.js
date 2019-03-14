import React from 'react';
import './styles/App.css';
import * as d3 from "d3";

class Graph extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart = () => {

    let treeData = 
      {
        "name": "Top Level",
        "parent": "null",
        "children": [
          {
            "name": "Level 2: A",
            "parent": "Top Level",
            "children": [
              {
                "name": "Son of A",
                "parent": "Level 2: A"
              },
              {
                "name": "Daughter of A",
                "parent": "Level 2: A"
              }
            ]
          },
          {
            "name": "Level 2: B",
            "parent": "Top Level"
          }
        ]
    };
    
    // ************** Generate the tree diagram	 *****************
    let margin = {top: 40, right: 120, bottom: 20, left: 120};
    let width = 960 - margin.right - margin.left;
    let height = 500 - margin.top - margin.bottom;
    
    let i = 0;

    let root = d3.hierarchy(treeData);
    let tree = d3.tree()
      .size([height, width]);

    tree = tree(root);

    var diagonal = d3.linkVertical()
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; });

    let svg = d3.select("body").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let nodes = tree.descendants();
    let links = tree.links();

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 100; });

    // Declare the nodes…
    let node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter the nodes.
    let nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; });

    nodeEnter.append("circle")
      .attr("r", 10)
      .style("fill", "#fff");

    nodeEnter.append("text")
      .attr("y", function(d) { 
        return d.children || d._children ? -18 : 18; })
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1);

    // Declare the links…
    let link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

    // Enter the links.
    link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", diagonal);
  }

  render() {
    return null;
  }
}

export default Graph;
