// MobX Dashboard Store
// Jun 2026 by Lakshmi

import { makeAutoObservable, runInAction } from 'mobx';
import { fetchDashboardData, fetchAgentMetrics } from '../services/apiService';

class DashboardStore {
  // Observable state
  agentMetrics = [];
  engagementData = [];
  filterParams = {
    dateRange: '7d',
    agentId: null,
    channel: 'all',
  };
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  setFilter = (key, value) => {
    this.filterParams[key] = value;
    this.loadDashboardData(); // Auto-reload on filter change
  };

  loadDashboardData = async () => {
    this.isLoading = true;
    this.error = null;

    try {
      const [metrics, engagement] = await Promise.all([
        fetchAgentMetrics(this.filterParams),
        fetchDashboardData(this.filterParams),
      ]);

      runInAction(() => {
        this.agentMetrics = metrics;
        this.engagementData = engagement;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
    }
  };

  // Computed values
  get totalAgents() {
    return this.agentMetrics.length;
  }

  get averageScore() {
    if (!this.agentMetrics.length) return 0;
    const total = this.agentMetrics.reduce(
      (sum, agent) => sum + agent.score, 0
    );
    return (total / this.agentMetrics.length).toFixed(2);
  }

  get topPerformers() {
    return [...this.agentMetrics]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }
}

const dashboardStore = new DashboardStore();
export default dashboardStore;
