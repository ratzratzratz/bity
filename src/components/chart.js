import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment';


export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      prices: []
    }
  }
  componentWillMount() {
    const unsortedData = this.props.data;
    let dates = [];
    let prices = [];
    for (let item in unsortedData) {
      let bitcoinDates = moment(item).format('MMM DD');
      dates.push(bitcoinDates);
      prices.push(unsortedData[item])
    }
    this.setState({
      dates: dates,
      prices: prices
    })
  }
    componentDidMount() {
        var chartContext = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(chartContext, {
          type: 'line',
          data: {
            labels: this.state.dates,
            datasets: [{
              data: this.state.prices,
              backgroundColor: 'rgba(255, 59, 0, 1)', 
              borderColor: 'rgba(255, 5, 0, 1)',
              borderWidth: 1,
              pointRotation:120,
              pointStyle: 'cross'
          
            }]
          },
          options: {
            plugins:{
              legend: {
                display: false
      

              }
            },
            scales: {
              yAxis: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }

    render() {
        return (
            <canvas id='myChart'></canvas>
        )
    }
}