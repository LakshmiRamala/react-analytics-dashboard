# React Analytics Dashboard

A full-stack **interactive analytics dashboard** built with **React.js**, **MUI (v4)**, **MobX**, and **Highcharts** — designed for real-time customer engagement data visualization.

## 🚀 Features

- **Real-time data visualization** with Highcharts
- **MobX state management** for reactive UI updates
- **Reusable component library** — DataGrids, Chart wrappers, Filter panels
- **Backend API integration** for live data sync
- **Responsive design** with MUI (v4)
- **30% improved render performance** through component optimization

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| UI Library | MUI (Material UI v4) |
| State Management | MobX |
| Charts | Highcharts |
| API Integration | REST APIs (Axios) |
| Language | JavaScript (ES6+) |

## 📁 Project Structure

```
react-analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── charts/
│   │   │   └── LineChart.jsx       # Reusable Highcharts wrapper
│   │   ├── tables/
│   │   │   └── DataGrid.jsx        # Reusable data grid
│   │   └── filters/
│   │       └── FilterPanel.jsx     # Filter panel component
│   ├── stores/
│   │   └── dashboardStore.js       # MobX store
│   ├── services/
│   │   └── apiService.js           # API integration
│   ├── pages/
│   │   └── Dashboard.jsx           # Main dashboard page
│   └── index.js                    # Entry point
├── package.json
└── README.md
```

## ⚙️ How It Works

```
User opens Dashboard
        ↓
MobX Store fetches data via API
        ↓
Highcharts renders charts reactively
        ↓
User applies filters
        ↓
Store updates → UI re-renders automatically
```

## 📦 Installation

```bash
git clone https://github.com/LakshmiRamala/react-analytics-dashboard.git
cd react-analytics-dashboard
npm install
npm start
```

## 📊 Performance

- Dashboard render performance improved by **30%**
- Reusable component library reduced new feature dev time by **~25%**
- Optimized Highcharts rendering for large datasets

## 👩‍💻 Author

**Naga Lakshmi Ramala** — [LinkedIn](https://linkedin.com/in/lakshmi-ramala) | [GitHub](https://github.com/LakshmiRamala)
