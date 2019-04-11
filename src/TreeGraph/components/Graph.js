import React from 'react';
import * as d3 from "d3";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    data: state.d3Data,
    displayNumbers: state.displayNumbers,
  });
}

class Graph extends React.Component {

  CIRCLE_RADIUS = 20;
  EDGE_THICKNESS = 3;
  NOMINAL_VERTICAL_SEPARATION = 75;
  margin = {top: 0, right: 0, bottom: 0, left: 0};
  width = 960 - this.margin.right - this.margin.left;
  height = 750 - this.margin.top - this.margin.bottom;
  diagonal = null;
  svg = null;
  tree = null;
  root = null;
  i = 0;

  updateGraph = () => {
    this.removeExistingGraph();

    this.defineRoot();
    this.defineTree();
    this.defineDiagonal();
    this.defineSVG();
    this.setVerticalSpacing();
    
    this.declareNodes();
    this.enterNodes();
    this.declareLinks();
    this.enterLinks();
  }

  removeExistingGraph = () => {
    if(this.graphExists()){
      d3.select("svg").remove();
    }
  }
  
  graphExists = () => {
    return d3.selectAll("svg")._groups[0].length;
  }

  defineRoot = () => {
    const { data } = this.props;
    this.root = d3.hierarchy(data);
  }

  defineTree = () => {
    this.tree = d3.tree()
      .size([this.height, this.width]);

    this.tree = this.tree(this.root);
  }

  defineDiagonal = () => {
    this.diagonal = d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y);
  }

  defineSVG = () => {
    this.svg = d3.select(".graph").append("svg")
      .attr("width", this.width + this.margin.right + this.margin.left)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

  }

  setVerticalSpacing = () => {
    this.getNodes().forEach( this.calcNodeHeight );
  }

  calcNodeHeight = (node) => {
    let centerToCenter = 0;

    let circleHeight = (this.CIRCLE_RADIUS + this.EDGE_THICKNESS) * 2;

    if (this.tree.height * this.NOMINAL_VERTICAL_SEPARATION + circleHeight /2 > this.height){
      let circleHeight = (this.CIRCLE_RADIUS + this.EDGE_THICKNESS) * 3;
      let offsetPerLevel = (circleHeight + this.margin.top) / this.tree.height;
      centerToCenter = this.NOMINAL_VERTICAL_SEPARATION - offsetPerLevel;
    } else {
      centerToCenter = this.NOMINAL_VERTICAL_SEPARATION;
    }

    node.y = this.CIRCLE_RADIUS + this.EDGE_THICKNESS + node.depth * centerToCenter;
  }

  getLinks = () => {
    return this.tree.links();
  }

  getNodes = () => {
    return this.tree.descendants();
  }
  
  declareNodes = () => {
    this.node = this.svg.selectAll("g.node")
      .data(this.getNodes(), d => {
        return d.id || (d.id = ++this.i);
      });
  }
  
  enterNodes = () => {
    const { displayNumbers } = this.props;
  
    let nodeEnter = this.node.enter().append("g")
    .attr("class", getNodeClass)
    .attr("transform", d => { 
      return "translate(" + d.x + "," + d.y + ")"; })
  
    nodeEnter.append("circle")
      .attr("r", this.CIRCLE_RADIUS)
      .style('fill', function(d) {return d.color});
  
    nodeEnter.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text( d => {
        if(displayNumbers){
          return d.data.value
        }
      })
    
    nodeEnter.append("text")
      .attr("class", "height-text")
      .attr("dy", ".35em")
      .attr("x", d => 25 )
      .text( d => {
        return d.data.height;
      });

  }
  
  declareLinks = () => {
    this.link = this.svg.selectAll("path.link")
      .data(this.getLinks(), d => d.target.id );
  }
  
  enterLinks = () => {
    this.link.enter().insert("path", "g")
    .attr("class", getLinkClass)
    .attr("d", this.diagonal);
  }

  render() {
    this.updateGraph();
    return null;
  }
}

const getNodeClass = (node) => {
  let val = node.data.value;
  if(isNaN(val) || val === undefined ||  val === null ){ return "node hide"; }
  return "node";
}

const getLinkClass = (link) => {
  let val = link.target.data.value;
  if(isNaN(val) || val === undefined ||  val === null ){ return "link hide"; }
  return "link";
}

export default connect(mapStateToProps)(Graph);
