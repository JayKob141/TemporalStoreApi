const presenter = require('../../presenter');
const passport = require('../passport');

module.exports = (app) => {

    app.get('/api/products', passport.authenticate('bearer', { session: false }), (req, res) => {
        var promise = presenter.readProducts();
        promise.then(result=>{
            res.send(result);
        }).catch(error=>{
            res.send(error);
        });
    });

    app.post('/api/checkout', passport.authenticate('bearer', { session: false }), (req, res) => {
        var promise = presenter.checkout(req.body.codes);
        promise.then(result=>{
            res.send(result);
        }).catch(error=>{
            res.send(error);
        });
    });


}