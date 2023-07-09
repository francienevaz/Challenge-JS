const btc = document.querySelector("#bitcoin");
const eth = document.querySelector("#ethereum");
const dog = document.querySelector("#dogecoin");

const settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Cbrl",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dog.innerHTML = response.dogecoin.usd;
})