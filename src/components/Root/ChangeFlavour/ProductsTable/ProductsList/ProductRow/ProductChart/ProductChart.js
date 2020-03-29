import * as d3 from "d3";
import React, { useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";

import { formatCurrency } from "#root/helpers/currencyFormatters";

const BAR_HEIGHT = 33;
const MARGIN = { BOTTOM: 48, LEFT: 216, RIGHT: 72, TOP: 48 };
const HEIGHT = 235;
const WIDTH = 1000 - MARGIN.LEFT - MARGIN.RIGHT;

const ChartSvg = styled.svg`
  height: ${HEIGHT}px;
  user-select: none;
  width: ${WIDTH + MARGIN.LEFT + MARGIN.RIGHT}px;
`;

const ProductChart = ({ cannibalised }) => {
  const themeContext = useContext(ThemeContext);
  const svgRef = useRef();

  const { addedProductRevenue, products, replacedProductRevenue } = cannibalised;

  const cannibalisedProductRevenue = products.reduce((revenue, currProduct) => revenue + currProduct.revenue, 0);

  const collapsedData = [
    {
      barStart: 0,
      label: "Added Product",
      value: addedProductRevenue
    },
    {
      barStart: replacedProductRevenue,
      label: "Replaced Product(s)",
      value: replacedProductRevenue - addedProductRevenue
    },
    {
      barStart: replacedProductRevenue + cannibalisedProductRevenue,
      label: "Cannibalised Product(s)",
      value: cannibalisedProductRevenue
    },
    {
      barStart: Math.min(0, replacedProductRevenue + cannibalisedProductRevenue),
      label: "⊞ Net Gain",
      value: cannibalisedProductRevenue + replacedProductRevenue
    }
  ];

  useEffect(() => {
    // Chart inner
    const svg = d3
      .select(svgRef.current)
      .select(".chart-inner")
      .attr("height", `${HEIGHT}px`)
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)
      .attr("width", `${WIDTH}px`);

    // X scale fn
    const xScale = d3
      .scaleLinear()
      .domain([Math.min(0, replacedProductRevenue + cannibalisedProductRevenue), addedProductRevenue])
      .range([0, WIDTH])
      .nice();

    // X scale callback
    const xAxis = d3.axisTop(xScale).tickSizeInner(0 - collapsedData.length * BAR_HEIGHT);

    // X scale implement
    svg
      .select(".x-axis")
      .call(xAxis)
      .style("font", "inherit")
      .selectAll("line")
      .style("stroke", `${themeContext.zircon}`)
      .style("stroke-dasharray", "6 4");

    // Remove X domain
    svg
      .select(".x-axis")
      .select(".domain")
      .remove();

    // X label styling
    svg
      .select(".x-axis")
      .selectAll(".tick")
      .select("text")
      .style("color", `${themeContext.greyChateau}`)
      .style("transform", "translate(0, -5px)");

    // X label first-child emphasis
    svg
      .select(".x-axis")
      .select(".tick:first-child")
      .select("text")
      .style("font-weight", "bold");

    // Y scale fn
    const yScale = d3
      .scaleBand()
      .domain(collapsedData.map(bar => bar.label))
      .range([0, collapsedData.length * BAR_HEIGHT])
      .paddingInner(0.33)
      .paddingOuter(0.16)
      .round(true)
      .align(0.5);

    // Y scale callback
    const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

    // Y scale implement
    svg
      .select(".y-axis")
      .call(yAxis)
      .style("font", "inherit");

    // Y label offset
    svg
      .select(".y-axis")
      .selectAll(".tick")
      .select("text")
      .style("transform", "translate(-10px, 0)");

    // Y label last-child expand functionality
    svg
      .select(".y-axis")
      .select(".tick:last-child")
      .select("text")
      .style("color", `${themeContext.dodgerBlue}`)
      .style("font-weight", "bold");
    // .classed("net-gain-chart-label", "true");

    // Data bars group
    const dataBars = svg
      .select(".data-bars")
      .selectAll("g")
      .data(collapsedData)
      .enter()
      .append("g");

    // Individual data bars
    dataBars
      .append("rect")
      .attr("height", yScale.bandwidth())
      .attr("width", ({ barStart, value }) => xScale(barStart + Math.abs(value)) - xScale(barStart))
      .attr("x", ({ barStart }) => xScale(barStart))
      .attr("y", ({ label }) => yScale(label))
      .style("fill", themeContext.outrageousOrange);

    // Data bar text
    dataBars
      .append("text")
      .attr("fill", "white")
      .attr("text-anchor", "end")
      .attr("transform", "translate(-5, 17.5)")
      .attr("x", ({ barStart, value }) => xScale(barStart + Math.abs(value)))
      .attr("y", ({ label }) => yScale(label))
      .text(({ value }) => formatCurrency(value * 100));

    // Style first data bar
    svg
      .select(".data-bars")
      .select("g:first-child")
      .select("rect")
      .style("fill", themeContext.lima);

    // Style last data bar
    svg
      .select(".data-bars")
      .select("g:last-child")
      .select("rect")
      .style("fill", ({ value }) => (value > 0 ? themeContext.dodgerBlue : themeContext.raven));
  }, []);

  return (
    <ChartSvg ref={svgRef}>
      <g className="chart-inner">
        <g className="x-axis" />
        <g className="y-axis" />
        <g className="data-bars" />
      </g>
    </ChartSvg>
  );
};

export default ProductChart;
