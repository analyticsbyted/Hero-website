import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import "./Analytics.css";

function Analytics() {
  const [chartData, setChartData] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState("activeUsers");
  const [startDate, setStartDate] = useState("7daysAgo");
  const [endDate, setEndDate] = useState("today");
  const [chartType, setChartType] = useState("bar");

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const propertyId = import.meta.env.VITE_GA4_PROPERTY_ID;
        const credentials = JSON.parse(
          import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS
        );

        if (!propertyId || !credentials) {
          throw new Error("Missing credentials or property ID");
        }

        const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

        const [response] = await analyticsDataClient.runReport({
          property: `properties/${propertyId}`,
          dateRanges: [{ startDate, endDate }],
          dimensions: [
            { name: "pagePath" },
            { name: "pageTitle" },
          ],
          metrics: [
            { name: selectedMetric },
            { name: "screenPageViews" },
          ],
        });

        const formattedData = formatDataForChart(response, chartType);
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalyticsData();
  }, [selectedMetric, startDate, endDate, chartType]);

  function formatDataForChart(data, type) {
    if (!data.rows) {
      console.error("No data rows found");
      return { labels: [], datasets: [] };
    }

    const labels = data.rows.map((row) => row.dimensionValues[0].value);
    const values = data.rows.map((row) =>
      parseInt(row.metricValues[0].value, 10)
    );

    return {
      labels,
      datasets: [
        {
          label: selectedMetric,
          data: values,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics-container">
      <h2>Google Analytics Dashboard</h2>

      {/* Metric Selection */}
      <select
        value={selectedMetric}
        onChange={(e) => setSelectedMetric(e.target.value)}
      >
        {/* Options */}
      </select>

      {/* Date Range Selection */}
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Display the chart */}
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Analytics;
