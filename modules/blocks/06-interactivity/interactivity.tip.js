(function() {
  'use strict';

  var el = d3.select('.vis'),
    elWidth = parseInt(el.style('width'), 10),
    elHeight = parseInt(el.style('height'), 10),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = elWidth - margin.left - margin.right,
    height = elHeight - margin.top - margin.bottom;

  var svg = el.append("svg")
      .attr("width", elWidth)
      .attr("height", elHeight)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var data = [
    {
      "browser":"Chrome",
      "value": "45"
    },
    {
      "browser":"Safari",
      "value":"12"
    },
    {
      "browser":"Firefox",
      "value":"18"
    },
    {
      "browser":"IE",
      "value":"25"
    }
  ];

  // tooltip
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .html(function(d) {
      return d.browser + ' - ' + d.value;
    });

  svg.call(tip);

  svg.selectAll('.point')
    .data(data)
    .enter()
    .append('circle')
      .attr('class', 'point')
      .attr('r', 0)
      .attr('fill', '#8D94CB')
      .attr('cx', function(d, i) {
        return i * 100;
      })
      .attr('cy', height/2)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .transition()
      .duration(1000)
      .delay(function(d,i) {
        return i * 100;
      })
      .attr('r', function(d, i) {
        return d.value;
      });

}());
