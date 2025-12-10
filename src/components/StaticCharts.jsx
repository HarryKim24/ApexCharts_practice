import Chart from "react-apexcharts";

const StaticCharts = () => {

  const data = [
    {
      name: '매출',
      data: [10, 41, 35, 51, 49, 62, 69],
    },
  ];

  const options = {
    chart: {
      id: 'basic-line',
    },
    xaxis: {
      categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월']
    },
    dataLabels: {
      enabled: true
    },
    colors: ['red']
  };

  const pieData = [40, 30, 20, 10];
  const pieLabel = ['컴퓨터', '가전', '식품', '기타'];

  return (
    <div>
      <h3>📌 정적 데이터 차트</h3>
      <div style={{ display: 'flex' }}>
        <Chart type='line' series={data} options={options} width={250} />
        <Chart type='bar' series={data} options={options} width={250} />
        <Chart type="area" series={data} options={options} />
        <Chart type='pie' series={pieData} options={{ labels: pieLabel }} width={250} />
      </div>
    </div>
  )
}

export default StaticCharts
