import './App.css';
import LiveApiCharts from './components/LiveApiCharts';
import LiveCharts from './components/LiveCharts';
import StaticApiCharts from './components/StaticApiCharts';
import StaticCharts from './components/StaticCharts';

function App() {

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <LiveApiCharts />
      <hr/>
      <StaticApiCharts />
      <hr/>
      <LiveCharts />
      <hr/>
      <StaticCharts />
    </div>
  );
}

export default App;