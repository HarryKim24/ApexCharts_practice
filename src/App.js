import './App.css';
import LiveCharts from './components/LiveCharts';
import StaticCharts from './components/StaticCharts';

function App() {

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <StaticCharts />
      <hr/>
      <LiveCharts />
    </div>
  );
}

export default App;