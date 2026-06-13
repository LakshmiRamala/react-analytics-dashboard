// Reusable Highcharts Line Chart Component
// Jun 2026 by Lakshmi

import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const LineChart = ({
  title = '',
  series = [],
  categories = [],
  height = 300,
  yAxisLabel = 'Value',
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy previous instance to avoid memory leaks
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = Highcharts.chart(chartRef.current, {
      chart: {
        type: 'line',
        height,
        backgroundColor: '#1a2340', // NeuronCX dark theme
        style: { fontFamily: 'Roboto, sans-serif' },
      },
      title: {
        text: title,
        style: { color: '#ffffff', fontSize: '14px' },
      },
      xAxis: {
        categories,
        labels: { style: { color: '#a0aec0' } },
        gridLineColor: '#2d3748',
      },
      yAxis: {
        title: {
          text: yAxisLabel,
          style: { color: '#a0aec0' },
        },
        labels: { style: { color: '#a0aec0' } },
        gridLineColor: '#2d3748',
      },
      series,
      legend: {
        itemStyle: { color: '#a0aec0' },
      },
      tooltip: {
        backgroundColor: '#2d3748',
        style: { color: '#ffffff' },
      },
      credits: { enabled: false },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [series, categories, title, height, yAxisLabel]);

  return <div ref={chartRef} />;
};

export default LineChart;
