var pc = require('protractor-cucumber'); module.exports = steps; var steps = function () {
  this.Given('I am on the home', function (callback) {
    support.get(this, 'http://localhost:3000', function (result) {
      setTimeout(callback, 1000);
    });
  });

  this.Then('I should see a {stringInDoubleQuotes}', function (link, callback) {
    support.findByBinding(this, link, function (result) {
      result.getText().then(function (text) {
        text.trim().toLowerCase().should.equal(link.trim().toLowerCase());
        setTimeout(callback, 1000);
      });
    });
  });
};