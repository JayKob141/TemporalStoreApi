const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
var axios = require('axios');
chai.should();
chai.use(chaiAsPromised);
const app = require('../../src/express/index-test.js');
var models = require('../../src/sequelize/models');
var User = models.User;

describe('Products', function() {

  var fnAxiosCheckout = (codes) => {
    var promise = User.findOne({where:{userName:'Jacob'},raw:true})
    .then( user => {
      return axios({
          method: 'post',
          url: 'http://127.0.0.1:3303/api/checkout',
          data: {
            codes : codes 
          },
          headers:{
            "Authorization": 'Bearer '+user.token
          }
        }).then(function (response) {
          var data = response.data;

          return new Promise((resolve,reject)=>{
            resolve(data.total);
          });

        }).catch(function (error) {

          return new Promise((resolve,reject)=>{
            resolve(-1);
          })
        });
    });
    return promise;
  }; 

  beforeEach( function() { });

  describe('Do checkout of products', function() {

    it('POST /api/checkout CASE 1', function(done) {
      var promise = fnAxiosCheckout(['PANTS','TSHIRT','HAT']);
      promise.should.eventually.equal(32.5).notify(done);
    });

    it('POST /api/checkout CASE 2', function(done) {
      var promise = fnAxiosCheckout(['PANTS','TSHIRT','PANTS']);
      promise.should.eventually.equal(25.0).notify(done);
    });

    it('POST /api/checkout CASE 3', function(done) {
      var promise = fnAxiosCheckout(['TSHIRT','TSHIRT','TSHIRT','PANTS','TSHIRT']);
      promise.should.eventually.equal(81.0).notify(done);
    });

    it('POST /api/checkout CASE 4', function(done) {
      var promise = fnAxiosCheckout(['PANTS','TSHIRT','PANTS','PANTS','HAT','TSHIRT','TSHIRT']);
      promise.should.eventually.equal(74.50).notify(done);
    });

    it('POST /api/checkout CASE empty post data', function(done) {
      var promise = fnAxiosCheckout([]);
      promise.should.eventually.equal(0).notify(done);
    });

  });

  describe('Select products', function() {
    it('GET /api/products should get at least 1 product', function(done){

      var promise = User.findOne({where:{userName:'Jacob'},raw:true})
      .then( user => {
        var promise = axios({url:'http://127.0.0.1:3303/api/products',
          headers:{
            'Authorization': 'Bearer '+user.token
          }
        }).then(function (response) {
          var data = response.data;

          return new Promise((resolve,reject)=>{
            resolve(data.length > 0);
          });

        }).catch(function (error) {

          return new Promise((resolve,reject)=>{
            resolve(false);
          })
        });
        return promise;
      });

      promise.should.eventually.equal(true).notify(done);

    });
  });

  after(()=>{
    app.close();
    process.exit(0);
  })

});