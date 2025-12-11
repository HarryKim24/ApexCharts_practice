import { useEffect, useState } from "react"
import Chart from "react-apexcharts";

const StaticApiCharts = () => {

  const [products, setProducts] = useState([]);
  const productNames = products.map(p => p.title);
  const productPrices = products.map(p => p.price);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products)
    );
    console.log()
  }, []);

  const options = {
    chart: {
      id: 'api-charts',
    },
    xaxis: {
      categories: productNames
    },
    yaxis: {
      logarithmic: true,
      logBase: 2,
      labels: {
        formatter: value => value.toFixed(0)
      }
    }
  };

  const series = [
    {
      name: '상품 가격',
      data: productPrices
    }
  ]

  return (
    <div>
      <h3>📌 API 데이터 기반 Static Chart</h3>
      <Chart type='bar' series={series} options={options} />
    </div>
  )
}

export default StaticApiCharts
