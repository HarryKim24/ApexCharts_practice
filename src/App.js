import './App.css';
import LiveCharts from './components/LiveCharts';
import StaticApiCharts from './components/StaticApiCharts';
import StaticCharts from './components/StaticCharts';

function App() {

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <StaticApiCharts />
      <hr/>
      <LiveCharts />
      <hr/>
      <StaticCharts />
    </div>
  );
}

export default App;