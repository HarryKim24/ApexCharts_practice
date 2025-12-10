import { useEffect, useState } from "react"
import Chart from "react-apexcharts";

const LiveCharts = () => {

  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90]);

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => [...prev.slice(1), Math.floor(Math.random() * 100)]);
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  const options = {
    chart: { id: "live-chart" },
    xaxis: { categories: data.map((_, idx) => idx + 1 + "초") }
  };

  const pieLabel = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <div>
      <h3>⚡ 실시간 변경 데이터 차트</h3>
      <div style={{ display: 'flex', gap: "20px" }}>
        <Chart type="line" series={[{ name: '실시간', data }]} options={options} />
        <Chart type="bar" series={[{ name: '실시간', data }]} options={options} />
        <Chart type="pie" series={data} options={{ labels: pieLabel }} />
      </div>
    </div>
  )
}

export default LiveCharts
