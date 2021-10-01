import React, { Component } from 'react';
import MyChart from './chart';



export default class Bitcoin extends Component {
    constructor() {
        super();
        this.state = {
            fetchingData: true,
            data: [],
        }
    }
    componentDidMount() {
        const url = "https://api.coindesk.com/v1/bpi/historical/close.json";
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

            <h4>Bitcoin 30 Days Chart</h4>
            { !this.state.fetchingData ? <MyChart data={ this.state.data }/> : null}
        </div> );
    }
}

