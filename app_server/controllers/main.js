/* GET home page */
module.exports.index = function(req, res, next) {
  res.render('index', {
    title: 'My Application'
  });
};