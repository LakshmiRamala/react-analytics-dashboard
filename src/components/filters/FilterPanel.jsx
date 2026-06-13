// Filter Panel Component
// Jun 2026 by Lakshmi

import React from 'react';
import { observer } from 'mobx-react';
import {
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import dashboardStore from '../../stores/dashboardStore';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#1a2340',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    minWidth: 150,
    '& .MuiInputLabel-root': { color: '#a0aec0' },
    '& .MuiSelect-root': { color: '#ffffff' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2d3748',
    },
  },
}));

const FilterPanel = observer(() => {
  const classes = useStyles();
  const { filterParams, setFilter } = dashboardStore;

  return (
    <Grid container spacing={2} className={classes.root}>
      {/* Date Range Filter */}
      <Grid item>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
        >
          <InputLabel>Date Range</InputLabel>
          <Select
            value={filterParams.dateRange}
            onChange={(e) => setFilter('dateRange', e.target.value)}
            label="Date Range"
          >
            <MenuItem value="7d">Last 7 Days</MenuItem>
            <MenuItem value="30d">Last 30 Days</MenuItem>
            <MenuItem value="90d">Last 90 Days</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Channel Filter */}
      <Grid item>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
        >
          <InputLabel>Channel</InputLabel>
          <Select
            value={filterParams.channel}
            onChange={(e) => setFilter('channel', e.target.value)}
            label="Channel"
          >
            <MenuItem value="all">All Channels</MenuItem>
            <MenuItem value="whatsapp">WhatsApp</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="sms">SMS</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
});

export default FilterPanel;
