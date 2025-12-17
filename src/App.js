/* eslint-disable no-unused-vars */
import './App.css';
import CandleChart from './components/CandleChart';
import ChangeRateCharts from './components/ChangeRateCharts';
import LiveApiCharts from './components/LiveApiCharts';
import LiveCharts from './components/LiveCharts';
import StaticApiCharts from './components/StaticApiCharts';
import StaticCharts from './components/StaticCharts';

function App() {

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <CandleChart />
    </div>
  );
}

export default App;