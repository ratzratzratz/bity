import React, { Component } from 'react';
import MyChart2 from './chart2';



export default class Bitcoin2 extends Component {
    constructor() {
        super();
        this.state = {
            fetchingData: true,
            data: [],
        }
    }
    componentDidMount() {
        const url ="https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2022-09-30";
        fetch(url)
        .then(response => response.json())
        .then(bitcoinData => {
            this.setState({
                data: bitcoinData.bpi,
                fetchingData: false // after we fetched the data, fetch() is no longer needed
            })
            // console.log(bitcoinData.bpi); -> date:price
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() { 
        return ( <div className="chartdiv">

            <h4>Bitcoin 2021 Chart</h4>
            { !this.state.fetchingData ? <MyChart2 data={ this.state.data }/> : null}
        </div> );
    }
}

