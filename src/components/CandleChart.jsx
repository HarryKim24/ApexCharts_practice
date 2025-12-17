import Chart from "react-apexcharts";

const CandleChart = () => {

  const series = [
    {
      data: [
        { x: "09:00", y: [30, 40, 25, 35] },
        { x: "09:01", y: [35, 45, 30, 40] },
        { x: "09:02", y: [40, 50, 38, 48] },
        { x: "09:03", y: [48, 55, 42, 44] },
        { x: "09:04", y: [44, 60, 40, 58] }
      ]
    }
  ];

  const options = {
    chart: {
      type: 'candlestick'
    },
    title: {
      text: '캔들 차트',
      align: 'left'
    },
    xaxis: {
      type: 'category'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div>
      <Chart
        type="candlestick"
        series={series}
        options={options}
        height={350}
      />
    </div>
  )
}

export default CandleChart
