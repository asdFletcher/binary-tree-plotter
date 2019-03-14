import React from 'react';
import '../styles/App.css';
import * as d3 from "d3";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    data: state.d3Data,
    displayNumbers: state.displayNumbers,
  });
}

class Graph extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {

    let data = this.props.data;
    let displayNumbers = this.props.displayNumbers;
    // remove existing chart
    let chartExists = d3.selectAll("svg")._groups[0].length;
    if(chartExists){
      d3.select("svg").remove();
    }

    // ************** Generate the tree diagram	 *****************
    let margin = {top: 40, right: 120, bottom: 20, left: 120};
    let width = 960 - margin.right - margin.left;
    let height = 750 - margin.top - margin.bottom;
    
    let i = 0;

    let root = d3.hierarchy(data);
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
    nodes.forEach(function(d) { d.y = d.depth * 75; });

    // Declare the nodes…
    let node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter the nodes.
    let nodeEnter = node.enter().append("g")
      .attr("class", function(d) {
        if(isNaN(d.value)){
          return "node hide";
        } else {
          return "node";
        }
      })
      .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; })

    nodeEnter.append("circle")
      .attr("r", 20)
      .style("fill", "#fff");

    nodeEnter.append("text")
      // .attr("y", function(d) { 
        // return d.children || d._children ? -22 : 22; })
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(function(d) {
        console.log(`displayNumbers: `, displayNumbers);
        // console.log(`this.props 🕧`, this.props)
        if(displayNumbers){
          return d.data.value
        }
      })
      .style("fill-opacity", 1);

    // Declare the links…
    let link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

    // Enter the links.
    link.enter().insert("path", "g")
      .attr("class", function(d){
        if(isNaN(d.target.value)){
          return "link hide";
        } else {
          return "link";
        }
      })
      .attr("d", diagonal);
  }

  render() {
    this.drawChart();
    return null;
  }
}

export default connect(mapStateToProps)(Graph);
