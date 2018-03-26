const presenter = require('../../presenter');

module.exports = (app) => {

    app.get('/products', (req, res) => {
        var promise = presenter.readProducts();
        promise.then(result=>{
            res.send(result);
        }).catch(error=>{
            res.send(error);
        });
    });

    app.post('/checkout', (req, res) => {

    });


}