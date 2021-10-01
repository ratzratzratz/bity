import React, { Component, useState, forceUpdate } from 'react';
const Fetch = () => {
    
    function check(BitChange){
      console.log(BitChange);
        if(BitChange > 0 ){
        let el = document.getElementById('BitChange');
        el.classList.add('positiv');
        }else{
        let el = document.getElementById('BitChange');
        el.classList.add('negativ');
        }
    }
    function refresh() {
        window.location.reload();
    }

    function error() {
        console.log('small problem with the API sorry.');
        setInterval(refresh, 2500);
    }
    function satoshi(price) {
      console.log(price);
      let oneDollarInSatoshi = (1 / (price)) * 100000000;
      oneDollarInSatoshi = parseFloat(oneDollarInSatoshi.toFixed(0));
      setSatoshi(oneDollarInSatoshi);
    }
const [bitcoin, setBitcoin] = useState('');
const [bit24h, setBit24h] = useState('');
const [sats, setSatoshi] = useState('');
fetch("https://coingecko.p.rapidapi.com/simple/price?vs_currencies=usd&ids=bitcoin&include_24hr_change=true", {
  "method": "GET",
  "headers": {
      "x-rapidapi-key": "151c6cd906mshbf9ba83745572a1p157622jsn7b0ab76152ef",
      "x-rapidapi-host": "coingecko.p.rapidapi.com"
  }
})
  .then(response => 
    response.json()
    )
    .then(data => {
      // console.log(data);
      let BitPrice = data.bitcoin.usd;
      let BitChange = data.bitcoin.usd_24h_change;
      BitChange = parseFloat(BitChange.toFixed(2));
      setBitcoin(BitPrice);
      setBit24h(BitChange);
      check(BitChange);
      satoshi(BitPrice);
    })
    .catch(err => {
      error();
    });


    return <div>
       <h3>Bitcoin price: <span id="bitcoinPrice">{bitcoin}</span>$</h3>
       <p>24h Change: <span id="BitChange">{bit24h}</span>%</p>
       <p>1 USD = <span id="sats">{sats}</span> Satoshi</p>
       </div>
}
export default Fetch;