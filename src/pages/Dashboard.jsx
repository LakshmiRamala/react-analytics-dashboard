// Main Dashboard Page
// Jun 2026 by Lakshmi

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import dashboardStore from '../stores/dashboardStore';
import LineChart from '../components/charts/LineChart';
import FilterPanel from '../components/filters/FilterPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: '#0f1629',
    minHeight: '100vh',
  },
  card: {
    padding: theme.spacing(2),
    backgroundColor: '#1a2340',
    borderRadius: 8,
    color: '#ffffff',
  },
  metricValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#63b3ed',
  },
  metricLabel: {
    fontSize: 13,
    color: '#a0aec0',
    marginTop: 4,
  },
  chartWrapper: {
    padding: theme.spacing(2),
    backgroundColor: '#1a2340',
    borderRadius: 8,
    marginTop: theme.spacing(2),
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
}));

const Dashboard = observer(() => {
  const classes = useStyles();
  const {
    isLoading,
    error,
    averageScore,
    totalAgents,
    topPerformers,
    engagementData,
    loadDashboardData,
  } = dashboardStore;

  useEffect(() => {
    loadDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loader}>
        <CircularProgress style={{ color: '#63b3ed' }} />
      </div>
    );
  }

  if (error) {
    return (
      <Typography style={{ color: '#fc8181', padding: 24 }}>
        Error: {error}
      </Typography>
    );
  }

  // Chart series data
  const chartSeries = [
    {
      name: 'Engagement',
      data: engagementData.map((d) => d.value),
      color: '#63b3ed',
    },
  ];

  const chartCategories = engagementData.map((d) => d.date);

  return (
    <div className={classes.root}>
      {/* Filters */}
      <FilterPanel />

      {/* Metric Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.card}>
            <Typography className={classes.metricValue}>
              {totalAgents}
            </Typography>
            <Typography className={classes.metricLabel}>
              Total Agents
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.card}>
            <Typography className={classes.metricValue}>
              {averageScore}
            </Typography>
            <Typography className={classes.metricLabel}>
              Average Score
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.card}>
            <Typography className={classes.metricValue}>
              {topPerformers.length}
            </Typography>
            <Typography className={classes.metricLabel}>
              Top Performers
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Engagement Chart */}
      <Paper className={classes.chartWrapper}>
        <LineChart
          title="Customer Engagement Trend"
          series={chartSeries}
          categories={chartCategories}
          yAxisLabel="Engagement Score"
          height={350}
        />
      </Paper>
    </div>
  );
});

export default Dashboard;
