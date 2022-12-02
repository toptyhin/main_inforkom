import ReactECharts from 'echarts-for-react';
import { PieChart } from 'echarts/charts';
import * as echarts from 'echarts';
import './charts.css'

const Charts = ({fuel, vat, discount, manage}) => {
  const priceDisplayconfig = {
  currency: 'RUB',
  currencyDisplay: 'symbol',
};

  let chartOptions = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
  },
  series: [{
    name: 'Цена топлива',
    type: 'pie',
    radius: ['80%', '90%'],
    avoidLabelOverlap: false,
    height: '100%',

    itemStyle: {
      borderColor: '#eaedf0',
      borderWidth: 1
    },
    label: {
      show: true,
      position: 'center',
      formatter: (d) => d.name + ' ' + new Intl.NumberFormat('ru-RU', priceDisplayconfig).format(d.value),
      fontSize: 9,
    },
    emphasis: {
      focus: 'series',
      label: {
        show: true,
        backgroundColor: '#eaedf0',
        fontWeight: 'bold',
        fontSize: 19,
      }
    },
    labelLine: {
      show: false
    },
    color: [
      '#d2df97',
      '#73aa37',
      '#fbc91b',
      '#FBA834'
    ],
    data: [ { value: fuel, name: 'Расходы на топливо р/мес' },
            { value: vat,  name: ' НДС' },
            { value: discount, name: 'Скидка на топливо' },
            { value: manage, name: 'Управление картой' },
          ]
    }]
  };

  return (
    <div>
      <ReactECharts option={chartOptions}/>
    </div>
  )
};

export default Charts;
