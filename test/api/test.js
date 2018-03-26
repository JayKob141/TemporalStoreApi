const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
var axios = require('axios');
chai.should();
chai.use(chaiAsPromised);
const app = require('../../src/express/index-test.js');

describe('Products', function() {

  var fnAxiosCheckout; 

  beforeEach(function() {
      fnAxiosCheckout = (codes) =>{
        var promise = axios.post('http://127.0.0.1:3303/api/checkout',{
          codes : codes 
        }).then(function (response) {
          var data = response.data;

          return new Promise((resolve,reject)=>{
            resolve(data.total);
          });

        }).catch(function (error) {
          console.error(error);

          return new Promise((resolve,reject)=>{
            resolve(-1);
          })
        });
        return promise;
      }
  });

  describe('Select Products', function() {

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

    it('POST /api/checkout CASE EMPTY POST', function(done) {
      var promise = fnAxiosCheckout([]);
      promise.should.eventually.equal(0).notify(done);
    });

    it('GET /api/products',function(done){

      var promise = axios.get('http://127.0.0.1:3303/api/products').then(function (response) {
        var data = response.data;
        console.log(response.data);

        return new Promise((resolve,reject)=>{
          resolve(data.length > 0);
        });

      }).catch(function (error) {
        console.error(error);

        return new Promise((resolve,reject)=>{
          resolve(false);
        })
      });

      promise.should.eventually.equal(true).notify(done);

    });

  });

});