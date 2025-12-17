import { useEffect, useState } from "react"
import Chart from "react-apexcharts";

const CandleChartRandom = () => {

  const [candles, setCandles] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCandles((prev) => {
        const lastCandle = prev[prev.length - 1];
  
        const open = lastCandle ? lastCandle.y[3] : 0;
        const close = open + Math.floor(Math.random() * 10 - 5);
  
        const high = Math.max(open, close) + Math.floor(Math.random() * 5);
        const low = Math.min(open, close) - Math.floor(Math.random() * 5);
  
        const nextCandle = {
          x: Date.now(),
          y: [open, high, low, close]
        };
  
        const updated = [...prev, nextCandle];
        if (updated.length > 60) updated.shift();
  
        return updated;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);


  const series = [{ data: candles }];

  const options = {
    chart: {
      type: "candlestick"
    },
    title: {
      text: '랜덤 캔들 차트',
      align: 'left'
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: { enabled: true }
    }
  }

  return (
    <div>
      <Chart type="candlestick" series={series} options={options} height={350} />
    </div>
  )
}

export default CandleChartRandom
