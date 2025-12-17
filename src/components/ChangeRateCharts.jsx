import { useEffect, useState } from "react"
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

const ChangeRateCharts = () => {

  const chartId = "step4-stream";

  const [values, setValues] = useState([]);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newValue = Math.floor(Math.random() * 100) + 1;

      setValues((prev) => {
        const updated = [...prev, newValue];
        if (updated.length > 30) updated.shift();
        return updated;
      });

      setRates((prevRates) => {
        if (values.length === 0) return [0];
        const prevValue = values[values.length - 1];
        const rate = ((newValue - prevValue) / prevValue) * 100;
        const updated = [...prevRates, Number(rate.toFixed(2))];
        if (updated.length > 30) updated.shift();
        return updated;
      })
    }, 1000);

    return () => clearInterval(timer);
  }, [values]);

  useEffect(() => {
    if (values.length === 0) return;

    ApexCharts.exec(chartId, 'updatedSeries', [
      { name: '값', data: values },
      { name: '변화율(%)', data: rates },
    ]);
  }, [values, rates])

  if (values.length === 0) return <p>Loading...</p>

  const options = {
    chart: { 
      id: chartId,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: { speed: 1000 },
      },
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: { curve: 'smooth' },
    markers: { size: 0 },
    xaxis: { categories: values.map((_, i) => i + 1) },
    yaxis: [
      { title: { text: '값' } },
      {
        opposite: true,
        title: { text: '변화율 (%)' },
        labels: { formatter: v => `${v}%` }
      }
    ]
  }

  const series = [
    { name: '값', data: values },
    { name: '변화율(%)', data: rates },
  ]

  return (
    <div>
      <h3>Change Rate Charts</h3>
      <Chart type="line" options={options} series={series} />
    </div>
  )
}

export default ChangeRateCharts
