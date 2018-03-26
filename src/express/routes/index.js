const presenter = require('../../presenter');

module.exports = (app) => {

    app.get('/api/products', (req, res) => {
        var promise = presenter.readProducts();
        promise.then(result=>{
            res.send(result);
        }).catch(error=>{
            res.send(error);
        });
    });

    app.post('/api/checkout', (req, res) => {
        var promise = presenter.checkout(req.body.codes);
        promise.then(result=>{
            res.send(result);
        }).catch(error=>{
            res.send(error);
        });
    });


}