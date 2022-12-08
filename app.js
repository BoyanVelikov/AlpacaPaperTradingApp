const Alpaca = require('@alpacahq/alpaca-trade-api');

// const accountData = document.getElementById('account-data');

const options = {
    keyId: 'PKN2WI61H3VGTPQ4IT5O',
    secretKey: 'qtjXhccl4DUN6pibe77swyc1TsFY7phW0DTg5f8k',
    paper: true
};

const alpaca = new Alpaca(options);

alpaca.getAccount().then((account) => {
    console.log('Current account: ', account);
    // accountData.innerHTML = account;
});

const buyParams = {
    symbol: 'BTC/USD',
    qty: 0.01,
    side: 'buy',
    type: 'market',
    time_in_force: 'gtc'
};

alpaca.createOrder(buyParams).then((order) => {
    console.log('Order details: ', order);
});

const sellParams = {
    symbol: 'BTC/USD',
    qty: 0.01,
    side: 'sell',
    type: 'market',
    time_in_force: 'gtc'
};

alpaca.createOrder(sellParams).then((order) => {
    console.log('Order details: ', order);
});

function buyOrder() {
    alpaca.createOrder(buyParams).then((order) => {
        console.log('Order details: ', order);
    });
}

function sellOrder() {
    alpaca.createOrder(sellParams).then((order) => {
        console.log('Order details: ', order);
    });
}

setInterval(buyOrder, 100000);
setInterval(sellOrder, 150000);





