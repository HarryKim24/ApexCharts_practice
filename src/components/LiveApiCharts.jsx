import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LiveApiCharts = () => {
  const [prices, setPrices] = useState([]);

  const generateRandomPrice = () => {
    const newPrice = Math.floor(Math.random() * 100);
    setPrices((prev) => {
      const updated = [...prev, newPrice];
      if (updated.length > 20) updated.shift();
      return updated;
    });
  };

  useEffect(() => {
    const timer = setInterval(generateRandomPrice, 1000);
    return () => clearInterval(timer);
  }, []);

  if (prices.length === 0) return <p>Loading...</p>;

  const options = {
    chart: { id: "live-random-chart" },
    xaxis: { categories: prices.map((_, idx) => `${idx + 1}초`) },
  };

  const series = [{ name: "실시간 랜덤 값", data: prices }];

  return (
    <div>
      <h3>⚡ 실시간 랜덤 데이터 차트</h3>
      <Chart type="line" options={options} series={series} />
    </div>
  );
};

export default LiveApiCharts;